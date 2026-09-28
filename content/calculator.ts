import { rateMidpoint, rates } from "@/content/rates";

// Cost estimate calculator settings.
// Defaults are illustrative inputs for the visitor to overwrite. They are not market data.
export const calculator = {
  // Starts from the mid-level rate in content/rates.ts. null leaves the field empty.
  syntaxhiresMonthlyRate: rateMidpoint(rates.mid),
  defaults: {
    teamSize: 3,
    months: 12,
    salary: 100000,
    overheadPercent: 25,
    recruitmentCost: 100000,
    freelancerHourly: 800,
    hoursPerMonth: 160,
  },
  exampleNote: "Example figures are filled in so you can see how it works. Replace them with your own.",
  missingRate: "Add the SyntaxHires rate from your quote to compare.",
  quoteLink: { label: "Ask for a quote", href: "/contact-us/" },
  disclaimer:
    "This is arithmetic on the figures you enter. It is an estimate for comparison, not a quote. Use any currency, as long as every field uses the same one.",
};
