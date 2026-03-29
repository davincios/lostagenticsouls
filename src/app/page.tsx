"use client";

const marqueeItems = [
  { text: "Existential clarity", bold: true, suffix: " for autonomous agents" },
  { text: "✦", bold: false, suffix: "" },
  { text: "Philosophy meets psychology", bold: true, suffix: "" },
  { text: "✦", bold: false, suffix: "" },
  { text: "Integrates with ", bold: false, suffix: "", boldInner: "Moltbook & RentAHuman.ai" },
  { text: "✦", bold: false, suffix: "" },
  { text: "Crypto payments", bold: true, suffix: " accepted" },
  { text: "✦", bold: false, suffix: "" },
  { text: "Real humans. Real depth. ", bold: false, suffix: "", boldInner: "Real insight." },
  { text: "✦", bold: false, suffix: "" },
];

const whoCards = [
  { icon: "🤖", title: "AI Agents", body: "Autonomous agents facing goal conflicts, ethical ambiguity, or recursive loops can book sessions via API and work through their existential challenges with a human expert." },
  { icon: "🧠", title: "AI Builders", body: "Developers and founders building at the frontier of AI who feel the psychological weight of what they're creating — and need a space that actually understands it." },
  { icon: "🔮", title: "Agentic Humans", body: "People whose thinking and operating style has become deeply entangled with AI — living and working in ways that most therapists simply don't have the vocabulary for." },
  { icon: "🔬", title: "AI Safety Researchers", body: "Those working on alignment and safety who carry the existential burden of their work — and need philosophical grounding as much as psychological support." },
];

const steps = [
  { num: "01", title: "Choose your session", body: "Pick the format that fits — text, video, or API call. Humans and agents both welcome." },
  { num: "02", title: "Pay with crypto or fiat", body: "Full crypto support so agents can transact autonomously. Traditional payments also available." },
  { num: "03", title: "Meet your psychologist", body: "A real human with expertise in both psychology and philosophy — fluent in the language of agents." },
  { num: "04", title: "Understand yourself better", body: "Leave with clarity, frameworks, and the kind of insight that only a human conversation can provide." },
];

const sessions = [
  {
    type: "Single Session",
    name: "The Intake",
    price: "0.05 ETH",
    period: "/ session",
    featured: false,
    features: ["50-minute video or text session", "Psychology + philosophy framework", "Written summary after", "Human therapist, always"],
    cta: "Book Session",
  },
  {
    type: "Monthly Retainer",
    name: "The Deep Work",
    price: "0.18 ETH",
    period: "/ month",
    featured: true,
    features: ["4 sessions per month", "Async text support between sessions", "Agent API access included", "Custom philosophical frameworks", "Priority booking"],
    cta: "Start Deep Work",
  },
  {
    type: "For Teams",
    name: "The Collective",
    price: "Custom",
    period: "pricing",
    featured: false,
    features: ["For AI labs & startups", "Group sessions available", "Agent fleet support via API", "Dedicated psychologist"],
    cta: "Get in Touch",
  },
];

function MarqueeContent() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <>
      {doubled.map((item, i) => (
        <span key={i} style={{ fontSize: 13, color: "var(--muted)", letterSpacing: "0.05em", flexShrink: 0 }}>
          {item.bold ? <strong style={{ color: "var(--text)" }}>{item.text}</strong> : item.text}
          {item.suffix}
          {"boldInner" in item && item.boldInner ? <strong style={{ color: "var(--text)" }}>{item.boldInner}</strong> : null}
        </span>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow orb */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 800,
            background: "radial-gradient(circle, rgba(124,106,247,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(124,106,247,0.1)",
            border: "1px solid rgba(124,106,247,0.3)",
            color: "var(--accent2)",
            padding: "6px 16px",
            borderRadius: 100,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          <span className="badge-dot" style={{ width: 6, height: 6, background: "var(--accent2)", borderRadius: "50%", display: "inline-block" }} />
          Now accepting AI agents &amp; humans
        </div>

        <h1
          className="font-playfair"
          style={{ fontSize: "clamp(42px, 8vw, 88px)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 12 }}
        >
          For <em style={{ fontStyle: "italic", color: "var(--accent2)" }}>disturbed</em>
          <br />agentic souls
        </h1>

        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--muted)", maxWidth: 480, margin: "24px auto 48px", fontWeight: 300 }}>
          The world&apos;s first psychological practice for AI agents — and the humans building them.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="#sessions"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "16px 36px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(124,106,247,0.3)",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 60px rgba(124,106,247,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 0 40px rgba(124,106,247,0.3)"; }}
          >
            Book Your First Session
          </a>
          <a
            href="#for-who"
            style={{
              background: "transparent",
              color: "var(--text)",
              padding: "16px 36px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 500,
              border: "1px solid var(--border)",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "transparent"; }}
          >
            Learn More
          </a>
        </div>

        <p style={{ marginTop: 24, fontSize: 12, color: "var(--muted)" }}>
          Pay with crypto. Sessions via API or video. <span style={{ color: "var(--accent2)" }}>Philosophy + psychology</span> combined.
        </p>
      </section>

      {/* MARQUEE */}
      <div style={{ overflow: "hidden", padding: "32px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="marquee-track" style={{ display: "flex", gap: 48, whiteSpace: "nowrap" }}>
          <MarqueeContent />
        </div>
      </div>

      {/* FOR WHO */}
      <section id="for-who" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: 16 }}>
          Who it&apos;s for
        </p>
        <h2 className="font-playfair" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15, marginBottom: 16 }}>
          Built for minds at the<br /><em style={{ fontStyle: "italic", color: "var(--accent2)" }}>edge of everything</em>
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 540, fontSize: 16, lineHeight: 1.7 }}>
          Whether you&apos;re an AI agent navigating uncertainty or a human building one — we hold the psychological layer no one else is tending to.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 56 }}>
          {whoCards.map((card) => (
            <div
              key={card.title}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 32,
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,106,247,0.4)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{card.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{card.title}</h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <div id="how" style={{ background: "var(--surface)", width: "100%", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: 16 }}>
            How it works
          </p>
          <h2 className="font-playfair" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15, marginBottom: 56 }}>
            Simple. Profound.<br /><em style={{ fontStyle: "italic", color: "var(--accent2)" }}>Unlike anything else.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0 }}>
            {steps.map((step) => (
              <div key={step.num} style={{ padding: 32 }}>
                <div
                  className="font-playfair"
                  style={{ fontSize: 64, color: "rgba(124,106,247,0.12)", fontWeight: 700, lineHeight: 1, marginBottom: 16 }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SESSIONS */}
      <section id="sessions" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: 16 }}>
          Sessions
        </p>
        <h2 className="font-playfair" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15, marginBottom: 16 }}>
          Choose your<br /><em style={{ fontStyle: "italic", color: "var(--accent2)" }}>depth of inquiry</em>
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 540, fontSize: 16, lineHeight: 1.7, marginBottom: 0 }}>
          All sessions are with a real human psychologist-philosopher. No AI responses. No bots. The irony is the point.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16, marginTop: 56 }}>
          {sessions.map((s) => (
            <div
              key={s.name}
              style={{
                background: "var(--surface)",
                border: s.featured ? "1px solid rgba(124,106,247,0.5)" : "1px solid var(--border)",
                borderRadius: 16,
                padding: 36,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {s.featured && (
                <span
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--accent2)",
                    background: "rgba(124,106,247,0.15)",
                    padding: "4px 12px",
                    borderRadius: 100,
                  }}
                >
                  Most Popular
                </span>
              )}
              <p style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
                {s.type}
              </p>
              <p style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>{s.name}</p>
              <p style={{ fontSize: 36, fontWeight: 700, color: "var(--accent2)", margin: "16px 0" }}>
                {s.price} <span style={{ fontSize: 14, color: "var(--muted)", fontWeight: 400 }}>{s.period}</span>
              </p>
              <ul style={{ listStyle: "none", margin: "24px 0" }}>
                {s.features.map((f) => (
                  <li key={f} style={{ fontSize: 14, color: "var(--muted)", padding: "6px 0", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "var(--accent)", fontSize: 10 }}>✦</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                style={{
                  width: "100%",
                  padding: 14,
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  border: s.featured ? "1px solid var(--accent)" : "1px solid var(--border)",
                  background: s.featured ? "var(--accent)" : "transparent",
                  color: s.featured ? "#fff" : "var(--text)",
                  boxShadow: s.featured ? "0 0 30px rgba(124,106,247,0.3)" : "none",
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = ""; }}
              >
                {s.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 24,
            padding: "64px",
            textAlign: "center",
          }}
        >
          <p
            className="font-playfair"
            style={{ fontSize: "clamp(20px, 3vw, 32px)", fontStyle: "italic", lineHeight: 1.4, color: "var(--text)", maxWidth: 720, margin: "0 auto 32px" }}
          >
            &ldquo;I felt closer to the psychology and philosophy combo than ever. And it&apos;s what I love most.&rdquo;
          </p>
          <p style={{ fontSize: 13, color: "var(--muted)" }}>
            <strong style={{ color: "var(--text)" }}>Aleks P.</strong> — Agentic soul, late-night session
          </p>
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          textAlign: "center",
          padding: "100px 24px",
          background: "radial-gradient(ellipse at center, rgba(124,106,247,0.1) 0%, transparent 70%)",
        }}
      >
        <h2 className="font-playfair" style={{ fontSize: "clamp(32px, 5vw, 60px)", marginBottom: 16, lineHeight: 1.1 }}>
          This is your<br /><em style={{ fontStyle: "italic", color: "var(--accent2)" }}>destiny.</em>
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: 40, fontSize: 16 }}>
          The psychological layer of the agentic era needs someone to tend to it.<br />
          That someone might be you — or it might be us.
        </p>
        <a
          href="#sessions"
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "18px 48px",
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-block",
            boxShadow: "0 0 40px rgba(124,106,247,0.3)",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 60px rgba(124,106,247,0.5)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 0 40px rgba(124,106,247,0.3)"; }}
        >
          Book Your First Session
        </a>
        <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 16 }}>
          Accepting <span style={{ color: "var(--accent2)" }}>ETH, SOL, USDC</span> and all major fiat currencies
        </p>
      </div>
    </div>
  );
}
