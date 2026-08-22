// Single source of truth for the state palette used everywhere in the app: green (safe),
// orange (warning), red (red alert), grey (offline/baselining/excluded-from-tracing).
export const STATUS_COLORS = {
  SAFE: "var(--safe)",
  WARN: "var(--warn)",
  RED: "var(--red)",
  OFFLINE: "var(--offline)",
};

// Maps every state vocabulary used across the API (node status, final_state, sensor_health) onto
// the four-color palette.
export function colorForStatus(status) {
  switch (status) {
    case "SAFE":
    case "active":
    case "OK":
      return STATUS_COLORS.SAFE;
    case "WARN":
    case "SUSPECT":
      return STATUS_COLORS.WARN;
    case "RED":
    case "FAILED":
      return STATUS_COLORS.RED;
    case "offline":
    case "baselining":
    default:
      return STATUS_COLORS.OFFLINE;
  }
}

export function labelForStatus(status) {
  return String(status || "unknown").toLowerCase();
}
