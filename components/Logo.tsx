import Image from "next/image";

export function Logo({ light = false, size = 52 }: { light?: boolean; size?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/logo.webp"
        alt=""
        width={size}
        height={size}
        priority
        className="shrink-0 drop-shadow-sm"
        style={{ width: size, height: size }}
      />
      <span className="flex flex-col leading-none">
        <span className={`text-2xl font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}>
          fixer<span className="text-brand">land</span>
        </span>
        <span className={`mt-1 text-[11px] tracking-wide ${light ? "text-white/70" : "text-muted"}`}>
          Mobile Repair Experts
        </span>
      </span>
    </span>
  );
}
