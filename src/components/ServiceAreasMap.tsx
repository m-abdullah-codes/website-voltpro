"use client";

import { useEffect, useId, useMemo, useState } from "react";
import MapLibreGL from "maplibre-gl";
import { Map, MapControls, MapMarker, MarkerContent, MapPopup, useMap } from "@/components/ui/map";

const HUB = { lng: -84.388, lat: 33.749, name: "VoltPro HQ" };

const AREAS = [
  "Downtown", "Westside", "Northpark", "Eastbridge", "Lakeview",
  "Greenfield", "Riverside", "Oakwood", "Millbrook", "Sunnyside",
  "Harbor Heights", "Clearwater", "Stonegate", "Brookside", "Meadowlands",
  "Pinehurst", "Elmwood", "Fairview", "Cedarhill", "Maplewood",
  "Hillcrest", "Valleyview", "Creekside", "Redwood", "Silverdale",
];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function buildAreaFeatures() {
  return AREAS.map((name, i) => {
    const lng = HUB.lng + (seededRandom(i + 1) - 0.5) * 0.55;
    const lat = HUB.lat + (seededRandom(i + 401) - 0.5) * 0.38;
    return {
      type: "Feature" as const,
      properties: { id: i, name },
      geometry: { type: "Point" as const, coordinates: [lng, lat] as [number, number] },
    };
  });
}

const areaFeatures = buildAreaFeatures();
const areasGeoJSON = { type: "FeatureCollection" as const, features: areaFeatures };

type SelectedArea = {
  id: number;
  name: string;
  coordinates: [number, number];
};

function CoverageRadius() {
  const { map, isLoaded } = useMap();
  const id = useId();
  const sourceId = `coverage-source-${id}`;
  const fillId = `coverage-fill-${id}`;
  const lineId = `coverage-line-${id}`;

  const circleGeoJSON = useMemo(() => {
    const points = 64;
    const radiusDeg = 0.72;
    const coords: [number, number][] = [];
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * 2 * Math.PI;
      coords.push([
        HUB.lng + Math.cos(angle) * radiusDeg,
        HUB.lat + Math.sin(angle) * radiusDeg * 0.82,
      ]);
    }
    return {
      type: "Feature" as const,
      properties: {},
      geometry: { type: "Polygon" as const, coordinates: [coords] },
    };
  }, []);

  useEffect(() => {
    if (!map || !isLoaded) return;

    map.addSource(sourceId, { type: "geojson", data: circleGeoJSON });
    map.addLayer({
      id: fillId,
      type: "fill",
      source: sourceId,
      paint: {
        "fill-color": "#3D7AB8",
        "fill-opacity": 0.06,
      },
    });
    map.addLayer({
      id: lineId,
      type: "line",
      source: sourceId,
      paint: {
        "line-color": "#3D7AB8",
        "line-width": 1.5,
        "line-opacity": 0.35,
        "line-dasharray": [4, 3],
      },
    });

    return () => {
      try {
        if (map.getLayer(lineId)) map.removeLayer(lineId);
        if (map.getLayer(fillId)) map.removeLayer(fillId);
        if (map.getSource(sourceId)) map.removeSource(sourceId);
      } catch {
        // ignore
      }
    };
  }, [map, isLoaded, sourceId, fillId, lineId, circleGeoJSON]);

  return null;
}

function AreaMarkers({ onSelect }: { onSelect: (area: SelectedArea | null) => void }) {
  const { map, isLoaded } = useMap();
  const id = useId();
  const sourceId = `areas-source-${id}`;
  const glowId = `areas-glow-${id}`;
  const layerId = `areas-layer-${id}`;

  useEffect(() => {
    if (!map || !isLoaded) return;

    map.addSource(sourceId, { type: "geojson", data: areasGeoJSON });
    map.addLayer({
      id: glowId,
      type: "circle",
      source: sourceId,
      paint: {
        "circle-radius": 10,
        "circle-color": "#3D7AB8",
        "circle-opacity": 0.12,
        "circle-blur": 0.8,
      },
    });
    map.addLayer({
      id: layerId,
      type: "circle",
      source: sourceId,
      paint: {
        "circle-radius": 4,
        "circle-color": "#3D7AB8",
        "circle-stroke-width": 1.5,
        "circle-stroke-color": "rgba(245, 247, 250, 0.9)",
        "circle-opacity": 0.9,
      },
    });

    const handleClick = (
      e: MapLibreGL.MapMouseEvent & { features?: MapLibreGL.MapGeoJSONFeature[] },
    ) => {
      if (!e.features?.length) return;
      const feature = e.features[0];
      const coords = (feature.geometry as GeoJSON.Point).coordinates as [number, number];
      onSelect({
        id: feature.properties?.id,
        name: feature.properties?.name,
        coordinates: coords,
      });
    };
    const handleMouseEnter = () => {
      map.getCanvas().style.cursor = "pointer";
    };
    const handleMouseLeave = () => {
      map.getCanvas().style.cursor = "";
    };

    map.on("click", layerId, handleClick);
    map.on("mouseenter", layerId, handleMouseEnter);
    map.on("mouseleave", layerId, handleMouseLeave);

    return () => {
      map.off("click", layerId, handleClick);
      map.off("mouseenter", layerId, handleMouseEnter);
      map.off("mouseleave", layerId, handleMouseLeave);
      try {
        if (map.getLayer(layerId)) map.removeLayer(layerId);
        if (map.getLayer(glowId)) map.removeLayer(glowId);
        if (map.getSource(sourceId)) map.removeSource(sourceId);
      } catch {
        // ignore
      }
    };
  }, [map, isLoaded, sourceId, glowId, layerId, onSelect]);

  return null;
}

function HubMarker() {
  return (
    <MapMarker longitude={HUB.lng} latitude={HUB.lat} anchor="center">
      <MarkerContent className="group">
        <span className="absolute inset-0 -m-3 rounded-full border border-[#3D7AB8]/40 animate-[pulse-expand_2.5s_ease-out_infinite]" />
        <span className="absolute inset-0 -m-5 rounded-full border border-[#7FB0DE]/20 animate-[pulse-expand_2.5s_ease-out_infinite_0.8s]" />
        <span className="relative block size-3 rounded-full bg-[#3D7AB8] shadow-[0_0_12px_rgba(61, 122, 184,0.8),0_0_0_3px_#0B1220,0_0_0_4px_#3D7AB8]" />
      </MarkerContent>
    </MapMarker>
  );
}

export default function ServiceAreasMap() {
  const [selected, setSelected] = useState<SelectedArea | null>(null);

  return (
    <div className="relative group/map">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#3D7AB8]/30 via-transparent to-[#7FB0DE]/15 opacity-60 transition-opacity group-hover/map:opacity-100" />
      <div className="relative overflow-hidden rounded-2xl border border-[#3D7AB8]/15 bg-[#060a12] shadow-[0_24px_80px_-20px_rgba(61, 122, 184,0.25)]">
        <div className="h-[min(520px,62vw)] min-h-[340px] w-full">
          <Map
            theme="dark"
            center={[HUB.lng, HUB.lat]}
            zoom={9.2}
            minZoom={8}
            maxZoom={13}
            dragRotate={false}
            pitchWithRotate={false}
            touchPitch={false}
            className="[&_.maplibregl-ctrl-attrib]:!text-[9px] [&_.maplibregl-ctrl-attrib]:!opacity-40 [&_.maplibregl-ctrl-bottom-right]:!bottom-1 [&_.maplibregl-ctrl-bottom-right]:!right-1"
          >
            <CoverageRadius />
            <AreaMarkers onSelect={setSelected} />
            <HubMarker />
            <MapControls
              position="top-right"
              showZoom
              className="[&_button]:border-[#3D7AB8]/15 [&_button]:bg-[#0B1220]/80 [&_button]:text-[#7FB0DE] [&_button]:backdrop-blur-md [&>div]:border-[#3D7AB8]/15 [&>div]:bg-[#0B1220]/80 [&>div]:backdrop-blur-md"
            />
            {selected && (
              <MapPopup
                longitude={selected.coordinates[0]}
                latitude={selected.coordinates[1]}
                onClose={() => setSelected(null)}
                closeOnClick={false}
                focusAfterOpen={false}
                offset={12}
                closeButton
                className="border-[#3D7AB8]/20 bg-[#0B1220]/95 backdrop-blur-md"
              >
                <div className="min-w-28 pr-4">
                  <p className="text-sm font-medium text-[#F5F7FA]">{selected.name}</p>
                  <p className="mt-0.5 text-xs text-[#F5F7FA]/45">Same-day service available</p>
                </div>
              </MapPopup>
            )}
          </Map>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(2,5,10,0.85),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0B1220]/60 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div className="glass-card rounded-lg px-3 py-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#3D7AB8]/70">
              Live coverage
            </p>
            <p className="mt-0.5 text-xs text-[#F5F7FA]/55">
              {AREAS.length} areas · 50mi radius
            </p>
          </div>
          <div className="glass-card rounded-lg px-3 py-2 text-right">
            <p className="text-[10px] text-[#F5F7FA]/40">Tap a dot to explore</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-expand {
          0% { transform: scale(0.6); opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
