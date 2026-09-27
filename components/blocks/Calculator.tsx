"use client";

import { useId, useState } from "react";
import { calculator } from "@/content/calculator";

type Inputs = {
  teamSize: number;
  months: number;
  salary: number;
  overheadPercent: number;
  recruitmentCost: number;
  freelancerHourly: number;
  hoursPerMonth: number;
  devhireRate: number;
};

const inputs: { key: keyof Inputs; label: string; hint: string; step?: number }[] = [
  { key: "teamSize", label: "Developers needed", hint: "Headcount" },
  { key: "months", label: "Engagement length", hint: "Months" },
  { key: "salary", label: "In-house salary", hint: "Per developer, per month" },
  { key: "overheadPercent", label: "Employer overhead", hint: "Percent on top of salary: tax, benefits, equipment" },
  { key: "recruitmentCost", label: "Recruitment cost", hint: "One-off, per hire" },
  { key: "freelancerHourly", label: "Freelancer rate", hint: "Per hour" },
  { key: "hoursPerMonth", label: "Productive hours", hint: "Per developer, per month" },
  { key: "devhireRate", label: "DevHire rate", hint: "Per developer, per month, from your quote" },
];

const format = (value: number) =>
  Number.isFinite(value) && value > 0 ? new Intl.NumberFormat("en", { maximumFractionDigits: 0 }).format(value) : "—";

export function Calculator() {
  const uid = useId();
  const [values, setValues] = useState<Inputs>({
    ...calculator.defaults,
    devhireRate: calculator.devhireMonthlyRate ?? 0,
  });

  const { teamSize, months, salary, overheadPercent, recruitmentCost, freelancerHourly, hoursPerMonth, devhireRate } = values;
  const span = Math.max(months, 1);

  // Recruitment is a one-off cost, spread across the engagement so the monthly figures compare fairly.
  const inHouse = salary > 0 ? teamSize * (salary * (1 + overheadPercent / 100) + recruitmentCost / span) : 0;
  const freelance = teamSize * freelancerHourly * hoursPerMonth;
  const dedicated = teamSize * devhireRate;
  const hours = teamSize * hoursPerMonth;

  const models = [
    { name: "In-house hire", monthly: inHouse },
    { name: "Freelancers", monthly: freelance },
    { name: "DevHire dedicated", monthly: dedicated, highlight: true },
  ];

  return (
    <div className="calc">
      <div className="calc__inputs">
        {inputs.map((input) => (
          <div key={input.key} className="field">
            <label htmlFor={`${uid}-${input.key}`}>
              <span>{input.label}</span>
            </label>
            <input
              id={`${uid}-${input.key}`}
              type="number"
              inputMode="decimal"
              min={0}
              value={values[input.key] || ""}
              placeholder="0"
              aria-describedby={`${uid}-${input.key}-hint`}
              onChange={(event) => setValues({ ...values, [input.key]: Math.max(0, Number(event.target.value) || 0) })}
            />
            <small id={`${uid}-${input.key}-hint`}>{input.hint}</small>
          </div>
        ))}
      </div>

      <div className="calc__results" aria-live="polite">
        <table className="dtable dtable--compact">
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Monthly cost</th>
              <th scope="col">Per productive hour</th>
              <th scope="col">Over {span} months</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model.name} className={model.highlight ? "is-highlight" : undefined}>
                <th scope="row">{model.name}</th>
                <td data-label="Monthly cost">{format(model.monthly)}</td>
                <td data-label="Per productive hour">{format(hours > 0 ? model.monthly / hours : 0)}</td>
                <td data-label={`Over ${span} months`}>{format(model.monthly * span)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="calc__saving">
          Annual difference, in-house vs DevHire:{" "}
          <strong>{inHouse > 0 && dedicated > 0 ? format(Math.abs(inHouse - dedicated) * 12) : "—"}</strong>
          {inHouse > 0 && dedicated > 0 ? (inHouse >= dedicated ? " lower with DevHire" : " higher with DevHire") : ""}
        </p>
        <p className="calc__note">{calculator.disclaimer}</p>
      </div>
    </div>
  );
}
