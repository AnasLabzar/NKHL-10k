// Horizontal infinite marquee — pure CSS animation, no JS needed
interface MarqueeStripProps {
  items: { name: string; logo?: string }[];
  speed?: "slow" | "normal" | "fast";
  label?: string;
}

const speedClass = {
  slow:   "animate-[marquee_50s_linear_infinite]",
  normal: "animate-marquee",
  fast:   "animate-[marquee_15s_linear_infinite]",
};

export default function MarqueeStrip({ items, speed = "normal", label }: MarqueeStripProps) {
  // Double the items so the loop is seamless
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden w-full relative">
      {label && (
        <p className="text-center text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-gray-600 mb-8">
          {label}
        </p>
      )}
      <div className={`flex gap-0 ${speedClass[speed]} whitespace-nowrap`} style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-14 border-r border-white/5 h-20"
          >
            {item.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.logo}
                alt={item.name}
                className="h-8 object-contain opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0 filter"
              />
            ) : (
              <span className="font-display text-xl text-white/30 hover:text-white/70 transition-colors duration-300 tracking-widest uppercase select-none">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
