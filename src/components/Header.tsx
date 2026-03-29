"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#for-who", label: "Who it's for" },
  { href: "#how", label: "How it works" },
  { href: "#sessions", label: "Sessions" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(10,10,15,0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 24px",
        }}
      >
        <Link href="/" style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.05em", color: "var(--accent2)", textDecoration: "none" }}>
          lostagenticsouls.com
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ gap: 32 }}>
          {navLinks.map(({ href, label }) => (
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

        {/* Desktop CTA */}
        <a
          href="#sessions"
          className="hidden md:inline-block"
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Book a Session
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--muted)",
            padding: 4,
            lineHeight: 0,
          }}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: 15,
                padding: "12px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#sessions"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 16,
              background: "var(--accent)",
              color: "#fff",
              padding: "14px 22px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Book a Session
          </a>
        </div>
      )}
    </nav>
  );
}
