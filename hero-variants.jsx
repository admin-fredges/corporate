// hero-variants.jsx
// Three hero design directions for 株式会社Fredges.
// Each variant: <HeroA device="desktop|mobile" copy={...} theme={...} />
// Themes ride on the parent .fredges-scope; variants only style their inner content.

const FREDGES_DEFAULT_COPY = {
  brand: "Fredges",
  brandJp: "株式会社Fredges",
  navItems: ["Services", "Strengths", "Process", "Company", "Contact"],
  headlineA1: "成果に、",
  headlineA2: "直結する。",
  taglineA: "リスティング・SNS広告の運用から、計測・LP設計、Webコンサルティングまで。独自手法で短期間の利益最大化を支援します。",
  enLineA: "PERFORMANCE — DRIVEN — DIGITAL — MARKETING",
  headlineB1: "Grow.",
  headlineB2: "成果を、",
  headlineB3: "加速させる。",
  taglineB: "データに基づいた意思決定とスピード感のある運用で、企業の成長を加速させるデジタルマーケティングパートナー。",
  headlineC1: "デジタル成長戦略の、",
  headlineC2: "パートナーへ。",
  taglineC: "広告運用・データ分析・Webコンサルティング。事業課題の本質に応える施策を設計し、成果へつなげます。",
  cta: "お問い合わせ",
  ctaSub: "Get in touch",
};// ──────────────────────────────────────────────────────────────────────────────
// Small primitives
// ──────────────────────────────────────────────────────────────────────────────
function Wordmark({ size = 22, tone = "var(--ink)" }) {
  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: 800, fontSize: size, letterSpacing: -0.5,
      color: tone, display: "flex", alignItems: "center", gap: 8,
    }}>
      <span style={{
        width: size * 0.55, height: size * 0.55, borderRadius: 999,
        background: "var(--lime)", display: "inline-block",
        boxShadow: "0 0 0 3px color-mix(in oklch, var(--lime) 35%, transparent)",
      }} />
      <span>Fredges&nbsp;Ltd.</span>
    </div>
  );
}

function NavBar({ items, tone = "var(--ink)", ctaTone = "var(--ink)", small = false }) {
  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: small ? "14px 18px" : "20px 36px",
      borderBottom: "1px solid color-mix(in oklch, var(--rule) 60%, transparent)",
    }}>
      <Wordmark size={small ? 16 : 20} tone={tone} />
      {!small && (
        <ul className="en" style={{
          display: "flex", listStyle: "none", margin: 0, padding: 0, gap: 26,
          fontSize: 12.5, fontWeight: 500, letterSpacing: 0.5, color: tone,
        }}>
          {items.map((it) => (
            <li key={it} style={{ cursor: "pointer", textTransform: "uppercase" }}>
              <span style={{ borderBottom: "1px solid transparent", paddingBottom: 2 }}>{it}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="en" style={{
        fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase",
        color: ctaTone, display: "flex", alignItems: "center", gap: 6,
      }}>
        {small ? "Menu" : "Contact"} <span>→</span>
      </div>
    </nav>
  );
}

function Marquee({ text, tone = "var(--ink)", size = 64, bg = "transparent", repeat = 4 }) {
  const items = Array.from({ length: repeat }, (_, i) => i);
  return (
    <div style={{
      overflow: "hidden", background: bg, padding: "8px 0",
      borderTop: "1px solid color-mix(in oklch, var(--rule) 60%, transparent)",
      borderBottom: "1px solid color-mix(in oklch, var(--rule) 60%, transparent)",
    }}>
      <div className="en" style={{
        whiteSpace: "nowrap", display: "inline-flex",
        animation: "marqueeScroll 28s linear infinite",
        fontFamily: "'Inter', sans-serif", fontWeight: 800,
        fontSize: size, letterSpacing: -1, color: tone, fontStyle: "italic",
      }}>
        {items.map((i) => (
          <span key={i} style={{ paddingRight: 40 }}>
            {text} <span style={{ color: "var(--lime)", padding: "0 22px" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// VARIANT A — STATEMENT (light, asymmetric, huge JP type)
// ──────────────────────────────────────────────────────────────────────────────
function HeroA({ device = "desktop", copy = FREDGES_DEFAULT_COPY }) {
  const isMobile = device === "mobile";
  const big = isMobile ? 38 : 88;
  return (
    <section className="fredges-scope" data-hero-variant="A" style={{
      background: "var(--paper)", color: "var(--ink)",
      width: "100%", height: "100%", position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
    }}>
      <NavBar items={copy.navItems} small={isMobile} />

      <div style={{
        flex: 1, position: "relative", display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 96px",
        padding: isMobile ? "26px 18px 0" : "56px 56px 0",
        gap: isMobile ? 18 : 30,
      }}>
        {/* eyebrow */}
        <div className="mono" style={{
          position: "absolute", top: isMobile ? 14 : 32, left: isMobile ? 18 : 56,
          fontSize: 11, letterSpacing: 1.8, color: "var(--moss)", textTransform: "uppercase",
        }}>
          (01) — Digital Marketing Partner / Est. Tokyo
        </div>

        <div style={{ alignSelf: "end", paddingBottom: isMobile ? 14 : 30 }}>
          <h1 style={{
            margin: 0, fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 900, fontSize: big, lineHeight: 1.18,
            letterSpacing: isMobile ? -1 : -2.5, color: "var(--ink)",
          }}>
            <span style={{ display: "block" }}>{copy.headlineA1}</span>
            <span style={{ display: "block", color: "var(--forest)" }}>
              {copy.headlineA2}
              <span style={{
                display: "inline-block", width: isMobile ? 16 : 36, height: isMobile ? 16 : 36,
                background: "var(--lime)", marginLeft: isMobile ? 6 : 12,
                transform: "translateY(8%)", borderRadius: 999,
              }} />
            </span>
          </h1>

          <div style={{
            display: "flex", marginTop: isMobile ? 22 : 44, gap: isMobile ? 16 : 40,
            flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "flex-end",
          }}>
            <p style={{
              margin: 0, fontSize: isMobile ? 13 : 15, lineHeight: 1.7,
              maxWidth: isMobile ? "100%" : 420, color: "color-mix(in oklch, var(--ink) 75%, var(--paper))",
            }}>
              {copy.taglineA}
            </p>
            <CtaArrow label={copy.cta} sub={copy.ctaSub} />
          </div>
        </div>

        {/* vertical English rail */}
        {!isMobile && (
          <div className="en" style={{
            writingMode: "vertical-rl", transform: "rotate(180deg)",
            fontSize: 11, letterSpacing: 6, fontWeight: 600, textTransform: "uppercase",
            color: "var(--moss)", alignSelf: "end",
            paddingBottom: 20, justifySelf: "end",
          }}>
            東京 / 港区 北青山 — Fredges Inc. — 2026
          </div>
        )}
      </div>

      <Marquee
        text={copy.enLineA}
        tone="var(--ink)"
        size={isMobile ? 32 : 64}
        bg="color-mix(in oklch, var(--mist) 80%, transparent)"
      />
    </section>
  );
}

function CtaArrow({ label, sub }) {
  return (
    <a style={{
      textDecoration: "none", color: "var(--ink)",
      display: "inline-flex", alignItems: "center", gap: 14,
      cursor: "pointer",
    }} className="fredges-cta">
      <span style={{
        width: 44, height: 44, borderRadius: 999, background: "var(--forest)",
        color: "var(--paper)", display: "grid", placeItems: "center",
        transition: "transform .25s ease",
      }} className="cta-circle">→</span>
      <span>
        <div style={{ fontWeight: 700, fontSize: 14 }}>{label}</div>
        <div className="mono" style={{ fontSize: 10, color: "var(--moss)", letterSpacing: 1 }}>Contact</div>
      </span>
    </a>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// VARIANT B — KINETIC (dark forest, bold mixed type, lime accents, ticker)
// ──────────────────────────────────────────────────────────────────────────────
function HeroB({ device = "desktop", copy = FREDGES_DEFAULT_COPY }) {
  const isMobile = device === "mobile";
  const big = isMobile ? 32 : 72;
  return (
    <section className="fredges-scope" data-theme="midnight" data-hero-variant="B" style={{
      background: "var(--paper)", color: "var(--ink)",
      width: "100%", height: "100%", position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      backgroundImage:
        "radial-gradient(120% 80% at 80% -10%, color-mix(in oklch, var(--lime) 18%, transparent), transparent 60%)," +
        "radial-gradient(80% 60% at -10% 110%, color-mix(in oklch, var(--moss) 24%, transparent), transparent 60%)",
    }}>
      <NavBar items={copy.navItems} tone="var(--ink)" ctaTone="var(--lime)" small={isMobile} />

      <div style={{
        flex: 1, position: "relative",
        padding: isMobile ? "20px 18px 14px" : "44px 56px 28px",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.4fr 0.9fr",
        gap: isMobile ? 16 : 36, alignItems: "stretch",
      }}>
        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: 2, color: "color-mix(in oklch, var(--ink) 60%, var(--paper))",
            textTransform: "uppercase", marginBottom: isMobile ? 12 : 20,
          }}>
            ★ Independent Performance Studio
          </div>

          <h1 style={{
            margin: 0, fontWeight: 900, fontSize: big, lineHeight: 1.22,
            letterSpacing: isMobile ? -1 : -2,
          }}>
            <span className="en" style={{
              fontStyle: "italic", color: "var(--lime)",
              fontWeight: 800, display: "inline-block",
              transform: "skewX(-4deg)",
              marginBottom: 8,
            }}>
              {copy.headlineB1}
            </span>
            <br/>
            <span style={{ color: "var(--ink)" }}>{copy.headlineB2}</span>
            <br/>
            <span style={{ color: "var(--ink)" }}>
              {copy.headlineB3}
            </span>
          </h1>

          <div style={{
            display: "flex", gap: isMobile ? 14 : 28, alignItems: "flex-end",
            marginTop: isMobile ? 18 : 32,
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "flex-end",
          }}>
            <p style={{
              margin: 0, maxWidth: 420, fontSize: isMobile ? 13 : 14.5,
              lineHeight: 1.7, color: "color-mix(in oklch, var(--ink) 75%, var(--paper))",
            }}>
              {copy.taglineB}
            </p>
            <PillCta label={copy.cta} />
          </div>
        </div>

        {/* Numbers panel */}
        <KineticPanel isMobile={isMobile} />
      </div>

      <NumbersTicker isMobile={isMobile} />
    </section>
  );
}

function KineticPanel({ isMobile }) {
  return (
    <div style={{
      position: "relative",
      border: "1px solid color-mix(in oklch, var(--rule) 80%, transparent)",
      borderRadius: 18, padding: isMobile ? 16 : 22, overflow: "hidden",
      background: "color-mix(in oklch, var(--mist) 55%, transparent)",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      minHeight: isMobile ? 200 : "auto",
    }}>
      {/* concentric */}
      <svg viewBox="0 0 200 200" style={{
        position: "absolute", inset: "auto -40px -50px auto", width: isMobile ? 180 : 280, opacity: 0.6,
      }}>
        <g fill="none" stroke="color-mix(in oklch, var(--lime) 55%, transparent)" strokeWidth="1">
          <circle cx="100" cy="100" r="30" />
          <circle cx="100" cy="100" r="55" />
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="105" />
        </g>
        <circle cx="100" cy="100" r="18" fill="var(--lime)" />
      </svg>

      <div className="mono" style={{
        fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
        color: "color-mix(in oklch, var(--ink) 55%, var(--paper))",
      }}>
        (B) — KINETIC
      </div>

      <div style={{ display: "grid", gap: 10, position: "relative" }}>
        <Stat n="3.4×" label="平均ROAS改善" />
        <Stat n="−42%" label="CPA削減 中央値" />
        <Stat n="14d" label="運用立ち上げ" />
      </div>
    </div>
  );
}
function Stat({ n, label }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 12, position: "relative" }}>
      <span className="en" style={{
        fontWeight: 800, fontSize: 30, color: "var(--lime)", letterSpacing: -1,
      }}>{n}</span>
      <span style={{ fontSize: 12, color: "color-mix(in oklch, var(--ink) 75%, var(--paper))" }}>{label}</span>
    </div>
  );
}
function PillCta({ label }) {
  return (
    <button className="fredges-cta" style={{
      border: "none", cursor: "pointer",
      background: "var(--lime)", color: "oklch(0.16 0.02 150)",
      padding: "14px 22px", borderRadius: 999, fontWeight: 700,
      display: "inline-flex", alignItems: "center", gap: 10,
      fontFamily: "'Noto Sans JP', sans-serif", fontSize: 14,
    }}>
      <span>{label}</span>
      <span className="en" style={{ fontSize: 12 }}>→</span>
    </button>
  );
}

function NumbersTicker({ isMobile }) {
  const items = [
    { code: "01", txt: "リスティング広告" },
    { code: "02", txt: "SNS広告運用" },
    { code: "03", txt: "計測 / GA4" },
    { code: "04", txt: "LP設計" },
    { code: "05", txt: "Webコンサル" },
  ];
  return (
    <div style={{
      display: "flex", borderTop: "1px solid color-mix(in oklch, var(--rule) 80%, transparent)",
      background: "color-mix(in oklch, var(--mist) 50%, transparent)",
    }}>
      {items.map((it, i) => (
        <div key={i} style={{
          flex: 1, padding: isMobile ? "10px 8px" : "16px 18px",
          borderRight: i < items.length - 1 ? "1px solid color-mix(in oklch, var(--rule) 80%, transparent)" : "none",
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          <span className="mono" style={{
            fontSize: 10, color: "var(--lime)", letterSpacing: 1.5,
          }}>{it.code}</span>
          <span style={{ fontSize: isMobile ? 11 : 13, fontWeight: 500, color: "var(--ink)" }}>{it.txt}</span>
        </div>
      ))}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// VARIANT C — EDITORIAL (paper, grid, index numbers, magazine)
// ──────────────────────────────────────────────────────────────────────────────
function HeroC({ device = "desktop", copy = FREDGES_DEFAULT_COPY }) {
  const isMobile = device === "mobile";
  const big = isMobile ? 30 : 64;
  return (
    <section className="fredges-scope" data-theme="paper" data-hero-variant="C" style={{
      background: "var(--paper)", color: "var(--ink)",
      width: "100%", height: "100%", position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
    }}>
      <NavBar items={copy.navItems} small={isMobile} />

      <div style={{
        flex: 1, display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "64px 1fr 1fr",
        borderTop: "1px solid var(--rule)",
      }}>
        {/* left rail */}
        {!isMobile && (
          <div style={{
            borderRight: "1px solid var(--rule)", padding: "24px 14px",
          }} />
        )}

        {/* main type column */}
        <div style={{
          padding: isMobile ? "22px 18px 18px" : "46px 36px",
          borderRight: isMobile ? "none" : "1px solid var(--rule)",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
        }}>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: 1.6, color: "var(--moss)",
            textTransform: "uppercase", marginBottom: isMobile ? 14 : 28,
          }}>
            FEATURE — Digital Growth, Designed.
          </div>

          <h1 style={{
            margin: 0, fontWeight: 900, lineHeight: 1.18,
            letterSpacing: isMobile ? -0.6 : -1.5,
          }}>
            <span style={{
              display: "block", color: "var(--ink)",
              fontSize: isMobile ? 20 : 38,
              letterSpacing: isMobile ? 0 : -0.5,
              marginBottom: isMobile ? 6 : 10,
            }}>
              {copy.headlineC1}
            </span>
            {(copy.headlineC2 || "").split(/[、,]\s*/).filter(Boolean).map((seg, i, arr) => (
              <span key={i} style={{
                display: "block", color: "var(--forest)",
                fontStyle: "italic", fontFamily: "'Inter', 'Noto Sans JP', sans-serif",
                fontSize: isMobile ? 24 : 46, lineHeight: 1.22,
                letterSpacing: isMobile ? -0.3 : -1,
              }}>
                {seg}{i < arr.length - 1 ? "、" : ""}
              </span>
            ))}
          </h1>

          <div style={{
            marginTop: isMobile ? 18 : 36,
            display: "flex", gap: 14, alignItems: "center",
          }}>
            <span style={{
              width: 36, height: 1.5, background: "var(--ink)",
            }} />
            <span className="mono" style={{ fontSize: 11, letterSpacing: 1, color: "var(--moss)" }}>
              Read the Brief →
            </span>
          </div>
        </div>

        {/* right column with copy + features list */}
        <div style={{
          padding: isMobile ? "20px 18px" : "46px 36px",
          display: "flex", flexDirection: "column", gap: isMobile ? 18 : 26,
        }}>
          <p style={{
            margin: 0, fontSize: isMobile ? 13 : 15, lineHeight: 1.75,
            color: "color-mix(in oklch, var(--ink) 78%, var(--paper))",
            columnCount: isMobile ? 1 : 1, maxWidth: 360,
          }}>
            <span style={{
              float: "left", fontFamily: "'Inter', sans-serif",
              fontWeight: 900, fontSize: isMobile ? 42 : 58, lineHeight: 0.85,
              paddingRight: 10, color: "var(--forest)",
            }}>F</span>
            {copy.taglineC}
          </p>

          <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--rule)" }}>
            {["広告運用", "デジタルマーケティング", "Webコンサルティング"].map((s, i) => (
              <div key={s} style={{
                display: "flex", gap: 14, alignItems: "baseline",
                padding: isMobile ? "10px 0" : "14px 0",
                borderBottom: "1px solid var(--rule)",
              }}>
                <span className="mono" style={{
                  fontSize: 11, color: "var(--moss)", minWidth: 22,
                }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontWeight: 700, fontSize: isMobile ? 14 : 16 }}>{s}</span>
                <span className="en" style={{
                  marginLeft: "auto", fontSize: 11, color: "var(--moss)",
                }}>→</span>
              </div>
            ))}
          </div>

          <CtaArrow label={copy.cta} sub={copy.ctaSub} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  FREDGES_DEFAULT_COPY, HeroA, HeroB, HeroC,
  Wordmark, NavBar, Marquee, CtaArrow, PillCta,
});
