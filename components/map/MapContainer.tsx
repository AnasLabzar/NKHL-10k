// components/map/MapContainer.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Map, { Source, Layer, Marker } from "react-map-gl/mapbox";
import type { MapRef } from "react-map-gl/mapbox";
import type { FeatureCollection } from "geojson";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "mapbox-gl/dist/mapbox-gl.css";

// Coordinates — Palmeraie Marrakech
const ROUTE_COORDINATES: [number, number][] = [
    [-7.9810, 31.6695], // Base Camp Tensift
    [-7.9750, 31.6720], // Aquaduct Traverse
    [-7.9700, 31.6680], // Street Sprint
    [-7.9650, 31.6650], // The Vault
    [-7.9600, 31.6695], // Obsidian Finish
];

const geoJsonData: FeatureCollection = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: {},
            geometry: { type: "LineString", coordinates: ROUTE_COORDINATES },
        },
    ],
};

const checkpoints = [
    { id: 1, name: "Base Camp Tensift",  coord: ROUTE_COORDINATES[0], type: "start" },
    { id: 2, name: "Aquaduct Traverse",  coord: ROUTE_COORDINATES[1], type: "checkpoint" },
    { id: 3, name: "Street Sprint",      coord: ROUTE_COORDINATES[2], type: "sprint" },
    { id: 4, name: "The Vault",          coord: ROUTE_COORDINATES[3], type: "obstacle" },
    { id: 5, name: "Obsidian Finish",    coord: ROUTE_COORDINATES[4], type: "finish" },
];

const MAP_STYLE = "mapbox://styles/mapbox/dark-v11";
const MAPBOX_TOKEN = "pk.eyJ1IjoiYW5hc2xhYnphciIsImEiOiJja3ZpMDNoYXY4N2Y4MnVzN3N2c2JnejUxIn0.riPAo4w4ulOx6p3cG06qFQ";

export default function MapContainer() {
    const mapRef = useRef<MapRef>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.6 }); 
    
    const [mapLoaded, setMapLoaded] = useState(false);
    const [activated, setActivated] = useState(false);
    const [lineProgress, setLineProgress] = useState(0);

    const startAnimationSequence = () => {
        // 1. Line Drawing
        const duration = 2800; // ms
        const startTime = performance.now();
        const animateLine = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setLineProgress(progress);
            if (progress < 1) requestAnimationFrame(animateLine);
        };
        requestAnimationFrame(animateLine);

        // 2. Cinematic Flight
        const map = mapRef.current?.getMap();
        if (map) {
            map.flyTo({
                center: [-7.9700, 31.6690],
                zoom: 14.8,
                pitch: 58,
                bearing: -25,
                duration: 4500,
                essential: true,
            });
        }
    };

    // ─── Activation Logic ───────────────────────────────────────────────────
    useEffect(() => {
        if (isInView && mapLoaded && !activated) {
            // Wait 1 second after arriving at the section to start the show
            const timer = setTimeout(() => {
                setActivated(true);
                startAnimationSequence();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isInView, mapLoaded, activated]);

    // ─── 3D Sources Initialization ──────────────────────────────────────────
    useEffect(() => {
        if (!mapLoaded) return;
        const map = mapRef.current?.getMap();
        if (map) {
            if (!map.getSource('mapbox-dem')) {
                map.addSource('mapbox-dem', {
                    'type': 'raster-dem',
                    'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
                    'tileSize': 512,
                    'maxzoom': 14
                });
                map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
            }
            if (!map.getLayer('sky')) {
                map.addLayer({
                    'id': 'sky',
                    'type': 'sky',
                    'paint': {
                        'sky-type': 'atmosphere',
                        'sky-atmosphere-sun': [0.0, 0.0],
                        'sky-atmosphere-sun-intensity': 15
                    }
                });
            }
        }
    }, [mapLoaded]);

    return (
        <div ref={containerRef} className="relative w-full h-[500px] md:h-[650px] bg-[#050811] rounded-3xl overflow-hidden border border-white/8 shadow-glass">
            {/* UI overlay */}
            <div className="absolute top-8 left-8 z-10 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={activated ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <span className="text-coral-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-2 block">Tactical Feed</span>
                    <h3 className="font-display text-4xl text-white mb-2 tracking-wide uppercase leading-none">The 10K <br/>Mission</h3>
                    {activated && (
                         <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-2 mt-4"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] text-green-500 font-mono uppercase tracking-widest">System Active · Route Calibrating</span>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            <Map
                ref={mapRef}
                initialViewState={{
                    longitude: -7.9400, // Start slightly offset for the fly-in
                    latitude:  31.6300,
                    zoom:      12,
                    pitch:     65,
                    bearing:   -15,
                }}
                reuseMaps
                style={{ width: "100%", height: "100%" }}
                mapStyle={MAP_STYLE}
                mapboxAccessToken={MAPBOX_TOKEN}
                onLoad={() => setMapLoaded(true)}
                onStyleData={(e) => {
                    if (e.target) e.target.resize();
                }}
                attributionControl={false}
                interactive
            >
                <Source id="route-src" type="geojson" data={geoJsonData}>
                    <Layer 
                        id="route"
                        type="line"
                        paint={{
                            "line-color": "#F97316",
                            "line-width": 4,
                            "line-blur": 1,
                            "line-dasharray": [1000, 1000],
                            "line-dashoffset": 1000 - (lineProgress * 1000)
                        }}
                    />
                </Source>

                <Source id="route-glow-src" type="geojson" data={geoJsonData}>
                    <Layer 
                        id="route-glow"
                        type="line"
                        paint={{
                            "line-color": "#FB923C",
                            "line-width": 14,
                            "line-blur": 12,
                            "line-opacity": 0.25,
                            "line-dasharray": [1000, 1000],
                            "line-dashoffset": 1000 - (lineProgress * 1000)
                        }}
                    />
                </Source>

                {checkpoints.map((cp, i) => (
                    <Marker key={cp.id} longitude={cp.coord[0]} latitude={cp.coord[1]} anchor="center">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={lineProgress > (i / checkpoints.length) ? { scale: 1, opacity: 1 } : {}}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="relative flex flex-col items-center"
                        >
                            <div className="absolute bottom-6 mb-2 whitespace-nowrap bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                                <span className="text-[10px] font-mono text-white/80 uppercase tracking-tighter">{cp.name}</span>
                            </div>

                            <button
                                onClick={(e) => { e.stopPropagation(); }}
                                className="relative group outline-none"
                            >
                                <span className="absolute inset-[-6px] rounded-full animate-pulse bg-coral-500/20 group-hover:bg-coral-500/40 transition-colors" />
                                <div className={`
                                    relative w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 group-hover:scale-125
                                    ${cp.type === "start" || cp.type === "finish"
                                        ? "bg-gold-400 border-gold-300 shadow-glow-gold"
                                        : "bg-coral-500 border-coral-400 shadow-glow-coral"}
                                `} />
                            </button>
                        </motion.div>
                    </Marker>
                ))}
            </Map>

            {/* SCANNING OVERLAY (Shows after arriving but before path starts) */}
            <AnimatePresence>
                {isInView && !activated && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-40 bg-black/20 backdrop-blur-[2px] pointer-events-none flex flex-col items-center justify-center"
                    >
                         {/* Scanning line effect */}
                         <motion.div 
                            animate={{ y: [0, 650, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                            className="absolute top-0 w-full h-px bg-coral-500/50 shadow-[0_0_20px_rgba(249,115,22,0.8)]"
                         />
                         
                         <div className="flex flex-col items-center gap-2">
                            <motion.span 
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="text-coral-500 font-mono text-[10px] uppercase tracking-[0.6em]"
                            >
                                Scanning Sector 04...
                            </motion.span>
                            <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    className="w-full h-full bg-coral-500"
                                />
                            </div>
                         </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!mapLoaded && (
                    <motion.div
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-50 bg-black flex items-center justify-center"
                    >
                         <div className="text-center">
                            <div className="w-16 h-16 rounded-full border border-coral-500/30 flex items-center justify-center mb-6">
                                <div className="w-8 h-8 rounded-full border-t-2 border-coral-500 animate-spin" />
                            </div>
                            <span className="text-coral-500 font-mono text-[10px] uppercase tracking-[0.4em] block">Establishing Link...</span>
                         </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Telemetry Overlay */}
            <div className="absolute bottom-8 left-8 right-8 z-10 flex justify-between items-end pointer-events-none">
                 <div className="bg-black/50 backdrop-blur-md px-4 py-3 border border-white/10 rounded-sm">
                    <p className="text-gray-500 text-[10px] uppercase font-mono tracking-widest mb-1">Elevation Scan</p>
                    <div className="w-32 h-6 flex items-end gap-1">
                        {[40, 60, 45, 80, 55, 90, 70, 40].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={activated ? { height: `${h}%` } : {}}
                                className="w-full bg-coral-500/40"
                            />
                        ))}
                    </div>
                 </div>

                 <div className="bg-black/50 backdrop-blur-md px-4 py-3 border border-white/10 rounded-sm">
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-gray-500 text-[10px] uppercase font-mono tracking-widest">Protocol</p>
                            <p className="text-white text-xs font-display uppercase italic">Sport-Luxury-v2.6</p>
                        </div>
                        <div className="w-12 h-[1px] bg-white/20" />
                        <div className="text-[10px] text-coral-500 font-mono">{activated ? "31.6690° N, 7.9700° W" : "STBY"}</div>
                    </div>
                 </div>
            </div>
        </div>
    );
}
