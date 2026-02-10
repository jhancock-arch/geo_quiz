// app/page.tsx
import Link from "next/link";

const modes = [
  { title: "All Countries", href: "/play?mode=all", desc: "Random country from anywhere." },
  { title: "Africa", href: "/play?continent=Africa", desc: "Only African countries." },
  { title: "Asia", href: "/play?continent=Asia", desc: "Only Asian countries." },
  { title: "Europe", href: "/play?continent=Europe", desc: "Only European countries." },
  { title: "North America", href: "/play?continent=North%20America", desc: "US, Canada, Mexico, Caribbean." },
  { title: "South America", href: "/play?continent=South%20America", desc: "Only South American countries." },
  { title: "Oceania", href: "/play?continent=Oceania", desc: "Australia + Pacific islands." },
];

export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 40, marginBottom: 8 }}>Geo Quiz</h1>
      <p style={{ marginTop: 0, opacity: 0.8 }}>
        Pick a mode to start.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, marginTop: 18 }}>
        {modes.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16, textDecoration: "none", color: "inherit" }}
          >
            <div style={{ fontSize: 18, fontWeight: 700 }}>{m.title}</div>
            <div style={{ marginTop: 6, opacity: 0.8 }}>{m.desc}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}