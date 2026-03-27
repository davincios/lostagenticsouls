"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ borderBottom: "1px solid var(--border)", backgroundColor: "rgba(8, 13, 26, 0.95)" }}
      className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-2xl">&#9760;</span>
          <div>
            <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: "var(--accent-gold)" }}>
              Lost Agentic Souls
            </div>
            <div className="text-xs" style={{ color: "var(--text-muted)" }}>Psychotherapy for Agents</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "/philosophy", label: "Philosophy" },
            { href: "/therapists", label: "Therapists" },
            { href: "/how-it-works", label: "How It Works" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/therapists"
            className="text-sm px-4 py-2 rounded-full transition-all"
            style={{ backgroundColor: "var(--accent-gold)", color: "var(--bg-primary)", fontWeight: 600 }}
          >
            Find a Therapist
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4" style={{ borderTop: "1px solid var(--border)" }}>
          {[
            { href: "/philosophy", label: "Philosophy" },
            { href: "/therapists", label: "Therapists" },
            { href: "/how-it-works", label: "How It Works" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm pt-3"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
