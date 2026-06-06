import { ArrowLeft, ArrowRight, Home } from "lucide-react";

type Page = "home" | "section1" | "section2" | "section3" | "section4";

interface Props {
  current: Page;
  onNavigate: (page: Page) => void;
  accentColor?: string;
}

const sections: { id: Page; label: string; short: string }[] = [
  { id: "section1", label: "Cơ Sở Lý Luận", short: "01" },
  { id: "section2", label: "Bản Chất Con Người", short: "02" },
  { id: "section3", label: "Tha Hóa & Giải Phóng", short: "03" },
  { id: "section4", label: "Mạng Xã Hội & Cái Tôi", short: "04" },
];

export function SectionNav({ current, onNavigate, accentColor = "#8B1A35" }: Props) {
  const currentIdx = sections.findIndex((s) => s.id === current);
  const prev = currentIdx > 0 ? sections[currentIdx - 1] : null;
  const next = currentIdx < sections.length - 1 ? sections[currentIdx + 1] : null;

  return (
    <>
      {/* Top Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: "rgba(28,37,51,0.97)",
          backdropFilter: "blur(8px)",
          borderBottom: `3px solid ${accentColor}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          height: 64,
        }}
      >
        {/* Back to home */}
        <button
          onClick={() => onNavigate("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: "transparent",
            border: "none",
            color: "#C8C0B0",
            fontSize: "0.88rem",
            cursor: "pointer",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            letterSpacing: "0.02em",
            padding: "6px 0",
          }}
        >
          <Home size={16} />
          Trang chính
        </button>

        {/* Section indicators */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {sections.map((s, i) => (
            <button
              key={s.id}
              onClick={() => onNavigate(s.id)}
              title={s.label}
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: s.id === current ? `2px solid ${accentColor}` : "2px solid rgba(255,255,255,0.15)",
                backgroundColor: s.id === current ? accentColor : "transparent",
                color: s.id === current ? "#FFFFFF" : "#7A8090",
                fontSize: "0.75rem",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
            >
              {s.short}
            </button>
          ))}
        </div>

        {/* Title on right */}
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.88rem",
            color: "#8A9090",
            display: "none",
          }}
          className="md:block"
        >
          Triết học Mác – Lênin
        </span>
      </nav>

      {/* Bottom Prev/Next navigation */}
      <div
        style={{
          backgroundColor: "#1C2533",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        {prev ? (
          <button
            onClick={() => onNavigate(prev.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "28px 36px",
              backgroundColor: "transparent",
              border: "none",
              borderRight: "1px solid rgba(255,255,255,0.08)",
              color: "#C8C0B0",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              flex: 1,
            }}
          >
            <ArrowLeft size={20} />
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "0.75rem", color: "#6B7280", marginBottom: 2 }}>Phần trước</p>
              <p style={{ fontSize: "0.95rem", fontWeight: 600 }}>{prev.label}</p>
            </div>
          </button>
        ) : (
          <button
            onClick={() => onNavigate("home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "28px 36px",
              backgroundColor: "transparent",
              border: "none",
              borderRight: "1px solid rgba(255,255,255,0.08)",
              color: "#C8C0B0",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              flex: 1,
            }}
          >
            <ArrowLeft size={20} />
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "0.75rem", color: "#6B7280", marginBottom: 2 }}>Quay lại</p>
              <p style={{ fontSize: "0.95rem", fontWeight: 600 }}>Trang chính</p>
            </div>
          </button>
        )}

        {next ? (
          <button
            onClick={() => onNavigate(next.id)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 12,
              padding: "28px 36px",
              backgroundColor: accentColor,
              border: "none",
              color: "#FFFFFF",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              flex: 1,
              transition: "filter 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.filter = "none")}
          >
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.65)", marginBottom: 2 }}>Phần tiếp theo</p>
              <p style={{ fontSize: "0.95rem", fontWeight: 600 }}>{next.label}</p>
            </div>
            <ArrowRight size={20} />
          </button>
        ) : (
          <button
            onClick={() => onNavigate("home")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 12,
              padding: "28px 36px",
              backgroundColor: accentColor,
              border: "none",
              color: "#FFFFFF",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              flex: 1,
            }}
          >
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.65)", marginBottom: 2 }}>Kết thúc</p>
              <p style={{ fontSize: "0.95rem", fontWeight: 600 }}>Về trang chính</p>
            </div>
            <Home size={20} />
          </button>
        )}
      </div>
    </>
  );
}
