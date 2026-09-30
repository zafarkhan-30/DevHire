import type { SVGProps } from "react";

// The four icons repeated most across the site, drawn once in <IconSprite /> (in the root layout) and
// referenced with <use>. Each copy is then a short tag instead of a full SVG, which keeps the HTML lean.
// Same paths and props as the lucide-react icons they replace.
const PATHS = {
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  "circle-check": (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m16 9-5.5 5.5L8 12" />
    </>
  ),
};

type Name = keyof typeof PATHS;
type Props = Omit<SVGProps<SVGSVGElement>, "children"> & { size?: number };

export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      {(Object.keys(PATHS) as Name[]).map((name) => (
        <symbol key={name} id={`i-${name}`} viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {PATHS[name]}
          </g>
        </symbol>
      ))}
    </svg>
  );
}

function sprite(name: Name) {
  function SpriteIcon({ size = 24, ...props }: Props) {
    return (
      <svg width={size} height={size} {...props}>
        <use href={`#i-${name}`} />
      </svg>
    );
  }
  return SpriteIcon;
}

export const ArrowRight = sprite("arrow-right");
export const ChevronDown = sprite("chevron-down");
export const Check = sprite("check");
export const CircleCheck = sprite("circle-check");
