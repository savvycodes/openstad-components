import { Explainer } from "./explainer.jsx";

export function Referer({ activeDecision }) {
  return (
    <div>
      <Explainer activeDecision={activeDecision} />
    </div>
  );
}
