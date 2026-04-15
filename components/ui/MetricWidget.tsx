import { ReactNode } from "react";
import GlassCard from "./GlassCard";

interface MetricWidgetProps {
    label: string;
    value: string | number;
    unit?: string;
    icon?: ReactNode;
    trend?: string;
    className?: string;
}

export default function MetricWidget({ label, value, unit, icon, trend, className = "" }: MetricWidgetProps) {
    return (
        <GlassCard className={`flex flex-col justify-between h-full ${className}`}>
            <div className="flex justify-between items-start mb-4">
                <span className="text-gray-400 font-mono text-xs uppercase tracking-wider">{label}</span>
                {icon && <div className="text-coral-500 bg-coral-500/10 p-2 rounded-lg">{icon}</div>}
            </div>
            <div>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-sans font-semibold text-white">{value}</span>
                    {unit && <span className="text-gray-500 font-mono text-sm">{unit}</span>}
                </div>
                {trend && (
                    <div className="mt-2 text-xs font-mono text-data-green flex items-center gap-1">
                        <span>↑</span> {trend}
                    </div>
                )}
            </div>
        </GlassCard>
    );
}
