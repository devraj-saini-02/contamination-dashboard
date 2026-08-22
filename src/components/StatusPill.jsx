import { colorForStatus, labelForStatus } from "./status";

export default function StatusPill({ status, label }) {
  const color = colorForStatus(status);
  return (
    <span className="status-pill" style={{ background: `${color}22`, color }}>
      <span className="status-dot" style={{ background: color }} />
      {label || labelForStatus(status)}
    </span>
  );
}
