// SyntaxHires rate card: monthly rate per engineer, in rupees. The only place rates are set.
// Use a single number (80000) or a range ([60000, 80000]). Leave null until the rate is confirmed:
// pages then show "On request" or leave the figure out, and the calculator's SyntaxHires field starts empty.
// Read by: the offshore cost guide, the Hire Dedicated Developers page, every /hire/ page's pricing tiers,
// and the cost estimate calculator (which starts from the mid-level rate).

export type Rate = number | [number, number] | null;
export type Level = "junior" | "mid" | "senior" | "lead";

export const rates: Record<Level, Rate> = {
  junior: null, // PLACEHOLDER
  mid: null, // PLACEHOLDER
  senior: null, // PLACEHOLDER
  lead: null, // PLACEHOLDER
};

const rupees = (value: number) => `₹${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value)}`;

// "₹60,000 – ₹80,000", "₹80,000", or "—" when not set ("—" makes stat tiles and list lines hide themselves).
export function rateText(rate: Rate): string {
  if (rate === null) return "—";
  return Array.isArray(rate) ? `${rupees(rate[0])} – ${rupees(rate[1])}` : rupees(rate);
}

// Price label for pricing tiers.
export const ratePrice = (rate: Rate) => (rate === null ? "On request" : rateText(rate));

// Single figure for the calculator: the rate itself, or the middle of a range.
export const rateMidpoint = (rate: Rate) => (rate === null ? null : Array.isArray(rate) ? Math.round((rate[0] + rate[1]) / 2) : rate);

// Lowest to highest across all levels, e.g. for "Developer rate" in the cost guide.
export function rateSpan(): string | null {
  const values = Object.values(rates).flatMap((rate) => (rate === null ? [] : Array.isArray(rate) ? rate : [rate]));
  if (!values.length) return null;
  return rateText([Math.min(...values), Math.max(...values)]);
}

export const hasRates = Object.values(rates).some((rate) => rate !== null);
