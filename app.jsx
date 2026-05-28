// app.jsx — production entry for the responsive Fredges Ltd. corporate site.
// Reuses the same React components shared with the design canvas build.

const { useEffect, useState, useRef } = React;

// ──────────────────────────────────────────────────────────────────────────────
// Responsive viewport hook — single Desktop/Mobile pivot at 860px.
// ──────────────────────────────────────────────────────────────────────────────
function useDevice(breakpoint = 860) {
  const [device, setDevice] = useState(() =>
    typeof window === "undefined" || window.innerWidth >= breakpoint ? "desktop" : "mobile"
  );
  useEffect(() => {
    const onResize = () => {
      setDevice(window.innerWidth >= breakpoint ? "desktop" : "mobile");
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return device;
}

// ──────────────────────────────────────────────────────────────────────────────
// Scroll-reveal — fades sections up as they enter the viewport.
// ──────────────────────────────────────────────────────────────────────────────
function useReveal(rootRef, deps = []) {
  useEffect(() => {
    const root = rootRef?.current;
    if (!root) return;
    const els = root.querySelectorAll(".reveal");
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("reveal-in");
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -80px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line
  }, deps);
}

function Revealify({ children }) {
  return <div className="reveal">{children}</div>;
}

// ──────────────────────────────────────────────────────────────────────────────
// Copy — single source of truth for headline, subhead, CTA label.
// To edit, change the values below and re-deploy.
// ──────────────────────────────────────────────────────────────────────────────
const SITE_COPY = {
  headlineL1: "AI × マーケティング",
  headlineL2: "ビジネスの可能性を、もっと大きく",
  subhead:    "データに基づいた意思決定とスピード感のある運用で、企業の成長を加速させるデジタルマーケティングパートナー。",
  ctaLabel:   "お問い合わせ",
};

function buildCopy() {
  const base = { ...FREDGES_DEFAULT_COPY };
  base.headlineC1 = SITE_COPY.headlineL1;
  base.headlineC2 = SITE_COPY.headlineL2;
  base.taglineC   = SITE_COPY.subhead;
  base.cta        = SITE_COPY.ctaLabel;
  return base;
}

// ──────────────────────────────────────────────────────────────────────────────
// Photo band between hero and content
// ──────────────────────────────────────────────────────────────────────────────
const BAND_PHOTOS = {
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80&auto=format&fit=crop",
  team:   "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80&auto=format&fit=crop",
  tokyo:  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1400&q=80&auto=format&fit=crop",
};

function PhotoBand({ device }) {
  const isMobile = device === "mobile";
  return (
    <section data-section="photoband" style={{
      background: "var(--paper)",
      borderTop: "1px solid var(--rule)",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.6fr 1fr 1fr",
        gap: 0,
      }}>
        <ImgSlot id="band-1" h={isMobile ? 260 : 360} label="オフィス" radius={0} src={BAND_PHOTOS.office} />
        <ImgSlot id="band-2" h={isMobile ? 200 : 360} label="メンバー" radius={0} src={BAND_PHOTOS.team} />
        <ImgSlot id="band-3" h={isMobile ? 200 : 360} label="街並み / Aoyama" radius={0} src={BAND_PHOTOS.tokyo} />
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Site composition (Hero C as the production hero)
// ──────────────────────────────────────────────────────────────────────────────
function FullSite({ device, copy }) {
  const ref = useRef(null);
  useReveal(ref, [device]);
  return (
    <div ref={ref} style={{ background: "var(--paper)" }}>
      <div className="fredges-scope" style={{ background: "var(--paper)" }}>
        <Revealify>
          <HeroC device={device} copy={copy} />
        </Revealify>
      </div>
      <Revealify><PhotoBand device={device} /></Revealify>
      <Revealify><ServicesSection device={device} /></Revealify>
      <Revealify><StrengthsSection device={device} /></Revealify>
      <Revealify><ProcessSection device={device} /></Revealify>
      <Revealify><CompanySection device={device} /></Revealify>
      <Revealify><ContactSection device={device} /></Revealify>
      <SiteFooter device={device} />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// App
// ──────────────────────────────────────────────────────────────────────────────
function App() {
  const device = useDevice(860);
  const copy = buildCopy();
  return (
    <div className="live-shell">
      <FullSite device={device} copy={copy} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
