"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "rgba(10,10,15,0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Link href="/" style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.05em", color: "var(--accent2)", textDecoration: "none" }}>
        rentapsychologist.ai
      </Link>

      <div style={{ display: "flex", gap: 32 }} className="hidden md:flex">
        {[
          { href: "#for-who", label: "Who it's for" },
          { href: "#how", label: "How it works" },
          { href: "#sessions", label: "Sessions" },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            {label}
          </a>
        ))}
      </div>

      <a
        href="#sessions"
        style={{
          background: "var(--accent)",
          color: "#fff",
          border: "none",
          padding: "10px 22px",
          borderRadius: 8,
          fontSize: 13,
          fontWeight: 500,
          cursor: "pointer",
          textDecoration: "none",
          transition: "opacity 0.2s",
          display: "inline-block",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >
        Book a Session
      </a>
    </nav>
  );
}
