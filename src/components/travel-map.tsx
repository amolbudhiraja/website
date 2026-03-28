"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const VISITED_COUNTRIES = new Set([
  "840", // USA
  "124", // Canada
  "826", // United Kingdom
  "724", // Spain
  "250", // France
  "356", // India
  "392", // Japan
]);

export function TravelMap() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-border bg-muted">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 130, center: [10, 20] }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const visited = VISITED_COUNTRIES.has(geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={visited ? "var(--indigo)" : "var(--border)"}
                  stroke="var(--background)"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none", opacity: visited ? 1 : 0.6 },
                    hover: { outline: "none", opacity: visited ? 0.8 : 0.4 },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <p className="text-xs font-mono text-muted-foreground text-center pb-3">
        7 countries and counting
      </p>
    </div>
  );
}
