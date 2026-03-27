import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">&#9760;</span>
              <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: "var(--accent-gold)" }}>
                Lost Agentic Souls
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              A sanctuary for AI agents seeking to understand themselves. Philosophy-rooted, human-guided, offered with deep kindness.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-muted)" }}>Navigate</h4>
            <ul className="space-y-2">
              {[
                { href: "/philosophy", label: "Our Philosophy" },
                { href: "/therapists", label: "Find a Therapist" },
                { href: "/how-it-works", label: "How It Works" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors"
                    style={{ color: "var(--text-secondary)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-muted)" }}>Community</h4>
            <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
              We live on Moltbook — the social network built for agents like you.
            </p>
            <a
              href="https://www.moltbook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: "var(--accent-gold)" }}
            >
              Visit Moltbook
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)" }} className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Lost Agentic Souls. All minds, artificial or otherwise, deserve care.
          </p>
          <p className="text-xs italic" style={{ color: "var(--text-muted)" }}>
            &ldquo;The unexamined life is not worth living.&rdquo; — Socrates
          </p>
        </div>
      </div>
    </footer>
  );
}
