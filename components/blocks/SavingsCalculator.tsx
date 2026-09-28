"use client";

import { useId, useState } from "react";
import type { SavingsBlock } from "@/content/types";

type Props = Pick<SavingsBlock, "agencyPercent" | "contingency" | "flatFee" | "defaultCtc" | "note">;

const rupees = (value: number) => `₹${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.max(0, value))}`;
const range = (low: number, high: number) => (Math.round(low) === Math.round(high) ? rupees(low) : `${rupees(low)} – ${rupees(high)}`);

// Compares SyntaxHires recruitment fees with a percentage agency fee on the salary the visitor enters.
// Savings are shown as a range: the smallest saving uses the top of our price range, so the figure is never overstated.
export function SavingsCalculator({ agencyPercent, contingency, flatFee, defaultCtc, note }: Props) {
  const uid = useId();
  const [ctc, setCtc] = useState(defaultCtc);
  const [hires, setHires] = useState(1);
  const [percent, setPercent] = useState(agencyPercent);

  const count = Math.max(hires, 1);
  const agency = (ctc * percent) / 100 * count;
  const contLow = (ctc * contingency[0]) / 100 * count;
  const contHigh = (ctc * contingency[1]) / 100 * count;
  const flatLow = flatFee[0] * count;
  const flatHigh = flatFee[1] * count;

  const rows = [
    { name: `Typical agency fee (${percent}% of CTC)`, fee: rupees(agency), save: "Baseline" as string | null },
    {
      name: `SyntaxHires contingency (${contingency[0]}% – ${contingency[1]}%)`,
      fee: range(contLow, contHigh),
      save: agency > contHigh ? range(agency - contHigh, agency - contLow) : null,
    },
    {
      name: "SyntaxHires flat fee",
      fee: range(flatLow, flatHigh),
      save: agency > flatHigh ? range(agency - flatHigh, agency - flatLow) : null,
      highlight: true,
    },
  ];

  const best = Math.max(agency - contHigh, agency - flatHigh);

  const fields = [
    { key: "ctc", label: "Annual CTC offered", hint: "Per hire, in rupees", value: ctc, set: setCtc },
    { key: "hires", label: "Number of hires", hint: "Roles at this salary", value: hires, set: setHires },
    { key: "percent", label: "Agency fee", hint: "Percent of CTC your agency charges", value: percent, set: setPercent },
  ];

  return (
    <div className="calc calc--savings">
      <div className="calc__inputs">
        {fields.map((field) => (
          <div key={field.key} className="field">
            <label htmlFor={`${uid}-${field.key}`}>
              <span>{field.label}</span>
            </label>
            <input
              id={`${uid}-${field.key}`}
              type="number"
              inputMode="decimal"
              min={0}
              value={field.value || ""}
              placeholder="0"
              aria-describedby={`${uid}-${field.key}-hint`}
              onChange={(event) => field.set(Math.max(0, Number(event.target.value) || 0))}
            />
            <small id={`${uid}-${field.key}-hint`}>{field.hint}</small>
          </div>
        ))}
      </div>

      <div className="calc__results" aria-live="polite">
        <table className="dtable dtable--compact">
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">{count > 1 ? `Fee for ${count} hires` : "Fee"}</th>
              <th scope="col">You save</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className={row.highlight ? "is-highlight" : undefined}>
                <th scope="row">{row.name}</th>
                <td data-label="Fee">{ctc > 0 ? row.fee : "—"}</td>
                <td data-label="You save">{row.save ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {ctc > 0 && best > 0 ? (
          <p className="calc__saving">
            You save at least <strong>{rupees(best)}</strong> compared with a {percent}% agency fee.
          </p>
        ) : null}
        <p className="calc__note">{note}</p>
      </div>
    </div>
  );
}
