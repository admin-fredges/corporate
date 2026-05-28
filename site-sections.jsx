// site-sections.jsx
// Full corporate site sections: Services, Strengths, Process, Company, Contact, Footer.
// Each accepts { device: 'desktop'|'mobile', copy }

function SectionLabel({ index, label, sub }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 6,
      borderTop: "1px solid var(--rule)", paddingTop: 14,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span className="mono" style={{
          fontSize: 11, letterSpacing: 1.6, color: "var(--moss)", textTransform: "uppercase",
        }}>
          {index} — {label}
        </span>
        {sub && (
          <span className="mono" style={{
            fontSize: 10, color: "var(--moss)", letterSpacing: 1,
          }}>{sub}</span>
        )}
      </div>
    </div>
  );
}

function BigTitle({ jp, en, color = "var(--ink)", size = 60, mobile = false }) {
  return (
    <h2 style={{
      margin: 0, fontFamily: "'Noto Sans JP', sans-serif",
      fontWeight: 900, fontSize: mobile ? 30 : size,
      lineHeight: 1.02, letterSpacing: mobile ? -0.6 : -2, color,
    }}>
      <span style={{ display: "block" }}>{jp}</span>
      {en && (
        <span className="en" style={{
          display: "block", fontStyle: "italic", fontSize: mobile ? 16 : 22,
          color: "color-mix(in oklch, var(--moss) 85%, var(--paper))",
          fontWeight: 600, marginTop: 8, letterSpacing: 0.2,
        }}>
          — {en}
        </span>
      )}
    </h2>
  );
}

// Image slot wrapper that defaults to a striped placeholder feel + monospace label.
function ImgSlot({ id, w = "100%", h = 240, label = "Drop a photo", shape = "rounded", radius = 4, src }) {
  return (
    <image-slot
      id={id}
      shape={shape}
      radius={String(radius)}
      placeholder={label}
      src={src}
      style={{
        width: w, height: typeof h === "number" ? `${h}px` : h,
        background:
          "repeating-linear-gradient(135deg, color-mix(in oklch, var(--mist) 70%, transparent), color-mix(in oklch, var(--mist) 70%, transparent) 8px, color-mix(in oklch, var(--rule) 35%, transparent) 8px, color-mix(in oklch, var(--rule) 35%, transparent) 9px)",
        display: "block",
      }}
    />
  );
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
  entrance: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1400&q=80&auto=format&fit=crop",
};

// ──────────────────────────────────────────────────────────────────────────────
// SERVICES
// ──────────────────────────────────────────────────────────────────────────────
function ServicesSection({ device = "desktop" }) {
  const isMobile = device === "mobile";
  const services = [
    {
      idx: "01",
      title: "広告運用",
      en: "Ad Operations",
      body: "リスティング・ディスプレイ・SNS広告を中心に、媒体設計から日次の改善まで一気通貫で運用代行。費用対効果の最大化を起点に、媒体横断で予算と入札を最適化します。",
      detail: "アカウント構造の再設計／クリエイティブPDCA／コンバージョンAPI実装まで、運用と計測を分けずに同じ手で回せるのが強みです。",
      bullets: ["Google / Yahoo! / Meta / TikTok / LINE", "媒体横断のクリエイティブ運用", "費用対効果の最大化"],
      tag: "ROAS 3.4× 改善",
      slot: "svc-ad",
      slotLabel: "広告ダッシュボード",
      photo: PHOTOS.dashboard,
    },
    {
      idx: "02",
      title: "デジタルマーケティング",
      en: "Digital Marketing",
      body: "データ分析に基づくマーケティング支援。集客からコンバージョンまでの一貫対応に加え、独自の運用手法による短期間での利益最大化を実現します。",
      detail: "GA4 / GTM の計測基盤、LP設計、CRO までを横断で設計。広告で取った数字が、事業のP/Lに正しく接続される状態をつくります。",
      bullets: ["GA4 / GTM 計測環境構築", "LP設計・改善 (CRO)", "集客→CV 一貫支援"],
      tag: "CPA −42% 中央値",
      slot: "svc-dm",
      slotLabel: "チーム / 分析",
      photo: PHOTOS.laptop,
    },
    {
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
      hideTag: true,
    },
  ];
  return (
    <section data-section="services" style={{
      background: "var(--paper)", color: "var(--ink)",
      padding: isMobile ? "48px 18px" : "80px 56px",
      borderTop: "1px solid var(--rule)",
    }}>
      <SectionLabel index="§ 02" label="Services" sub="事業内容" />
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr",
        gap: isMobile ? 20 : 60, marginTop: isMobile ? 16 : 24,
      }}>
        <BigTitle jp={<>提供する<br/>3つの専門性</>} en="What We Do" mobile={isMobile} />
        <div style={{
          display: "flex", flexDirection: "column", gap: 14, alignSelf: "end", maxWidth: 620,
        }}>
          <p style={{
            margin: 0, fontSize: isMobile ? 14 : 15.5, lineHeight: 1.8,
            color: "color-mix(in oklch, var(--ink) 78%, var(--paper))",
          }}>
            広告運用・デジタルマーケティング・Webコンサルティングを軸に、データに基づく意思決定とスピード感のある実行で、企業の成長を支援します。媒体ごと・施策ごとに切り出されたサービスではなく、事業のKPIから逆算して何をどの順番で打つかを設計するスタンスをとります。
          </p>
        </div>
      </div>

      <div style={{
        marginTop: isMobile ? 24 : 56,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: 0,
        borderTop: "1px solid var(--rule)",
      }}>
        {services.map((s) => (
          <ServiceCard key={s.idx} s={s} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ s, isMobile }) {
  return (
    <article className="fredges-service-card" style={{
      padding: isMobile ? "22px 0" : "28px 24px 28px 0",
      borderBottom: isMobile ? "1px solid var(--rule)" : "none",
      borderRight: isMobile ? "none" : "1px solid var(--rule)",
      display: "flex", flexDirection: "column", gap: 14,
      position: "relative", cursor: "pointer",
      transition: "background .25s ease",
    }}>
      <ImgSlot id={s.slot} h={isMobile ? 160 : 180} label={s.slotLabel} radius={2} src={s.photo} />
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 4 }}>
        <span className="mono" style={{
          fontSize: 12, color: "var(--lime)", letterSpacing: 1.4,
        }}>{s.idx} /</span>
        <span className="en" style={{
          fontSize: 11, letterSpacing: 1.5, color: "var(--moss)", textTransform: "uppercase",
        }}>{s.en}</span>
        <span style={{ marginLeft: "auto" }} className="mono" >
          {!s.hideTag && (
            <span style={{
              fontSize: 10, padding: "3px 8px", borderRadius: 999,
              background: "color-mix(in oklch, var(--lime) 25%, transparent)",
              color: "var(--forest)", letterSpacing: 0.5,
            }}>
              {s.tag}
            </span>
          )}
        </span>
      </div>
      <h3 style={{
        margin: 0, fontWeight: 800, fontSize: isMobile ? 24 : 30,
        letterSpacing: -1, lineHeight: 1.15,
      }}>
        {s.title}
      </h3>
      <p style={{
        margin: 0, fontSize: isMobile ? 13 : 14, lineHeight: 1.75,
        color: "color-mix(in oklch, var(--ink) 76%, var(--paper))",
      }}>
        {s.body}
      </p>
      <p style={{
        margin: 0, fontSize: isMobile ? 12 : 13, lineHeight: 1.7,
        color: "color-mix(in oklch, var(--ink) 60%, var(--paper))",
      }}>
        {s.detail}
      </p>
      <ul style={{
        listStyle: "none", margin: 0, padding: 0,
        display: "flex", flexDirection: "column", gap: 6,
        borderTop: "1px solid var(--rule)", paddingTop: 14, marginTop: 4,
      }}>
        {s.bullets.map((b, i) => (
          <li key={i} style={{
            display: "flex", alignItems: "center", gap: 10,
            fontSize: isMobile ? 12 : 13,
          }}>
            <span style={{
              width: 6, height: 6, background: "var(--forest)", borderRadius: 999,
            }} />
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// STRENGTHS — dark band with stacked rows
// ──────────────────────────────────────────────────────────────────────────────
function StrengthsSection({ device = "desktop" }) {
  const isMobile = device === "mobile";
  const items = [
    {
      idx: "01", k: "Data-driven",
      jp: "データに基づいた意思決定",
      body: "感覚ではなく、計測データと事業KPIに紐づいた仮説検証を起点に運用判断を行います。媒体ダッシュボードに閉じず、CRM・受注データまで含めたファネル全体を一つの数字として扱います。",
      proof: "GA4 / GTM / Looker Studio / BigQuery",
      slot: "str-01",
      photo: PHOTOS.dashboard,
    },
    {
      idx: "02", k: "Speed",
      jp: "スピード感のある対応",
      body: "立ち上げから改善サイクルまで短納期で進行。週次定例ではなく日次で意思決定を回し、媒体の変化や事業の優先度の入れ替わりに即応します。",
      proof: "リアルタイムで改善",
      slot: "str-02",
      photo: PHOTOS.speed,
    },
    {
      idx: "03", k: "Flexibility",
      jp: "柔軟なマーケティング支援",
      body: "媒体・施策・体制にとらわれず、その事業フェーズで最も効く打ち手に組み替え続けます。広告に閉じない場面ではコンサルとして、運用を内製化したいフェーズでは黒子として関わります。",
      proof: "媒体・施策・体制を選ばない",
      slot: "str-03",
      photo: PHOTOS.flex,
    },
  ];
  return (
    <section data-section="strengths" className="fredges-scope" data-theme="midnight" style={{
      background: "var(--paper)", color: "var(--ink)",
      padding: isMobile ? "48px 18px" : "80px 56px",
      borderTop: "1px solid color-mix(in oklch, var(--rule) 60%, transparent)",
      position: "relative", overflow: "hidden",
    }}>
      {/* lime glow */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 360, height: 360, borderRadius: 999,
        background: "radial-gradient(circle, color-mix(in oklch, var(--lime) 30%, transparent), transparent 70%)",
        pointerEvents: "none",
      }} />

      <SectionLabel index="§ 03" label="Strengths" sub="強み" />

      <div style={{
        display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
        gap: isMobile ? 20 : 60, marginTop: isMobile ? 16 : 24,
      }}>
        <BigTitle jp={<>Fredgesの<br/>3つの強み</>} en="Why Fredges" mobile={isMobile} color="var(--ink)" />
        <p style={{
          margin: 0, fontSize: isMobile ? 14 : 15.5, lineHeight: 1.8,
          color: "color-mix(in oklch, var(--ink) 78%, var(--paper))",
          alignSelf: "end", maxWidth: 560,
        }}>
          私たちが選ばれる理由は、特別な手法を持っているからではなく、毎日同じ温度で事業数字に向き合えるからです。データ・スピード・柔軟性の3つを、施策ではなく組織の原則として運用しています。
        </p>
      </div>

      {/* image strip */}
      <div style={{
        marginTop: isMobile ? 24 : 40,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: isMobile ? 10 : 14,
      }}>
        {items.map((it) => (
          <ImgSlot key={it.slot} id={it.slot} h={isMobile ? 160 : 220}
            label={it.k} radius={2} src={it.photo} />
        ))}
      </div>

      <div style={{ marginTop: isMobile ? 24 : 40, display: "flex", flexDirection: "column" }}>
        {items.map((it, i) => (
          <StrengthRow key={i} it={it} isMobile={isMobile} last={i === items.length - 1} />
        ))}
      </div>
    </section>
  );
}

function StrengthRow({ it, isMobile, last }) {
  return (
    <div className="fredges-strength-row" style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "auto 1fr" : "80px 140px 1fr 180px",
      gap: isMobile ? 14 : 28,
      alignItems: isMobile ? "start" : "center",
      padding: isMobile ? "20px 0" : "26px 0",
      borderTop: "1px solid color-mix(in oklch, var(--rule) 80%, transparent)",
      borderBottom: last ? "1px solid color-mix(in oklch, var(--rule) 80%, transparent)" : "none",
      position: "relative",
      cursor: "default",
    }}>
      <span className="en" style={{
        fontWeight: 900, fontSize: isMobile ? 26 : 36, color: "var(--lime)",
        letterSpacing: -1, lineHeight: 1,
      }}>
        {it.idx}
      </span>
      {!isMobile && (
        <span className="en" style={{
          fontSize: 12, letterSpacing: 1.5, color: "var(--moss)", textTransform: "uppercase",
        }}>{it.k}</span>
      )}
      <div style={{ gridColumn: isMobile ? "2 / -1" : "auto" }}>
        <h3 style={{
          margin: 0, fontWeight: 800, fontSize: isMobile ? 18 : 22, letterSpacing: -0.5,
        }}>{it.jp}</h3>
        <p style={{
          margin: "8px 0 0", fontSize: isMobile ? 13 : 14, lineHeight: 1.75,
          color: "color-mix(in oklch, var(--ink) 75%, var(--paper))",
          maxWidth: 620,
        }}>{it.body}</p>
      </div>
      {!isMobile && (
        <span className="mono" style={{
          fontSize: 11, color: "var(--lime)", letterSpacing: 1, textAlign: "right",
        }}>{it.proof}</span>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// PROCESS — horizontal stepper
// ──────────────────────────────────────────────────────────────────────────────
function ProcessSection({ device = "desktop" }) {
  const isMobile = device === "mobile";
  const steps = [
    {
      n: "01", k: "Discover", jp: "現状把握",
      body: "事業課題・KPI・計測環境を一気に整理。可視化されていない歪みを洗い出します。",
      detail: "ヒアリング・既存運用棚卸し・計測環境の点検 / 課題仮説の言語化まで。",
      slot: "proc-01",
      photo: PHOTOS.whiteboard,
    },
    {
      n: "02", k: "Design", jp: "戦略設計",
      body: "媒体配分・LP・計測の3点を同時に設計。短期で利益が立つ動線を最優先で組み立てます。",
      detail: "媒体ポートフォリオ / クリエイティブ方針 / KPI設計をワンセットで提出。",
      slot: "proc-02",
      photo: PHOTOS.workshop,
    },
    {
      n: "03", k: "Deploy", jp: "実行・運用",
      body: "日次で予算とクリエイティブを回しながら、CPA・ROASを引き直します。",
      detail: "アカウント実装 / 配信開始 / 日次レビュー / Slack伴走 / 週次レポート。",
      slot: "proc-03",
      photo: PHOTOS.laptop,
    },
    {
      n: "04", k: "Develop", jp: "拡張・改善",
      body: "次の山を作るためのテーマを設定し、媒体・LPを継続的に拡張。ナレッジを内製化まで支援します。",
      detail: "新規媒体・新LP・運用体制の拡張 / ナレッジ移管。",
      slot: "proc-04",
      photo: PHOTOS.team,
    },
  ];
  return (
    <section data-section="process" style={{
      background: "var(--paper)", color: "var(--ink)",
      padding: isMobile ? "48px 18px" : "80px 56px",
      borderTop: "1px solid var(--rule)",
    }}>
      <SectionLabel index="§ 04" label="Process" sub="支援の流れ" />
      <div style={{
        display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr",
        gap: isMobile ? 20 : 60, marginTop: isMobile ? 16 : 24,
      }}>
        <BigTitle jp={<>4つの<br/>ステップ</>} en="How We Work" mobile={isMobile} />
        <div style={{
          display: "flex", flexDirection: "column", gap: 12, alignSelf: "end", maxWidth: 620,
        }}>
          <p style={{
            margin: 0, fontSize: isMobile ? 14 : 15.5, lineHeight: 1.8,
            color: "color-mix(in oklch, var(--ink) 78%, var(--paper))",
          }}>
            現状把握から戦略設計、運用、改善まで。週次の定例ではなく、必要なタイミングで必要な打ち手を出せる伴走スタイルで支援します。
          </p>
        </div>
      </div>

      <ol style={{
        listStyle: "none", margin: isMobile ? "24px 0 0" : "56px 0 0", padding: 0,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
        gap: 0, borderTop: "2px solid var(--forest)",
      }}>
        {steps.map((s, i) => (
          <li key={s.n} style={{
            padding: isMobile ? "16px 0" : "22px 18px 22px 0",
            borderBottom: isMobile ? "1px solid var(--rule)" : "none",
            borderRight: isMobile ? "none" : i < steps.length - 1 ? "1px solid var(--rule)" : "none",
            position: "relative",
            display: "flex", flexDirection: "column", gap: 10,
          }}>
            <div style={{
              position: "absolute", top: isMobile ? 0 : -7, left: 0,
              width: 12, height: 12, borderRadius: 999, background: "var(--forest)",
            }} />
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, paddingTop: isMobile ? 6 : 12 }}>
              <span className="mono" style={{
                fontSize: 12, color: "var(--moss)", letterSpacing: 1.4,
              }}>{s.n}</span>
              <span className="en" style={{
                fontSize: 11, letterSpacing: 1.5, color: "var(--moss)", textTransform: "uppercase",
              }}>{s.k}</span>
            </div>
            <ImgSlot id={s.slot} h={isMobile ? 130 : 140} label={s.k} radius={2} src={s.photo} />
            <h4 style={{
              margin: 0, fontWeight: 800, fontSize: isMobile ? 18 : 22, letterSpacing: -0.5,
            }}>{s.jp}</h4>
            <p style={{
              margin: 0, fontSize: isMobile ? 13 : 13.5, lineHeight: 1.75,
              color: "color-mix(in oklch, var(--ink) 76%, var(--paper))",
            }}>{s.body}</p>
            <p style={{
              margin: 0, fontSize: isMobile ? 12 : 12.5, lineHeight: 1.7,
              color: "color-mix(in oklch, var(--ink) 55%, var(--paper))",
            }}>{s.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// COMPANY
// ──────────────────────────────────────────────────────────────────────────────
function CompanySection({ device = "desktop" }) {
  const isMobile = device === "mobile";
  const rows = [
    { k: "会社名", v: "株式会社Fredges", en: "Fredges Ltd." },
    { k: "所在地", v: "東京都港区北青山１丁目３番１号 アールキューブ青山３階", en: "Aoyama, Minato-ku, Tokyo" },
    { k: "事業内容", v: "広告運用 / デジタルマーケティング支援 / Webコンサルティング", en: "Marketing & Consulting" },
    { k: "連絡先", v: "admin@fredges.com", en: "Email" },
  ];
  return (
    <section data-section="company" style={{
      background: "var(--mist)", color: "var(--ink)",
      padding: isMobile ? "48px 18px" : "80px 56px",
      borderTop: "1px solid var(--rule)",
    }}>
      <SectionLabel index="§ 05" label="Company" sub="会社概要" />
      <div style={{
        display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr",
        gap: isMobile ? 20 : 60, marginTop: isMobile ? 16 : 24,
      }}>
        <BigTitle jp={<>会社概要</>} en="About" mobile={isMobile} />
        <div style={{ alignSelf: "end", display: "flex", flexDirection: "column", gap: 12, maxWidth: 620 }}>
          <p style={{
            margin: 0, fontSize: isMobile ? 14 : 15.5, lineHeight: 1.8,
            color: "color-mix(in oklch, var(--ink) 78%, var(--paper))",
          }}>
            デジタルマーケティングを通じて、企業の成長を支援する。独自手法を活かした広告運用・Webコンサルティングを中心に、成果に直結する施策をご提案します。
          </p>
        </div>
      </div>

      <div style={{
        marginTop: isMobile ? 24 : 40,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr",
        gap: isMobile ? 18 : 40,
      }}>
        <ImgSlot id="co-office" h={isMobile ? 220 : 380} label="オフィス / 外観" radius={2} src={PHOTOS.office} />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <ImgSlot id="co-team" h={isMobile ? 180 : 182} label="チーム" radius={2} src={PHOTOS.team} />
          <ImgSlot id="co-meeting" h={isMobile ? 160 : 182} label="打ち合わせ" radius={2} src={PHOTOS.meeting2} />
        </div>
      </div>

      <div style={{
        marginTop: isMobile ? 24 : 40,
        display: "grid", gridTemplateColumns: "1fr",
        borderTop: "1px solid var(--rule)",
      }}>
        {rows.map((r) => (
          <div key={r.k} style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "100px 1fr" : "200px 1fr 200px",
            gap: isMobile ? 12 : 32,
            padding: isMobile ? "16px 0" : "20px 0",
            borderBottom: "1px solid var(--rule)",
            alignItems: "baseline",
          }}>
            <span style={{
              fontSize: isMobile ? 12 : 13, fontWeight: 600,
              color: "var(--forest)", letterSpacing: 0.5,
            }}>{r.k}</span>
            <span style={{ fontSize: isMobile ? 14 : 15.5, lineHeight: 1.6 }}>{r.v}</span>
            {!isMobile && (
              <span className="en" style={{
                fontSize: 11, letterSpacing: 1.5, color: "var(--moss)",
                textTransform: "uppercase", textAlign: "right",
              }}>{r.en}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// CONTACT — dark band, big text, mailto
// ──────────────────────────────────────────────────────────────────────────────
function ContactSection({ device = "desktop" }) {
  const isMobile = device === "mobile";
  return (
    <section data-section="contact" className="fredges-scope" data-theme="midnight" style={{
      background: "var(--paper)", color: "var(--ink)",
      padding: isMobile ? "56px 18px" : "100px 56px",
      position: "relative", overflow: "hidden",
      borderTop: "1px solid color-mix(in oklch, var(--rule) 60%, transparent)",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background:
          "radial-gradient(60% 80% at 100% 100%, color-mix(in oklch, var(--lime) 14%, transparent), transparent 60%)," +
          "radial-gradient(50% 60% at 0% 0%, color-mix(in oklch, var(--moss) 16%, transparent), transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
        gap: isMobile ? 24 : 56, alignItems: "start",
      }}>
        <div>
          <div className="mono" style={{
            fontSize: 11, color: "color-mix(in oklch, var(--ink) 60%, var(--paper))",
            letterSpacing: 2, textTransform: "uppercase",
          }}>
            § 06 — Contact / お問い合わせ
          </div>

          <h2 style={{
            margin: isMobile ? "12px 0 0" : "20px 0 0",
            fontWeight: 900, fontSize: isMobile ? 38 : 80,
            lineHeight: 1.05, letterSpacing: isMobile ? -1.2 : -3,
          }}>
            <span>もっと大きく、</span><br/>
            <span style={{ color: "var(--lime)", fontStyle: "italic" }}>
              もっと先へ。
            </span>
          </h2>

          <p style={{
            margin: isMobile ? "16px 0 0" : "26px 0 0",
            fontSize: isMobile ? 14 : 15.5, lineHeight: 1.8,
            maxWidth: 540,
            color: "color-mix(in oklch, var(--ink) 78%, var(--paper))",
          }}>
            サービスに関するご相談は、以下よりお問い合わせください。初回のご相談は無料です。事業フェーズや想定予算、現状の運用体制について簡単にご共有いただけるとスムーズです。営業日中の返信を心がけています。
          </p>

          <a href="mailto:admin@fredges.com" className="fredges-cta" style={{
            marginTop: isMobile ? 22 : 36, display: "inline-flex",
            alignItems: "center", gap: 16, textDecoration: "none",
            padding: isMobile ? "13px 18px" : "16px 22px",
            background: "var(--lime)", color: "oklch(0.16 0.02 150)",
            borderRadius: 999, fontWeight: 700, fontSize: isMobile ? 14 : 17,
          }}>
            <span>admin@fredges.com</span>
            <span className="en" style={{ fontSize: 14 }}>→</span>
          </a>

          <div style={{
            marginTop: isMobile ? 24 : 40,
            display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.6fr 1fr 1fr",
            gap: 18, borderTop: "1px solid color-mix(in oklch, var(--rule) 80%, transparent)",
            paddingTop: 20,
          }}>
            <ContactDetail k="所在地" v={<>東京都港区北青山１丁目３番１号<br/>アールキューブ青山３階</>} />
            <ContactDetail k="営業時間" v={<>平日 10:00 — 19:00<br/>Closed on weekends</>} />
            <ContactDetail k="返信目安" v={<>1営業日以内<br/>Within 1 business day</>} />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <ImgSlot id="contact-hero" h={isMobile ? 220 : 360}
            label="オフィスエントランス" radius={2} src={PHOTOS.entrance} />
          <div style={{
            padding: isMobile ? "14px 16px" : "18px 20px",
            border: "1px solid color-mix(in oklch, var(--rule) 80%, transparent)",
            borderRadius: 2,
            background: "color-mix(in oklch, var(--mist) 50%, transparent)",
            display: "flex", flexDirection: "column", gap: 10,
          }}>
            <div className="mono" style={{
              fontSize: 10, letterSpacing: 1.6, color: "var(--lime)", textTransform: "uppercase",
            }}>★ こんなご相談から</div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6,
              fontSize: isMobile ? 13 : 13.5, lineHeight: 1.7,
              color: "color-mix(in oklch, var(--ink) 80%, var(--paper))" }}>
              <li>— CPAが頭打ちで打ち手が見えない</li>
              <li>— 媒体運用を内製化したい</li>
              <li>— GA4 / 計測の設計から相談したい</li>
              <li>— LPがあるが成果につながらない</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({ k, v }) {
  return (
    <div>
      <div className="mono" style={{
        fontSize: 11, color: "var(--lime)", letterSpacing: 1.5, textTransform: "uppercase",
        marginBottom: 6,
      }}>{k}</div>
      <div style={{
        fontSize: 13.5, lineHeight: 1.7,
        color: "color-mix(in oklch, var(--ink) 85%, var(--paper))",
      }}>{v}</div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// FOOTER
// ──────────────────────────────────────────────────────────────────────────────
function SiteFooter({ device = "desktop" }) {
  const isMobile = device === "mobile";
  return (
    <footer className="fredges-scope" data-theme="midnight" style={{
      background: "var(--paper)", color: "var(--ink)",
      padding: isMobile ? "26px 18px" : "44px 56px",
      borderTop: "1px solid color-mix(in oklch, var(--rule) 80%, transparent)",
      display: "flex", flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? 14 : 0, alignItems: isMobile ? "flex-start" : "center",
      justifyContent: "space-between",
    }}>
      <Wordmark size={18} tone="var(--ink)" />
      <div className="mono" style={{
        fontSize: 11, letterSpacing: 1.4, color: "color-mix(in oklch, var(--ink) 55%, var(--paper))",
        textTransform: "uppercase",
      }}>
        © 2026 Fredges, Inc. — Tokyo, Aoyama
      </div>
      <div className="en" style={{ fontSize: 12, color: "var(--lime)", fontWeight: 600 }}>
        Built for performance.
      </div>
    </footer>
  );
}

Object.assign(window, {
  SectionLabel, BigTitle, ImgSlot,
  ServicesSection, StrengthsSection, ProcessSection,
  CompanySection, ContactSection, SiteFooter,
});
