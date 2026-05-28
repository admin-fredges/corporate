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
  ctaSub: "Get in touch"
}; // ──────────────────────────────────────────────────────────────────────────────
// Small primitives
// ──────────────────────────────────────────────────────────────────────────────
function Wordmark({
  size = 22,
  tone = "var(--ink)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 800,
      fontSize: size,
      letterSpacing: -0.5,
      color: tone,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * 0.55,
      height: size * 0.55,
      borderRadius: 999,
      background: "var(--lime)",
      display: "inline-block",
      boxShadow: "0 0 0 3px color-mix(in oklch, var(--lime) 35%, transparent)"
    }
  }), /*#__PURE__*/React.createElement("span", null, "Fredges\xA0Ltd."));
}
function NavBar({
  items,
  tone = "var(--ink)",
  ctaTone = "var(--ink)",
  small = false
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: small ? "14px 18px" : "20px 36px",
      borderBottom: "1px solid color-mix(in oklch, var(--rule) 60%, transparent)"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: small ? 16 : 20,
    tone: tone
  }), !small && /*#__PURE__*/React.createElement("ul", {
    className: "en",
    style: {
      display: "flex",
      listStyle: "none",
      margin: 0,
      padding: 0,
      gap: 26,
      fontSize: 12.5,
      fontWeight: 500,
      letterSpacing: 0.5,
      color: tone
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      cursor: "pointer",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: "1px solid transparent",
      paddingBottom: 2
    }
  }, it)))), /*#__PURE__*/React.createElement("div", {
    className: "en",
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: ctaTone,
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, small ? "Menu" : "Contact", " ", /*#__PURE__*/React.createElement("span", null, "\u2192")));
}
function Marquee({
  text,
  tone = "var(--ink)",
  size = 64,
  bg = "transparent",
  repeat = 4
}) {
  const items = Array.from({
    length: repeat
  }, (_, i) => i);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      background: bg,
      padding: "8px 0",
      borderTop: "1px solid color-mix(in oklch, var(--rule) 60%, transparent)",
      borderBottom: "1px solid color-mix(in oklch, var(--rule) 60%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "en",
    style: {
      whiteSpace: "nowrap",
      display: "inline-flex",
      animation: "marqueeScroll 28s linear infinite",
      fontFamily: "'Inter', sans-serif",
      fontWeight: 800,
      fontSize: size,
      letterSpacing: -1,
      color: tone,
      fontStyle: "italic"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      paddingRight: 40
    }
  }, text, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lime)",
      padding: "0 22px"
    }
  }, "\u2726")))));
}

// ──────────────────────────────────────────────────────────────────────────────
// VARIANT A — STATEMENT (light, asymmetric, huge JP type)
// ──────────────────────────────────────────────────────────────────────────────
function HeroA({
  device = "desktop",
  copy = FREDGES_DEFAULT_COPY
}) {
  const isMobile = device === "mobile";
  const big = isMobile ? 38 : 88;
  return /*#__PURE__*/React.createElement("section", {
    className: "fredges-scope",
    "data-hero-variant": "A",
    style: {
      background: "var(--paper)",
      color: "var(--ink)",
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    items: copy.navItems,
    small: isMobile
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 96px",
      padding: isMobile ? "26px 18px 0" : "56px 56px 0",
      gap: isMobile ? 18 : 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      position: "absolute",
      top: isMobile ? 14 : 32,
      left: isMobile ? 18 : 56,
      fontSize: 11,
      letterSpacing: 1.8,
      color: "var(--moss)",
      textTransform: "uppercase"
    }
  }, "(01) \u2014 Digital Marketing Partner / Est. Tokyo"), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "end",
      paddingBottom: isMobile ? 14 : 30
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "'Noto Sans JP', sans-serif",
      fontWeight: 900,
      fontSize: big,
      lineHeight: 1.18,
      letterSpacing: isMobile ? -1 : -2.5,
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, copy.headlineA1), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--forest)"
    }
  }, copy.headlineA2, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: isMobile ? 16 : 36,
      height: isMobile ? 16 : 36,
      background: "var(--lime)",
      marginLeft: isMobile ? 6 : 12,
      transform: "translateY(8%)",
      borderRadius: 999
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      marginTop: isMobile ? 22 : 44,
      gap: isMobile ? 16 : 40,
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "flex-start" : "flex-end"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: isMobile ? 13 : 15,
      lineHeight: 1.7,
      maxWidth: isMobile ? "100%" : 420,
      color: "color-mix(in oklch, var(--ink) 75%, var(--paper))"
    }
  }, copy.taglineA), /*#__PURE__*/React.createElement(CtaArrow, {
    label: copy.cta,
    sub: copy.ctaSub
  }))), !isMobile && /*#__PURE__*/React.createElement("div", {
    className: "en",
    style: {
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      fontSize: 11,
      letterSpacing: 6,
      fontWeight: 600,
      textTransform: "uppercase",
      color: "var(--moss)",
      alignSelf: "end",
      paddingBottom: 20,
      justifySelf: "end"
    }
  }, "\u6771\u4EAC / \u6E2F\u533A \u5317\u9752\u5C71 \u2014 Fredges Inc. \u2014 2026")), /*#__PURE__*/React.createElement(Marquee, {
    text: copy.enLineA,
    tone: "var(--ink)",
    size: isMobile ? 32 : 64,
    bg: "color-mix(in oklch, var(--mist) 80%, transparent)"
  }));
}
function CtaArrow({
  label,
  sub
}) {
  return /*#__PURE__*/React.createElement("a", {
    style: {
      textDecoration: "none",
      color: "var(--ink)",
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      cursor: "pointer"
    },
    className: "fredges-cta"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      background: "var(--forest)",
      color: "var(--paper)",
      display: "grid",
      placeItems: "center",
      transition: "transform .25s ease"
    },
    className: "cta-circle"
  }, "\u2192"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: "var(--moss)",
      letterSpacing: 1
    }
  }, "Contact")));
}

// ──────────────────────────────────────────────────────────────────────────────
// VARIANT B — KINETIC (dark forest, bold mixed type, lime accents, ticker)
// ──────────────────────────────────────────────────────────────────────────────
function HeroB({
  device = "desktop",
  copy = FREDGES_DEFAULT_COPY
}) {
  const isMobile = device === "mobile";
  const big = isMobile ? 32 : 72;
  return /*#__PURE__*/React.createElement("section", {
    className: "fredges-scope",
    "data-theme": "midnight",
    "data-hero-variant": "B",
    style: {
      background: "var(--paper)",
      color: "var(--ink)",
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      backgroundImage: "radial-gradient(120% 80% at 80% -10%, color-mix(in oklch, var(--lime) 18%, transparent), transparent 60%)," + "radial-gradient(80% 60% at -10% 110%, color-mix(in oklch, var(--moss) 24%, transparent), transparent 60%)"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    items: copy.navItems,
    tone: "var(--ink)",
    ctaTone: "var(--lime)",
    small: isMobile
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative",
      padding: isMobile ? "20px 18px 14px" : "44px 56px 28px",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.4fr 0.9fr",
      gap: isMobile ? 16 : 36,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: 2,
      color: "color-mix(in oklch, var(--ink) 60%, var(--paper))",
      textTransform: "uppercase",
      marginBottom: isMobile ? 12 : 20
    }
  }, "\u2605 Independent Performance Studio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontWeight: 900,
      fontSize: big,
      lineHeight: 1.22,
      letterSpacing: isMobile ? -1 : -2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "en",
    style: {
      fontStyle: "italic",
      color: "var(--lime)",
      fontWeight: 800,
      display: "inline-block",
      transform: "skewX(-4deg)",
      marginBottom: 8
    }
  }, copy.headlineB1), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)"
    }
  }, copy.headlineB2), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)"
    }
  }, copy.headlineB3)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: isMobile ? 14 : 28,
      alignItems: "flex-end",
      marginTop: isMobile ? 18 : 32,
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "flex-start" : "flex-end"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 420,
      fontSize: isMobile ? 13 : 14.5,
      lineHeight: 1.7,
      color: "color-mix(in oklch, var(--ink) 75%, var(--paper))"
    }
  }, copy.taglineB), /*#__PURE__*/React.createElement(PillCta, {
    label: copy.cta
  }))), /*#__PURE__*/React.createElement(KineticPanel, {
    isMobile: isMobile
  })), /*#__PURE__*/React.createElement(NumbersTicker, {
    isMobile: isMobile
  }));
}
function KineticPanel({
  isMobile
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      border: "1px solid color-mix(in oklch, var(--rule) 80%, transparent)",
      borderRadius: 18,
      padding: isMobile ? 16 : 22,
      overflow: "hidden",
      background: "color-mix(in oklch, var(--mist) 55%, transparent)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: isMobile ? 200 : "auto"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 200",
    style: {
      position: "absolute",
      inset: "auto -40px -50px auto",
      width: isMobile ? 180 : 280,
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "color-mix(in oklch, var(--lime) 55%, transparent)",
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "30"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "55"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "80"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "105"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "18",
    fill: "var(--lime)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: "color-mix(in oklch, var(--ink) 55%, var(--paper))"
    }
  }, "(B) \u2014 KINETIC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "3.4\xD7",
    label: "\u5E73\u5747ROAS\u6539\u5584"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "\u221242%",
    label: "CPA\u524A\u6E1B \u4E2D\u592E\u5024"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "14d",
    label: "\u904B\u7528\u7ACB\u3061\u4E0A\u3052"
  })));
}
function Stat({
  n,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 12,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "en",
    style: {
      fontWeight: 800,
      fontSize: 30,
      color: "var(--lime)",
      letterSpacing: -1
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "color-mix(in oklch, var(--ink) 75%, var(--paper))"
    }
  }, label));
}
function PillCta({
  label
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "fredges-cta",
    style: {
      border: "none",
      cursor: "pointer",
      background: "var(--lime)",
      color: "oklch(0.16 0.02 150)",
      padding: "14px 22px",
      borderRadius: 999,
      fontWeight: 700,
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "'Noto Sans JP', sans-serif",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    className: "en",
    style: {
      fontSize: 12
    }
  }, "\u2192"));
}
function NumbersTicker({
  isMobile
}) {
  const items = [{
    code: "01",
    txt: "リスティング広告"
  }, {
    code: "02",
    txt: "SNS広告運用"
  }, {
    code: "03",
    txt: "計測 / GA4"
  }, {
    code: "04",
    txt: "LP設計"
  }, {
    code: "05",
    txt: "Webコンサル"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderTop: "1px solid color-mix(in oklch, var(--rule) 80%, transparent)",
      background: "color-mix(in oklch, var(--mist) 50%, transparent)"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      padding: isMobile ? "10px 8px" : "16px 18px",
      borderRight: i < items.length - 1 ? "1px solid color-mix(in oklch, var(--rule) 80%, transparent)" : "none",
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      color: "var(--lime)",
      letterSpacing: 1.5
    }
  }, it.code), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: isMobile ? 11 : 13,
      fontWeight: 500,
      color: "var(--ink)"
    }
  }, it.txt))));
}

// ──────────────────────────────────────────────────────────────────────────────
// VARIANT C — EDITORIAL (paper, grid, index numbers, magazine)
// ──────────────────────────────────────────────────────────────────────────────
function HeroC({
  device = "desktop",
  copy = FREDGES_DEFAULT_COPY
}) {
  const isMobile = device === "mobile";
  const big = isMobile ? 30 : 64;
  return /*#__PURE__*/React.createElement("section", {
    className: "fredges-scope",
    "data-theme": "paper",
    "data-hero-variant": "C",
    style: {
      background: "var(--paper)",
      color: "var(--ink)",
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    items: copy.navItems,
    small: isMobile
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "64px 1fr 1fr",
      borderTop: "1px solid var(--rule)"
    }
  }, !isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: "1px solid var(--rule)",
      padding: "24px 14px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? "22px 18px 18px" : "46px 36px",
      borderRight: isMobile ? "none" : "1px solid var(--rule)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: 1.6,
      color: "var(--moss)",
      textTransform: "uppercase",
      marginBottom: isMobile ? 14 : 28
    }
  }, "FEATURE \u2014 Digital Growth, Designed."), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontWeight: 900,
      lineHeight: 1.18,
      letterSpacing: isMobile ? -0.6 : -1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--ink)",
      fontSize: isMobile ? 20 : 38,
      letterSpacing: isMobile ? 0 : -0.5,
      marginBottom: isMobile ? 6 : 10
    }
  }, copy.headlineC1), (copy.headlineC2 || "").split(/[、,]\s*/).filter(Boolean).map((seg, i, arr) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "block",
      color: "var(--forest)",
      fontStyle: "italic",
      fontFamily: "'Inter', 'Noto Sans JP', sans-serif",
      fontSize: isMobile ? 24 : 46,
      lineHeight: 1.22,
      letterSpacing: isMobile ? -0.3 : -1
    }
  }, seg, i < arr.length - 1 ? "、" : ""))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 18 : 36,
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 1.5,
      background: "var(--ink)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: 1,
      color: "var(--moss)"
    }
  }, "Read the Brief \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? "20px 18px" : "46px 36px",
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? 18 : 26
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: isMobile ? 13 : 15,
      lineHeight: 1.75,
      color: "color-mix(in oklch, var(--ink) 78%, var(--paper))",
      columnCount: isMobile ? 1 : 1,
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      float: "left",
      fontFamily: "'Inter', sans-serif",
      fontWeight: 900,
      fontSize: isMobile ? 42 : 58,
      lineHeight: 0.85,
      paddingRight: 10,
      color: "var(--forest)"
    }
  }, "F"), copy.taglineC), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      borderTop: "1px solid var(--rule)"
    }
  }, ["広告運用", "デジタルマーケティング", "Webコンサルティング"].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "baseline",
      padding: isMobile ? "10px 0" : "14px 0",
      borderBottom: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      color: "var(--moss)",
      minWidth: 22
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: isMobile ? 14 : 16
    }
  }, s), /*#__PURE__*/React.createElement("span", {
    className: "en",
    style: {
      marginLeft: "auto",
      fontSize: 11,
      color: "var(--moss)"
    }
  }, "\u2192")))), /*#__PURE__*/React.createElement(CtaArrow, {
    label: copy.cta,
    sub: copy.ctaSub
  }))));
}
Object.assign(window, {
  FREDGES_DEFAULT_COPY,
  HeroA,
  HeroB,
  HeroC,
  Wordmark,
  NavBar,
  Marquee,
  CtaArrow,
  PillCta
});