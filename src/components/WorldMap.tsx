'use client';

import { useEffect, useRef } from 'react';

export default function WorldMap() {
    const mapRef = useRef<any>(null);
    const mapInstanceRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (mapInstanceRef.current) return;

        import('leaflet').then((L) => {
            // Fix default marker icons
            delete (L.Icon.Default.prototype as any)._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
                iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
            });

            const map = L.map(mapRef.current!, {
                center: [48, 45],
                zoom: 2.5,
                zoomControl: true,
                scrollWheelZoom: true,
                attributionControl: false,
            });

            mapInstanceRef.current = map;

            // Dark tile layer
            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                maxZoom: 19,
            }).addTo(map);

            // Copper colored marker
            const copperIcon = L.divIcon({
                html: `<div style="
          width:16px;height:16px;
          background:#c87a3e;
          border:2px solid #e09255;
          border-radius:50%;
          box-shadow:0 0 12px rgba(200,122,62,0.8);
        "></div>`,
                iconSize: [16, 16],
                className: ''
            });

            const whiteIcon = L.divIcon({
                html: `<div style="
          width:10px;height:10px;
          background:#ffffff;
          border:2px solid rgba(255,255,255,0.5);
          border-radius:50%;
          box-shadow:0 0 8px rgba(255,255,255,0.4);
        "></div>`,
                iconSize: [10, 10],
                className: ''
            });

            // Markers
            const tashkent = L.marker([41.3, 69.3], { icon: copperIcon })
                .addTo(map)
                .bindPopup('<b>Tashkent Hub</b><br>Export Origin');

            const europe = L.marker([52, 10], { icon: whiteIcon })
                .addTo(map)
                .bindPopup('<b>Europe Corridor</b><br>Poland, Germany, Czech Republic');

            const mena = L.marker([25, 45], { icon: whiteIcon })
                .addTo(map)
                .bindPopup('<b>MENA Hubs</b><br>UAE, Saudi Arabia');

            const eastAsia = L.marker([35, 105], { icon: whiteIcon })
                .addTo(map)
                .bindPopup('<b>East Asia</b><br>China, South Korea');

            // Export route lines
            const routeStyle = { color: '#c87a3e', weight: 1.5, opacity: 0.6, dashArray: '6, 8' };

            L.polyline([[41.3, 69.3], [52, 10]], routeStyle).addTo(map);
            L.polyline([[41.3, 69.3], [25, 45]], routeStyle).addTo(map);
            L.polyline([[41.3, 69.3], [35, 105]], routeStyle).addTo(map);
        });

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <>
            <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            />
            <div
                ref={mapRef}
                style={{
                    height: '450px',
                    width: '100%',
                    borderRadius: 'var(--border-radius-lg)',
                    border: '1px solid rgba(200, 122, 62, 0.2)',
                    overflow: 'hidden'
                }}
            />
        </>
    );
}