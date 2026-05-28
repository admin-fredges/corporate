// app.jsx — production entry for the responsive Fredges Ltd. corporate site.
// Reuses the same React components shared with the design canvas build.

const {
  useEffect,
  useState,
  useRef
} = React;

// ──────────────────────────────────────────────────────────────────────────────
// Responsive viewport hook — single Desktop/Mobile pivot at 860px.
// ──────────────────────────────────────────────────────────────────────────────
function useDevice(breakpoint = 860) {
  const [device, setDevice] = useState(() => typeof window === "undefined" || window.innerWidth >= breakpoint ? "desktop" : "mobile");
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
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("reveal-in");
          io.unobserve(e.target);
        }
      }
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -80px 0px"
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line
  }, deps);
}
function Revealify({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, children);
}

// ──────────────────────────────────────────────────────────────────────────────
// Copy — single source of truth for headline, subhead, CTA label.
// To edit, change the values below and re-deploy.
// ──────────────────────────────────────────────────────────────────────────────
const SITE_COPY = {
  headlineL1: "AI × マーケティング",
  headlineL2: "ビジネスの可能性を、もっと大きく",
  subhead: "データに基づいた意思決定とスピード感のある運用で、企業の成長を加速させるデジタルマーケティングパートナー。",
  ctaLabel: "お問い合わせ"
};
function buildCopy() {
  const base = {
    ...FREDGES_DEFAULT_COPY
  };
  base.headlineC1 = SITE_COPY.headlineL1;
  base.headlineC2 = SITE_COPY.headlineL2;
  base.taglineC = SITE_COPY.subhead;
  base.cta = SITE_COPY.ctaLabel;
  return base;
}

// ──────────────────────────────────────────────────────────────────────────────
// Photo band between hero and content
// ──────────────────────────────────────────────────────────────────────────────
const BAND_PHOTOS = {
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80&auto=format&fit=crop",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80&auto=format&fit=crop",
  tokyo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1400&q=80&auto=format&fit=crop"
};
function PhotoBand({
  device
}) {
  const isMobile = device === "mobile";
  return /*#__PURE__*/React.createElement("section", {
    "data-section": "photoband",
    style: {
      background: "var(--paper)",
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.6fr 1fr 1fr",
      gap: 0
    }
  }, /*#__PURE__*/React.createElement(ImgSlot, {
    id: "band-1",
    h: isMobile ? 260 : 360,
    label: "\u30AA\u30D5\u30A3\u30B9",
    radius: 0,
    src: BAND_PHOTOS.office
  }), /*#__PURE__*/React.createElement(ImgSlot, {
    id: "band-2",
    h: isMobile ? 200 : 360,
    label: "\u30E1\u30F3\u30D0\u30FC",
    radius: 0,
    src: BAND_PHOTOS.team
  }), /*#__PURE__*/React.createElement(ImgSlot, {
    id: "band-3",
    h: isMobile ? 200 : 360,
    label: "\u8857\u4E26\u307F / Aoyama",
    radius: 0,
    src: BAND_PHOTOS.tokyo
  })));
}

// ──────────────────────────────────────────────────────────────────────────────
// Site composition (Hero C as the production hero)
// ──────────────────────────────────────────────────────────────────────────────
function FullSite({
  device,
  copy
}) {
  const ref = useRef(null);
  useReveal(ref, [device]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      background: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fredges-scope",
    style: {
      background: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement(Revealify, null, /*#__PURE__*/React.createElement(HeroC, {
    device: device,
    copy: copy
  }))), /*#__PURE__*/React.createElement(Revealify, null, /*#__PURE__*/React.createElement(PhotoBand, {
    device: device
  })), /*#__PURE__*/React.createElement(Revealify, null, /*#__PURE__*/React.createElement(ServicesSection, {
    device: device
  })), /*#__PURE__*/React.createElement(Revealify, null, /*#__PURE__*/React.createElement(StrengthsSection, {
    device: device
  })), /*#__PURE__*/React.createElement(Revealify, null, /*#__PURE__*/React.createElement(ProcessSection, {
    device: device
  })), /*#__PURE__*/React.createElement(Revealify, null, /*#__PURE__*/React.createElement(CompanySection, {
    device: device
  })), /*#__PURE__*/React.createElement(Revealify, null, /*#__PURE__*/React.createElement(ContactSection, {
    device: device
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    device: device
  }));
}

// ──────────────────────────────────────────────────────────────────────────────
// App
// ──────────────────────────────────────────────────────────────────────────────
function App() {
  const device = useDevice(860);
  const copy = buildCopy();
  return /*#__PURE__*/React.createElement("div", {
    className: "live-shell"
  }, /*#__PURE__*/React.createElement(FullSite, {
    device: device,
    copy: copy
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));