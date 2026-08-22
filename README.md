# dashboard

Operations/monitoring UI for the contamination detection & tracing demo. Talks to exactly one
backend: `central-system/`'s REST API (`VITE_CENTRAL_API_BASE_URL`). It never calls `node/`
directly — even the "press start" simulation controls go through `central-system/`'s
demo-only proxy (`/simulation/*`), which forwards to `node/`'s orchestrator server-side.

## Stack

React + Vite, `react-leaflet` (OpenStreetMap tiles, no API key needed), `recharts`, plain
`fetch`.

## Views

- **Network Map** (default) — live node/edge health from `GET /nodes` / `GET /edges`, polled
  every few seconds.
- **Incident List & Detail** — the DAG / plume-playback view: a time slider scrubs
  `GET /incidents/{id}/timeseries`, animating node color and edge flux directly from the
  tracing engine's own mass/flux numbers (no client-side re-derivation), with the top candidate
  source highlighted throughout.
- **Sensor Health / Replacement Queue** — per-node-per-contaminant health table.
- **Model Registry** — OTA model versions/shadow status, with a "Push Update" action.
- **Simulation Control Panel** — start/stop, inject discharge, inject sensor fault, live sim
  status — all via `central-system/`'s `/simulation/*` proxy endpoints.

## Local setup

```bash
npm install
cp .env.example .env
npm run dev   # http://localhost:5173
```

Requires `central-system/` running on port 8000 (which in turn requires `node/`'s orchestrator
on port 8100 for the Simulation Control Panel to do anything).
