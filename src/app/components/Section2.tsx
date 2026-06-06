import { motion } from "motion/react";
import { SectionIllustration } from "./SectionIllustration";
import { SectionNav } from "./SectionNav";
import dialecticIllustration from "./asset/2.2 Quan hệ biện chứng cá nhân xã hội.jpg";
import relationsIllustration from "./asset/2.1 Mạng lưới quan hệ xã hội.jpg";

type Page = "home" | "section1" | "section2" | "section3" | "section4";

interface Props {
  onNavigate: (page: Page) => void;
}

const ACCENT = "#2C5F8A";

const relations = [
  { icon: "👨‍👩‍👧", name: "Gia đình", text: "Hình thành tình cảm ban đầu, lối sống, thói quen, niềm tin và cách nhìn về bản thân." },
  { icon: "🏫", name: "Nhà trường", text: "Hình thành tri thức, kỷ luật, năng lực tư duy, khả năng giao tiếp và định hướng nghề nghiệp." },
  { icon: "🤝", name: "Bạn bè / Cộng đồng", text: "Tạo cảm giác thuộc về, áp lực so sánh, chuẩn mực ứng xử và nhu cầu được công nhận." },
  { icon: "💼", name: "Kinh tế / Nghề nghiệp", text: "Quy định vị trí lao động, thu nhập, cơ hội phát triển và mức độ độc lập của cá nhân." },
  { icon: "📱", name: "Mạng xã hội", text: "Tạo không gian thể hiện bản thân, nhưng cũng tạo áp lực hình ảnh, lượt thích và sự so sánh liên tục." },
];

const dialectic = [
  {
    label: "Cách nhìn phiến diện",
    items: [
      'Chỉ đề cao cá nhân: "Tôi muốn làm gì cũng được, không cần quan tâm xã hội."',
      'Chỉ đề cao xã hội: "Cá nhân phải hoàn toàn phục tùng tập thể."',
      "Xem bản chất con người là cố định, sinh ra đã vậy.",
    ],
    color: "#C0392B",
    bg: "#FDF2F1",
  },
  {
    label: "Cách hiểu biện chứng",
    items: [
      "Cá nhân có tự do, nhưng tự do phải gắn với trách nhiệm xã hội và điều kiện hiện thực.",
      "Xã hội cần tạo điều kiện để cá nhân phát triển toàn diện, không biến cá nhân thành công cụ.",
      "Bản chất con người hình thành và biến đổi trong các quan hệ xã hội và hoạt động thực tiễn.",
    ],
    color: "#27AE60",
    bg: "#F1FDF5",
  },
];

export function Section2({ onNavigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F7F3EE", fontFamily: "'Inter', sans-serif" }}>
      <SectionNav current="section2" onNavigate={onNavigate} accentColor={ACCENT} />

      {/* Hero */}
      <section
        style={{
          paddingTop: 64,
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(135deg, #1A2C40 0%, #0D2035 100%)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("https://images.unsplash.com/photo-1570569570661-342f6f358ee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26,44,64,0.93) 55%, rgba(26,44,64,0.4) 100%)" }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, backgroundColor: ACCENT }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "80px 40px" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 72, fontWeight: 900, color: `rgba(44,95,138,0.25)`, lineHeight: 1 }}>02</span>
              <div style={{ height: 1, width: 40, backgroundColor: "#B8956A" }} />
              <span style={{ color: "#B8956A", fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase" as const, fontWeight: 500 }}>Bản chất con người</span>
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                color: "#F7F3EE",
                lineHeight: 1.2,
                maxWidth: 680,
                marginBottom: 20,
              }}
            >
              Tổng Hòa Các
              <span style={{ color: "#7BB8D8" }}> Quan Hệ Xã Hội</span>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#A0A8B0", lineHeight: 1.75, maxWidth: 560 }}>
              Muốn hiểu một con người, không thể chỉ nhìn vào cá tính riêng lẻ mà phải nhìn vào hệ thống quan hệ xã hội đang hình thành nên con người đó.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 40px" }}>

        {/* Central thesis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: 72,
            padding: "48px 40px",
            background: `linear-gradient(135deg, ${ACCENT}, #1A2C40)`,
            borderRadius: 16,
            color: "#FFFFFF",
          }}
        >
          <p style={{ fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#7BB8D8", marginBottom: 12 }}>Luận điểm trung tâm</p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
              fontStyle: "italic",
              lineHeight: 1.65,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            "Trong tính hiện thực của nó, bản chất con người là tổng hòa những quan hệ xã hội."
          </p>
          <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", marginTop: 16 }}>— C. Mác, Luận cương về Feuerbach</p>
        </motion.div>

        {/* 2.1 Relations network */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 72 }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
              fontWeight: 700,
              color: "#1C2533",
              marginBottom: 8,
            }}
          >
            2.1 Mạng lưới quan hệ xã hội
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#6B7280", marginBottom: 36, lineHeight: 1.7 }}>
            Nhân cách, thói quen, nhu cầu, ước mơ, cách ứng xử và cách con người tự đánh giá bản thân đều được hình thành thông qua các quan hệ xã hội cụ thể.
          </p>

          <SectionIllustration
            src={relationsIllustration}
            alt="Minh họa một cá nhân ở trung tâm mạng lưới gia đình, nhà trường, bạn bè, nghề nghiệp và mạng xã hội"
            label="Cá nhân được hình thành trong mạng lưới các quan hệ xã hội"
            accentColor={ACCENT}
            objectPosition="center 52%"
          />

          {/* Center + radial layout via flexbox */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {/* Center card */}
            <div
              style={{
                backgroundColor: ACCENT,
                borderRadius: 12,
                padding: "28px 20px",
                textAlign: "center",
                color: "#FFFFFF",
                display: "flex",
                flexDirection: "column" as const,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "2rem", marginBottom: 10 }}>👤</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700 }}>Con Người</h3>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.75)", marginTop: 6, lineHeight: 1.5 }}>được hình thành qua các quan hệ</p>
            </div>

            {/* Relation cards */}
            {relations.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 12,
                  padding: "22px 20px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  borderTop: `3px solid ${ACCENT}`,
                }}
              >
                <span style={{ fontSize: "1.6rem", display: "block", marginBottom: 10 }}>{r.icon}</span>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "#1C2533", marginBottom: 8 }}>{r.name}</h4>
                <p style={{ fontSize: "0.88rem", color: "#5A5A6A", lineHeight: 1.65 }}>{r.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Social media highlight */}
          <div
            style={{
              marginTop: 28,
              padding: "24px 28px",
              backgroundColor: "#EFF6FC",
              border: `1px solid #B0CCE0`,
              borderRadius: 10,
            }}
          >
            <p style={{ fontSize: "0.95rem", color: "#1A3A5A", lineHeight: 1.75 }}>
              <strong>Liên hệ mạng xã hội:</strong> Trên mạng xã hội, cá nhân không đứng một mình. Mỗi bài đăng, bức ảnh, lượt thích, bình luận đều nằm trong một mạng lưới quan hệ: bạn bè, người theo dõi, thuật toán, xu hướng, quảng cáo và áp lực thành công. Vì thế, <em>"cái tôi" trên mạng không chỉ là sở thích cá nhân, mà còn là sản phẩm của các quan hệ xã hội số.</em>
            </p>
          </div>
        </motion.section>

        {/* 2.2 Dialectic individual-society */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 40 }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
              fontWeight: 700,
              color: "#1C2533",
              marginBottom: 8,
            }}
          >
            2.2 Quan hệ biện chứng: Cá nhân – Xã hội
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#6B7280", marginBottom: 32, lineHeight: 1.7 }}>
            Xã hội tạo ra điều kiện, môi trường, chuẩn mực để cá nhân hình thành. Ngược lại, cá nhân bằng hoạt động thực tiễn cũng góp phần cải biến xã hội.
          </p>

          <SectionIllustration
            src={dialecticIllustration}
            alt="Minh họa sự tác động qua lại giữa cá nhân, cộng đồng và hoạt động cải biến xã hội"
            label="Cá nhân và xã hội tác động, hình thành và cải biến lẫn nhau"
            accentColor={ACCENT}
            objectPosition="center 50%"
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {dialectic.map((col) => (
              <div
                key={col.label}
                style={{
                  backgroundColor: col.bg,
                  borderRadius: 12,
                  padding: "28px 24px",
                  border: `1px solid ${col.color}30`,
                }}
              >
                <h3 style={{ fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: col.color, fontWeight: 700, marginBottom: 20 }}>
                  {col.label}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.items.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, marginBottom: 16, fontSize: "0.92rem", color: "#3A3A4A", lineHeight: 1.65 }}>
                      <span style={{ color: col.color, flexShrink: 0, marginTop: 2 }}>{col.label.includes("phiến diện") ? "✗" : "✓"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              marginTop: 28,
              padding: "28px 36px",
              background: "linear-gradient(135deg, #1A2C40, #1C2533)",
              borderRadius: 12,
              textAlign: "center",
            }}
          >
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontStyle: "italic", color: "#F0EBE3", lineHeight: 1.7 }}>
              "Cá nhân không chỉ bị xã hội quy định một chiều — bằng hoạt động thực tiễn, học tập, lao động và sáng tạo, cá nhân cũng góp phần cải biến xã hội."
            </p>
          </motion.div>
        </motion.section>
      </main>

      <SectionNav current="section2" onNavigate={onNavigate} accentColor={ACCENT} />
    </div>
  );
}
