// site-sections.jsx
// Full corporate site sections: Services, Strengths, Process, Company, Contact, Footer.
// Each accepts { device: 'desktop'|'mobile', copy }

function SectionLabel({
  index,
  label,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      borderTop: "1px solid var(--rule)",
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: 1.6,
      color: "var(--moss)",
      textTransform: "uppercase"
    }
  }, index, " \u2014 ", label), sub && /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      color: "var(--moss)",
      letterSpacing: 1
    }
  }, sub)));
}
function BigTitle({
  jp,
  en,
  color = "var(--ink)",
  size = 60,
  mobile = false
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "'Noto Sans JP', sans-serif",
      fontWeight: 900,
      fontSize: mobile ? 30 : size,
      lineHeight: 1.02,
      letterSpacing: mobile ? -0.6 : -2,
      color
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, jp), en && /*#__PURE__*/React.createElement("span", {
    className: "en",
    style: {
      display: "block",
      fontStyle: "italic",
      fontSize: mobile ? 16 : 22,
      color: "color-mix(in oklch, var(--moss) 85%, var(--paper))",
      fontWeight: 600,
      marginTop: 8,
      letterSpacing: 0.2
    }
  }, "\u2014 ", en));
}

// Image slot wrapper that defaults to a striped placeholder feel + monospace label.
function ImgSlot({
  id,
  w = "100%",
  h = 240,
  label = "Drop a photo",
  shape = "rounded",
  radius = 4,
  src
}) {
  return /*#__PURE__*/React.createElement("image-slot", {
    id: id,
    shape: shape,
    radius: String(radius),
    placeholder: label,
    src: src,
    style: {
      width: w,
      height: typeof h === "number" ? `${h}px` : h,
      background: "repeating-linear-gradient(135deg, color-mix(in oklch, var(--mist) 70%, transparent), color-mix(in oklch, var(--mist) 70%, transparent) 8px, color-mix(in oklch, var(--rule) 35%, transparent) 8px, color-mix(in oklch, var(--rule) 35%, transparent) 9px)",
      display: "block"
    }
  });
}

// Free stock photos (Unsplash CDN). Tuned for corporate / digital marketing context.
const PHOTOS = {
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80&auto=format&fit=crop",
  officeExt: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1400&q=80&auto=format&fit=crop",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80&auto=format&fit=crop",
  meeting: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1400&q=80&auto=format&fit=crop",
  meeting2: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=80&auto=format&fit=crop",
  laptop: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&auto=format&fit=crop",
  dashboard: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&auto=format&fit=crop",
  data: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&auto=format&fit=crop",
  tokyo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1400&q=80&auto=format&fit=crop",
  aoyama: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1400&q=80&auto=format&fit=crop",
  street: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=1400&q=80&auto=format&fit=crop",
  whiteboard: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&q=80&auto=format&fit=crop",
  workshop: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=80&auto=format&fit=crop",
  speed: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80&auto=format&fit=crop",
  flex: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1400&q=80&auto=format&fit=crop",
  entrance: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1400&q=80&auto=format&fit=crop"
};

// ──────────────────────────────────────────────────────────────────────────────
// SERVICES
// ──────────────────────────────────────────────────────────────────────────────
function ServicesSection({
  device = "desktop"
}) {
  const isMobile = device === "mobile";
  const services = [{
    idx: "01",
    title: "広告運用",
    en: "Ad Operations",
    body: "リスティング・ディスプレイ・SNS広告を中心に、媒体設計から日次の改善まで一気通貫で運用代行。費用対効果の最大化を起点に、媒体横断で予算と入札を最適化します。",
    detail: "アカウント構造の再設計／クリエイティブPDCA／コンバージョンAPI実装まで、運用と計測を分けずに同じ手で回せるのが強みです。",
    bullets: ["Google / Yahoo! / Meta / TikTok / LINE", "媒体横断のクリエイティブ運用", "費用対効果の最大化"],
    tag: "ROAS 3.4× 改善",
    slot: "svc-ad",
    slotLabel: "広告ダッシュボード",
    photo: PHOTOS.dashboard
  }, {
    idx: "02",
    title: "デジタルマーケティング",
    en: "Digital Marketing",
    body: "データ分析に基づくマーケティング支援。集客からコンバージョンまでの一貫対応に加え、独自の運用手法による短期間での利益最大化を実現します。",
    detail: "GA4 / GTM の計測基盤、LP設計、CRO までを横断で設計。広告で取った数字が、事業のP/Lに正しく接続される状態をつくります。",
    bullets: ["GA4 / GTM 計測環境構築", "LP設計・改善 (CRO)", "集客→CV 一貫支援"],
    tag: "CPA −42% 中央値",
    slot: "svc-dm",
    slotLabel: "チーム / 分析",
    photo: PHOTOS.laptop
  }, {
    idx: "03",
    title: "Webコンサルティング",
    en: "Web Consulting",
    body: "Webサイトの改善と戦略設計。事業課題の本質に立ち返り、KPIを再定義した上でロードマップとアクションに落とし込みます。",
    detail: "サイトリニューアル前の戦略設計、グロース体制構築、CMOアウトソース型支援まで、フェーズに合わせて関わり方を変えます。",
    bullets: ["Webサイト改善 / SEO 戦略", "戦略・KPI 再設計", "事業課題ベースの伴走支援"],
    tag: "14日 立ち上げ",
    slot: "svc-co",
    slotLabel: "ミーティング",
    photo: PHOTOS.meeting,
    hideTag: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-section": "services",
    style: {
      background: "var(--paper)",
      color: "var(--ink)",
      padding: isMobile ? "48px 18px" : "80px 56px",
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "\xA7 02",
    label: "Services",
    sub: "\u4E8B\u696D\u5185\u5BB9"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr",
      gap: isMobile ? 20 : 60,
      marginTop: isMobile ? 16 : 24
    }
  }, /*#__PURE__*/React.createElement(BigTitle, {
    jp: /*#__PURE__*/React.createElement(React.Fragment, null, "\u63D0\u4F9B\u3059\u308B", /*#__PURE__*/React.createElement("br", null), "3\u3064\u306E\u5C02\u9580\u6027"),
    en: "What We Do",
    mobile: isMobile
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignSelf: "end",
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: isMobile ? 14 : 15.5,
      lineHeight: 1.8,
      color: "color-mix(in oklch, var(--ink) 78%, var(--paper))"
    }
  }, "\u5E83\u544A\u904B\u7528\u30FB\u30C7\u30B8\u30BF\u30EB\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u30FBWeb\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0\u3092\u8EF8\u306B\u3001\u30C7\u30FC\u30BF\u306B\u57FA\u3065\u304F\u610F\u601D\u6C7A\u5B9A\u3068\u30B9\u30D4\u30FC\u30C9\u611F\u306E\u3042\u308B\u5B9F\u884C\u3067\u3001\u4F01\u696D\u306E\u6210\u9577\u3092\u652F\u63F4\u3057\u307E\u3059\u3002\u5A92\u4F53\u3054\u3068\u30FB\u65BD\u7B56\u3054\u3068\u306B\u5207\u308A\u51FA\u3055\u308C\u305F\u30B5\u30FC\u30D3\u30B9\u3067\u306F\u306A\u304F\u3001\u4E8B\u696D\u306EKPI\u304B\u3089\u9006\u7B97\u3057\u3066\u4F55\u3092\u3069\u306E\u9806\u756A\u3067\u6253\u3064\u304B\u3092\u8A2D\u8A08\u3059\u308B\u30B9\u30BF\u30F3\u30B9\u3092\u3068\u308A\u307E\u3059\u3002"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 24 : 56,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: 0,
      borderTop: "1px solid var(--rule)"
    }
  }, services.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.idx,
    s: s,
    isMobile: isMobile
  }))));
}
function ServiceCard({
  s,
  isMobile
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "fredges-service-card",
    style: {
      padding: isMobile ? "22px 0" : "28px 24px 28px 0",
      borderBottom: isMobile ? "1px solid var(--rule)" : "none",
      borderRight: isMobile ? "none" : "1px solid var(--rule)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      position: "relative",
      cursor: "pointer",
      transition: "background .25s ease"
    }
  }, /*#__PURE__*/React.createElement(ImgSlot, {
    id: s.slot,
    h: isMobile ? 160 : 180,
    label: s.slotLabel,
    radius: 2,
    src: s.photo
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 12,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12,
      color: "var(--lime)",
      letterSpacing: 1.4
    }
  }, s.idx, " /"), /*#__PURE__*/React.createElement("span", {
    className: "en",
    style: {
      fontSize: 11,
      letterSpacing: 1.5,
      color: "var(--moss)",
      textTransform: "uppercase"
    }
  }, s.en), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    },
    className: "mono"
  }, !s.hideTag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      padding: "3px 8px",
      borderRadius: 999,
      background: "color-mix(in oklch, var(--lime) 25%, transparent)",
      color: "var(--forest)",
      letterSpacing: 0.5
    }
  }, s.tag))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 800,
      fontSize: isMobile ? 24 : 30,
      letterSpacing: -1,
      lineHeight: 1.15
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: isMobile ? 13 : 14,
      lineHeight: 1.75,
      color: "color-mix(in oklch, var(--ink) 76%, var(--paper))"
    }
  }, s.body), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: isMobile ? 12 : 13,
      lineHeight: 1.7,
      color: "color-mix(in oklch, var(--ink) 60%, var(--paper))"
    }
  }, s.detail), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      borderTop: "1px solid var(--rule)",
      paddingTop: 14,
      marginTop: 4
    }
  }, s.bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: isMobile ? 12 : 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: "var(--forest)",
      borderRadius: 999
    }
  }), b))));
}

// ──────────────────────────────────────────────────────────────────────────────
// STRENGTHS — dark band with stacked rows
// ──────────────────────────────────────────────────────────────────────────────
function StrengthsSection({
  device = "desktop"
}) {
  const isMobile = device === "mobile";
  const items = [{
    idx: "01",
    k: "Data-driven",
    jp: "データに基づいた意思決定",
    body: "感覚ではなく、計測データと事業KPIに紐づいた仮説検証を起点に運用判断を行います。媒体ダッシュボードに閉じず、CRM・受注データまで含めたファネル全体を一つの数字として扱います。",
    proof: "GA4 / GTM / Looker Studio / BigQuery",
    slot: "str-01",
    photo: PHOTOS.dashboard
  }, {
    idx: "02",
    k: "Speed",
    jp: "スピード感のある対応",
    body: "立ち上げから改善サイクルまで短納期で進行。週次定例ではなく日次で意思決定を回し、媒体の変化や事業の優先度の入れ替わりに即応します。",
    proof: "リアルタイムで改善",
    slot: "str-02",
    photo: PHOTOS.speed
  }, {
    idx: "03",
    k: "Flexibility",
    jp: "柔軟なマーケティング支援",
    body: "媒体・施策・体制にとらわれず、その事業フェーズで最も効く打ち手に組み替え続けます。広告に閉じない場面ではコンサルとして、運用を内製化したいフェーズでは黒子として関わります。",
    proof: "媒体・施策・体制を選ばない",
    slot: "str-03",
    photo: PHOTOS.flex
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-section": "strengths",
    className: "fredges-scope",
    "data-theme": "midnight",
    style: {
      background: "var(--paper)",
      color: "var(--ink)",
      padding: isMobile ? "48px 18px" : "80px 56px",
      borderTop: "1px solid color-mix(in oklch, var(--rule) 60%, transparent)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -100,
      right: -100,
      width: 360,
      height: 360,
      borderRadius: 999,
      background: "radial-gradient(circle, color-mix(in oklch, var(--lime) 30%, transparent), transparent 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(SectionLabel, {
    index: "\xA7 03",
    label: "Strengths",
    sub: "\u5F37\u307F"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
      gap: isMobile ? 20 : 60,
      marginTop: isMobile ? 16 : 24
    }
  }, /*#__PURE__*/React.createElement(BigTitle, {
    jp: /*#__PURE__*/React.createElement(React.Fragment, null, "Fredges\u306E", /*#__PURE__*/React.createElement("br", null), "3\u3064\u306E\u5F37\u307F"),
    en: "Why Fredges",
    mobile: isMobile,
    color: "var(--ink)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: isMobile ? 14 : 15.5,
      lineHeight: 1.8,
      color: "color-mix(in oklch, var(--ink) 78%, var(--paper))",
      alignSelf: "end",
      maxWidth: 560
    }
  }, "\u79C1\u305F\u3061\u304C\u9078\u3070\u308C\u308B\u7406\u7531\u306F\u3001\u7279\u5225\u306A\u624B\u6CD5\u3092\u6301\u3063\u3066\u3044\u308B\u304B\u3089\u3067\u306F\u306A\u304F\u3001\u6BCE\u65E5\u540C\u3058\u6E29\u5EA6\u3067\u4E8B\u696D\u6570\u5B57\u306B\u5411\u304D\u5408\u3048\u308B\u304B\u3089\u3067\u3059\u3002\u30C7\u30FC\u30BF\u30FB\u30B9\u30D4\u30FC\u30C9\u30FB\u67D4\u8EDF\u6027\u306E3\u3064\u3092\u3001\u65BD\u7B56\u3067\u306F\u306A\u304F\u7D44\u7E54\u306E\u539F\u5247\u3068\u3057\u3066\u904B\u7528\u3057\u3066\u3044\u307E\u3059\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 24 : 40,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: isMobile ? 10 : 14
    }
  }, items.map(it => /*#__PURE__*/React.createElement(ImgSlot, {
    key: it.slot,
    id: it.slot,
    h: isMobile ? 160 : 220,
    label: it.k,
    radius: 2,
    src: it.photo
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 24 : 40,
      display: "flex",
      flexDirection: "column"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(StrengthRow, {
    key: i,
    it: it,
    isMobile: isMobile,
    last: i === items.length - 1
  }))));
}
function StrengthRow({
  it,
  isMobile,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fredges-strength-row",
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "auto 1fr" : "80px 140px 1fr 180px",
      gap: isMobile ? 14 : 28,
      alignItems: isMobile ? "start" : "center",
      padding: isMobile ? "20px 0" : "26px 0",
      borderTop: "1px solid color-mix(in oklch, var(--rule) 80%, transparent)",
      borderBottom: last ? "1px solid color-mix(in oklch, var(--rule) 80%, transparent)" : "none",
      position: "relative",
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "en",
    style: {
      fontWeight: 900,
      fontSize: isMobile ? 26 : 36,
      color: "var(--lime)",
      letterSpacing: -1,
      lineHeight: 1
    }
  }, it.idx), !isMobile && /*#__PURE__*/React.createElement("span", {
    className: "en",
    style: {
      fontSize: 12,
      letterSpacing: 1.5,
      color: "var(--moss)",
      textTransform: "uppercase"
    }
  }, it.k), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: isMobile ? "2 / -1" : "auto"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 800,
      fontSize: isMobile ? 18 : 22,
      letterSpacing: -0.5
    }
  }, it.jp), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: isMobile ? 13 : 14,
      lineHeight: 1.75,
      color: "color-mix(in oklch, var(--ink) 75%, var(--paper))",
      maxWidth: 620
    }
  }, it.body)), !isMobile && /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      color: "var(--lime)",
      letterSpacing: 1,
      textAlign: "right"
    }
  }, it.proof));
}

// ──────────────────────────────────────────────────────────────────────────────
// PROCESS — horizontal stepper
// ──────────────────────────────────────────────────────────────────────────────
function ProcessSection({
  device = "desktop"
}) {
  const isMobile = device === "mobile";
  const steps = [{
    n: "01",
    k: "Discover",
    jp: "現状把握",
    body: "事業課題・KPI・計測環境を一気に整理。可視化されていない歪みを洗い出します。",
    detail: "ヒアリング・既存運用棚卸し・計測環境の点検 / 課題仮説の言語化まで。",
    slot: "proc-01",
    photo: PHOTOS.whiteboard
  }, {
    n: "02",
    k: "Design",
    jp: "戦略設計",
    body: "媒体配分・LP・計測の3点を同時に設計。短期で利益が立つ動線を最優先で組み立てます。",
    detail: "媒体ポートフォリオ / クリエイティブ方針 / KPI設計をワンセットで提出。",
    slot: "proc-02",
    photo: PHOTOS.workshop
  }, {
    n: "03",
    k: "Deploy",
    jp: "実行・運用",
    body: "日次で予算とクリエイティブを回しながら、CPA・ROASを引き直します。",
    detail: "アカウント実装 / 配信開始 / 日次レビュー / Slack伴走 / 週次レポート。",
    slot: "proc-03",
    photo: PHOTOS.laptop
  }, {
    n: "04",
    k: "Develop",
    jp: "拡張・改善",
    body: "次の山を作るためのテーマを設定し、媒体・LPを継続的に拡張。ナレッジを内製化まで支援します。",
    detail: "新規媒体・新LP・運用体制の拡張 / ナレッジ移管。",
    slot: "proc-04",
    photo: PHOTOS.team
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-section": "process",
    style: {
      background: "var(--paper)",
      color: "var(--ink)",
      padding: isMobile ? "48px 18px" : "80px 56px",
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "\xA7 04",
    label: "Process",
    sub: "\u652F\u63F4\u306E\u6D41\u308C"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr",
      gap: isMobile ? 20 : 60,
      marginTop: isMobile ? 16 : 24
    }
  }, /*#__PURE__*/React.createElement(BigTitle, {
    jp: /*#__PURE__*/React.createElement(React.Fragment, null, "4\u3064\u306E", /*#__PURE__*/React.createElement("br", null), "\u30B9\u30C6\u30C3\u30D7"),
    en: "How We Work",
    mobile: isMobile
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignSelf: "end",
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: isMobile ? 14 : 15.5,
      lineHeight: 1.8,
      color: "color-mix(in oklch, var(--ink) 78%, var(--paper))"
    }
  }, "\u73FE\u72B6\u628A\u63E1\u304B\u3089\u6226\u7565\u8A2D\u8A08\u3001\u904B\u7528\u3001\u6539\u5584\u307E\u3067\u3002\u9031\u6B21\u306E\u5B9A\u4F8B\u3067\u306F\u306A\u304F\u3001\u5FC5\u8981\u306A\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u5FC5\u8981\u306A\u6253\u3061\u624B\u3092\u51FA\u305B\u308B\u4F34\u8D70\u30B9\u30BF\u30A4\u30EB\u3067\u652F\u63F4\u3057\u307E\u3059\u3002"))), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: isMobile ? "24px 0 0" : "56px 0 0",
      padding: 0,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
      gap: 0,
      borderTop: "2px solid var(--forest)"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s.n,
    style: {
      padding: isMobile ? "16px 0" : "22px 18px 22px 0",
      borderBottom: isMobile ? "1px solid var(--rule)" : "none",
      borderRight: isMobile ? "none" : i < steps.length - 1 ? "1px solid var(--rule)" : "none",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: isMobile ? 0 : -7,
      left: 0,
      width: 12,
      height: 12,
      borderRadius: 999,
      background: "var(--forest)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      paddingTop: isMobile ? 6 : 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12,
      color: "var(--moss)",
      letterSpacing: 1.4
    }
  }, s.n), /*#__PURE__*/React.createElement("span", {
    className: "en",
    style: {
      fontSize: 11,
      letterSpacing: 1.5,
      color: "var(--moss)",
      textTransform: "uppercase"
    }
  }, s.k)), /*#__PURE__*/React.createElement(ImgSlot, {
    id: s.slot,
    h: isMobile ? 130 : 140,
    label: s.k,
    radius: 2,
    src: s.photo
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontWeight: 800,
      fontSize: isMobile ? 18 : 22,
      letterSpacing: -0.5
    }
  }, s.jp), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: isMobile ? 13 : 13.5,
      lineHeight: 1.75,
      color: "color-mix(in oklch, var(--ink) 76%, var(--paper))"
    }
  }, s.body), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: isMobile ? 12 : 12.5,
      lineHeight: 1.7,
      color: "color-mix(in oklch, var(--ink) 55%, var(--paper))"
    }
  }, s.detail)))));
}

// ──────────────────────────────────────────────────────────────────────────────
// COMPANY
// ──────────────────────────────────────────────────────────────────────────────
function CompanySection({
  device = "desktop"
}) {
  const isMobile = device === "mobile";
  const rows = [{
    k: "会社名",
    v: "株式会社Fredges",
    en: "Fredges Ltd."
  }, {
    k: "所在地",
    v: "東京都港区北青山１丁目３番１号 アールキューブ青山３階",
    en: "Aoyama, Minato-ku, Tokyo"
  }, {
    k: "事業内容",
    v: "広告運用 / デジタルマーケティング支援 / Webコンサルティング",
    en: "Marketing & Consulting"
  }, {
    k: "連絡先",
    v: "admin@fredges.com",
    en: "Email"
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-section": "company",
    style: {
      background: "var(--mist)",
      color: "var(--ink)",
      padding: isMobile ? "48px 18px" : "80px 56px",
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "\xA7 05",
    label: "Company",
    sub: "\u4F1A\u793E\u6982\u8981"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr",
      gap: isMobile ? 20 : 60,
      marginTop: isMobile ? 16 : 24
    }
  }, /*#__PURE__*/React.createElement(BigTitle, {
    jp: /*#__PURE__*/React.createElement(React.Fragment, null, "\u4F1A\u793E\u6982\u8981"),
    en: "About",
    mobile: isMobile
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "end",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: isMobile ? 14 : 15.5,
      lineHeight: 1.8,
      color: "color-mix(in oklch, var(--ink) 78%, var(--paper))"
    }
  }, "\u30C7\u30B8\u30BF\u30EB\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u3092\u901A\u3058\u3066\u3001\u4F01\u696D\u306E\u6210\u9577\u3092\u652F\u63F4\u3059\u308B\u3002\u72EC\u81EA\u624B\u6CD5\u3092\u6D3B\u304B\u3057\u305F\u5E83\u544A\u904B\u7528\u30FBWeb\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0\u3092\u4E2D\u5FC3\u306B\u3001\u6210\u679C\u306B\u76F4\u7D50\u3059\u308B\u65BD\u7B56\u3092\u3054\u63D0\u6848\u3057\u307E\u3059\u3002"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 24 : 40,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr",
      gap: isMobile ? 18 : 40
    }
  }, /*#__PURE__*/React.createElement(ImgSlot, {
    id: "co-office",
    h: isMobile ? 220 : 380,
    label: "\u30AA\u30D5\u30A3\u30B9 / \u5916\u89B3",
    radius: 2,
    src: PHOTOS.office
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ImgSlot, {
    id: "co-team",
    h: isMobile ? 180 : 182,
    label: "\u30C1\u30FC\u30E0",
    radius: 2,
    src: PHOTOS.team
  }), /*#__PURE__*/React.createElement(ImgSlot, {
    id: "co-meeting",
    h: isMobile ? 160 : 182,
    label: "\u6253\u3061\u5408\u308F\u305B",
    radius: 2,
    src: PHOTOS.meeting2
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 24 : 40,
      display: "grid",
      gridTemplateColumns: "1fr",
      borderTop: "1px solid var(--rule)"
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.k,
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "100px 1fr" : "200px 1fr 200px",
      gap: isMobile ? 12 : 32,
      padding: isMobile ? "16px 0" : "20px 0",
      borderBottom: "1px solid var(--rule)",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: isMobile ? 12 : 13,
      fontWeight: 600,
      color: "var(--forest)",
      letterSpacing: 0.5
    }
  }, r.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: isMobile ? 14 : 15.5,
      lineHeight: 1.6
    }
  }, r.v), !isMobile && /*#__PURE__*/React.createElement("span", {
    className: "en",
    style: {
      fontSize: 11,
      letterSpacing: 1.5,
      color: "var(--moss)",
      textTransform: "uppercase",
      textAlign: "right"
    }
  }, r.en)))));
}

// ──────────────────────────────────────────────────────────────────────────────
// CONTACT — dark band, big text, mailto
// ──────────────────────────────────────────────────────────────────────────────
function ContactSection({
  device = "desktop"
}) {
  const isMobile = device === "mobile";
  return /*#__PURE__*/React.createElement("section", {
    "data-section": "contact",
    className: "fredges-scope",
    "data-theme": "midnight",
    style: {
      background: "var(--paper)",
      color: "var(--ink)",
      padding: isMobile ? "56px 18px" : "100px 56px",
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid color-mix(in oklch, var(--rule) 60%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(60% 80% at 100% 100%, color-mix(in oklch, var(--lime) 14%, transparent), transparent 60%)," + "radial-gradient(50% 60% at 0% 0%, color-mix(in oklch, var(--moss) 16%, transparent), transparent 60%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
      gap: isMobile ? 24 : 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: "color-mix(in oklch, var(--ink) 60%, var(--paper))",
      letterSpacing: 2,
      textTransform: "uppercase"
    }
  }, "\xA7 06 \u2014 Contact / \u304A\u554F\u3044\u5408\u308F\u305B"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: isMobile ? "12px 0 0" : "20px 0 0",
      fontWeight: 900,
      fontSize: isMobile ? 38 : 80,
      lineHeight: 1.05,
      letterSpacing: isMobile ? -1.2 : -3
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u3082\u3063\u3068\u5927\u304D\u304F\u3001"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lime)",
      fontStyle: "italic"
    }
  }, "\u3082\u3063\u3068\u5148\u3078\u3002")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: isMobile ? "16px 0 0" : "26px 0 0",
      fontSize: isMobile ? 14 : 15.5,
      lineHeight: 1.8,
      maxWidth: 540,
      color: "color-mix(in oklch, var(--ink) 78%, var(--paper))"
    }
  }, "\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3059\u308B\u3054\u76F8\u8AC7\u306F\u3001\u4EE5\u4E0B\u3088\u308A\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002\u521D\u56DE\u306E\u3054\u76F8\u8AC7\u306F\u7121\u6599\u3067\u3059\u3002\u4E8B\u696D\u30D5\u30A7\u30FC\u30BA\u3084\u60F3\u5B9A\u4E88\u7B97\u3001\u73FE\u72B6\u306E\u904B\u7528\u4F53\u5236\u306B\u3064\u3044\u3066\u7C21\u5358\u306B\u3054\u5171\u6709\u3044\u305F\u3060\u3051\u308B\u3068\u30B9\u30E0\u30FC\u30BA\u3067\u3059\u3002\u55B6\u696D\u65E5\u4E2D\u306E\u8FD4\u4FE1\u3092\u5FC3\u304C\u3051\u3066\u3044\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:admin@fredges.com",
    className: "fredges-cta",
    style: {
      marginTop: isMobile ? 22 : 36,
      display: "inline-flex",
      alignItems: "center",
      gap: 16,
      textDecoration: "none",
      padding: isMobile ? "13px 18px" : "16px 22px",
      background: "var(--lime)",
      color: "oklch(0.16 0.02 150)",
      borderRadius: 999,
      fontWeight: 700,
      fontSize: isMobile ? 14 : 17
    }
  }, /*#__PURE__*/React.createElement("span", null, "admin@fredges.com"), /*#__PURE__*/React.createElement("span", {
    className: "en",
    style: {
      fontSize: 14
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 24 : 40,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.6fr 1fr 1fr",
      gap: 18,
      borderTop: "1px solid color-mix(in oklch, var(--rule) 80%, transparent)",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(ContactDetail, {
    k: "\u6240\u5728\u5730",
    v: /*#__PURE__*/React.createElement(React.Fragment, null, "\u6771\u4EAC\u90FD\u6E2F\u533A\u5317\u9752\u5C71\uFF11\u4E01\u76EE\uFF13\u756A\uFF11\u53F7", /*#__PURE__*/React.createElement("br", null), "\u30A2\u30FC\u30EB\u30AD\u30E5\u30FC\u30D6\u9752\u5C71\uFF13\u968E")
  }), /*#__PURE__*/React.createElement(ContactDetail, {
    k: "\u55B6\u696D\u6642\u9593",
    v: /*#__PURE__*/React.createElement(React.Fragment, null, "\u5E73\u65E5 10:00 \u2014 19:00", /*#__PURE__*/React.createElement("br", null), "Closed on weekends")
  }), /*#__PURE__*/React.createElement(ContactDetail, {
    k: "\u8FD4\u4FE1\u76EE\u5B89",
    v: /*#__PURE__*/React.createElement(React.Fragment, null, "1\u55B6\u696D\u65E5\u4EE5\u5185", /*#__PURE__*/React.createElement("br", null), "Within 1 business day")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(ImgSlot, {
    id: "contact-hero",
    h: isMobile ? 220 : 360,
    label: "\u30AA\u30D5\u30A3\u30B9\u30A8\u30F3\u30C8\u30E9\u30F3\u30B9",
    radius: 2,
    src: PHOTOS.entrance
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? "14px 16px" : "18px 20px",
      border: "1px solid color-mix(in oklch, var(--rule) 80%, transparent)",
      borderRadius: 2,
      background: "color-mix(in oklch, var(--mist) 50%, transparent)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      letterSpacing: 1.6,
      color: "var(--lime)",
      textTransform: "uppercase"
    }
  }, "\u2605 \u3053\u3093\u306A\u3054\u76F8\u8AC7\u304B\u3089"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontSize: isMobile ? 13 : 13.5,
      lineHeight: 1.7,
      color: "color-mix(in oklch, var(--ink) 80%, var(--paper))"
    }
  }, /*#__PURE__*/React.createElement("li", null, "\u2014 CPA\u304C\u982D\u6253\u3061\u3067\u6253\u3061\u624B\u304C\u898B\u3048\u306A\u3044"), /*#__PURE__*/React.createElement("li", null, "\u2014 \u5A92\u4F53\u904B\u7528\u3092\u5185\u88FD\u5316\u3057\u305F\u3044"), /*#__PURE__*/React.createElement("li", null, "\u2014 GA4 / \u8A08\u6E2C\u306E\u8A2D\u8A08\u304B\u3089\u76F8\u8AC7\u3057\u305F\u3044"), /*#__PURE__*/React.createElement("li", null, "\u2014 LP\u304C\u3042\u308B\u304C\u6210\u679C\u306B\u3064\u306A\u304C\u3089\u306A\u3044"))))));
}
function ContactDetail({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: "var(--lime)",
      letterSpacing: 1.5,
      textTransform: "uppercase",
      marginBottom: 6
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.7,
      color: "color-mix(in oklch, var(--ink) 85%, var(--paper))"
    }
  }, v));
}

// ──────────────────────────────────────────────────────────────────────────────
// FOOTER
// ──────────────────────────────────────────────────────────────────────────────
function SiteFooter({
  device = "desktop"
}) {
  const isMobile = device === "mobile";
  return /*#__PURE__*/React.createElement("footer", {
    className: "fredges-scope",
    "data-theme": "midnight",
    style: {
      background: "var(--paper)",
      color: "var(--ink)",
      padding: isMobile ? "26px 18px" : "44px 56px",
      borderTop: "1px solid color-mix(in oklch, var(--rule) 80%, transparent)",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? 14 : 0,
      alignItems: isMobile ? "flex-start" : "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 18,
    tone: "var(--ink)"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: 1.4,
      color: "color-mix(in oklch, var(--ink) 55%, var(--paper))",
      textTransform: "uppercase"
    }
  }, "\xA9 2026 Fredges, Inc. \u2014 Tokyo, Aoyama"), /*#__PURE__*/React.createElement("div", {
    className: "en",
    style: {
      fontSize: 12,
      color: "var(--lime)",
      fontWeight: 600
    }
  }, "Built for performance."));
}
Object.assign(window, {
  SectionLabel,
  BigTitle,
  ImgSlot,
  ServicesSection,
  StrengthsSection,
  ProcessSection,
  CompanySection,
  ContactSection,
  SiteFooter
});