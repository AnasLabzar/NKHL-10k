"use client";

import { Marker } from "react-map-gl/maplibre";
import { motion, AnimatePresence } from "framer-motion";

interface CheckpointMarkerProps {
    checkpoint: {
        id: number;
        name: string;
        coord: [number, number];
        type: string;
    };
    index: number;
    isSelected: boolean;
    onSelect: (id: number) => void;
}

export default function CheckpointMarker({ checkpoint, index, isSelected, onSelect }: CheckpointMarkerProps) {
    return (
        <Marker
            longitude={checkpoint.coord[0]}
            latitude={checkpoint.coord[1]}
            anchor="center"
        >
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => onSelect(checkpoint.id)}
                className="relative group"
            >
                <span className="absolute inset-0 rounded-full bg-coral-500/30 animate-ping" />
                <div className={`
                    relative w-4 h-4 rounded-full border-2 transition-all duration-300
                    ${checkpoint.type === 'start' || checkpoint.type === 'finish'
                        ? 'bg-gold-400 border-gold-300 shadow-glow-gold'
                        : 'bg-coral-500 border-coral-400 shadow-glow-coral'}
                    group-hover:scale-150
                `}>
                    {checkpoint.type === 'finish' && (
                        <span className="absolute inset-0 flex items-center justify-center">
                            <span className="block w-1.5 h-1.5 bg-white rounded-full" />
                        </span>
                    )}
                </div>

                <AnimatePresence>
                    {isSelected && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: -30, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-obsidian-900/90 backdrop-blur-glass border border-coral-500/30 text-white text-xs font-sans font-medium shadow-glass"
                        >
                            {checkpoint.name}
                            <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-obsidian-900 border-r border-b border-coral-500/30 rotate-45" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </Marker>
    );
}
