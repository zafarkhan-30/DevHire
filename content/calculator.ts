// Cost estimate calculator settings.
// Defaults are illustrative inputs for the visitor to overwrite. They are not market data.
export const calculator = {
  // PLACEHOLDER: DevHire monthly rate per developer from the rate card. null leaves the field empty.
  devhireMonthlyRate: null as number | null,
  defaults: {
    teamSize: 3,
    months: 12,
    salary: 0,
    overheadPercent: 0,
    recruitmentCost: 0,
    freelancerHourly: 0,
    hoursPerMonth: 160,
  },
  disclaimer:
    "This is arithmetic on the figures you enter. It is an estimate for comparison, not a quote. Use any currency, as long as every field uses the same one.",
};
