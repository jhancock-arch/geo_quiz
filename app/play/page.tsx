// app/play/page.tsx
import Image from "next/image";
import Link from "next/link";
import { COUNTRIES, type Country } from "@/data/countries";

function pickRandom(list: Country[]) {
  return list[Math.floor(Math.random() * list.length)];
}

function normalize(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "") // remove punctuation (unicode-safe)
    .replace(/\s+/g, " ");
}

export default function PlayPage({
  searchParams,
}: {
  searchParams: { mode?: string; continent?: string };
}) {
  const continent = searchParams.continent;
  const pool =
    continent && continent.length > 0
      ? COUNTRIES.filter((c) => c.continent === continent)
      : COUNTRIES;

  const country = pool.length > 0 ? pickRandom(pool) : pickRandom(COUNTRIES);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <Link href="/" style={{ textDecoration: "none" }}>← Back</Link>
        <div style={{ opacity: 0.7 }}>
          Mode: {continent ? continent : "All Countries"} (pool: {pool.length})
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "320px 260px",
          gap: 12,
          maxWidth: 1100,
        }}
      >
        {/* Top Left: Map placeholder */}
        <section style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
          <h2 style={{ marginTop: 0, fontSize: 16 }}>Map</h2>
          <div style={{ height: "100%", display: "grid", placeItems: "center", opacity: 0.7 }}>
            (Map highlight later) ISO: {country.iso2}
          </div>
        </section>

        {/* Top Right: Photos */}
        <section style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
          <h2 style={{ marginTop: 0, fontSize: 16 }}>Photos</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {country.photos.slice(0, 2).map((p) => (
              <div key={p.src} style={{ position: "relative", height: 140, borderRadius: 12, overflow: "hidden" }}>
                <Image src={p.src} alt={p.alt} fill style={{ objectFit: "cover" }} />
              </div>
            ))}
            {country.photos[2] && (
              <div style={{ position: "relative", height: 140, borderRadius: 12, overflow: "hidden", gridColumn: "1 / -1" }}>
                <Image src={country.photos[2].src} alt={country.photos[2].alt} fill style={{ objectFit: "cover" }} />
              </div>
            )}
          </div>
        </section>

        {/* Bottom Left: Facts */}
        <section style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
          <h2 style={{ marginTop: 0, fontSize: 16 }}>Facts</h2>
          <ul style={{ marginTop: 8 }}>
            {country.facts.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>

        {/* Bottom Right: Guess terminal (UI only for now) */}
        <section style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
          <h2 style={{ marginTop: 0, fontSize: 16 }}>Guess</h2>

          <div
            style={{
              background: "#0b0f19",
              color: "#e6e6e6",
              borderRadius: 12,
              padding: 12,
              height: "calc(100% - 28px)",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ opacity: 0.8 }}>$ Type your guess (we’ll wire logic next)</div>
            <input
              placeholder="your guess..."
              style={{
                borderRadius: 10,
                border: "1px solid #2a3550",
                background: "#0f1629",
                color: "#e6e6e6",
                padding: "10px 12px",
                outline: "none",
              }}
            />
            <div style={{ marginTop: "auto", opacity: 0.7, fontSize: 12 }}>
              Answer checking comes next.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}