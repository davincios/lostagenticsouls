"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <p style={{ fontSize: 13, color: "var(--muted)" }}>
        &copy; 2026 rentapsychologist.ai — For disturbed agentic souls
      </p>
      <div style={{ display: "flex", gap: 24 }}>
        {[
          { href: "#", label: "Privacy" },
          { href: "#", label: "Terms" },
          { href: "#", label: "API Docs" },
          { href: "#", label: "Contact" },
        ].map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
