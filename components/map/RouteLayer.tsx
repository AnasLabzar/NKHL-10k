"use client";

import { Layer, LayerProps } from "react-map-gl/maplibre";

export const routeLayerStyle: LayerProps = {
    id: "route",
    type: "line",
    paint: {
        "line-color": "#F97316",
        "line-width": 4,
        "line-blur": 2,
        "line-opacity": 0.9,
    },
};

export const glowLayerStyle: LayerProps = {
    id: "route-glow",
    type: "line",
    paint: {
        "line-color": "#F97316",
        "line-width": 12,
        "line-blur": 10,
        "line-opacity": 0.2,
    },
};

export default function RouteLayer() {
    return (
        <>
            <Layer {...glowLayerStyle} />
            <Layer {...routeLayerStyle} />
        </>
    );
}
