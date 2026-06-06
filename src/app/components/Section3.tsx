import { motion } from "motion/react";
import { SectionIllustration } from "./SectionIllustration";
import { SectionNav } from "./SectionNav";
import alienationIllustration from "./asset/3.1 Các dạng tha hóa con người.jpg";

type Page = "home" | "section1" | "section2" | "section3" | "section4";

interface Props {
  onNavigate: (page: Page) => void;
}

const ACCENT = "#6B4B35";

const alienationTypes = [
  {
    type: "Tha hóa khỏi sản phẩm",
    desc: "Sản phẩm do con người tạo ra nhưng không còn thuộc về hoặc không phản ánh đúng con người.",
    social: 'Hình ảnh cá nhân trên mạng do chính mình tạo ra nhưng dần trở thành "mặt nạ" phải duy trì.',
    icon: "🎭",
  },
  {
    type: "Tha hóa khỏi hoạt động",
    desc: "Hoạt động vốn có ý nghĩa sáng tạo lại trở thành áp lực, ép buộc, máy móc.",
    social: "Đăng bài, chụp ảnh, chỉnh sửa, theo trend không còn vui mà trở thành áp lực phải được chú ý.",
    icon: "⚙️",
  },
  {
    type: "Tha hóa khỏi bản thân",
    desc: "Con người không sống đúng nhu cầu và giá trị thật của mình.",
    social: "Tự đánh giá bản thân bằng lượt thích, bình luận, ngoại hình, độ sang chảnh hoặc sự nổi tiếng.",
    icon: "🪞",
  },
  {
    type: "Tha hóa khỏi người khác",
    desc: "Quan hệ giữa người với người trở nên lạnh lùng, cạnh tranh, vụ lợi.",
    social: "Bạn bè trở thành khán giả; quan hệ thật bị thay bằng so sánh, ganh đua và phán xét.",
    icon: "👥",
  },
];

const liberationLevels = [
  {
    level: "Cá nhân",
    content: "Nhận thức được điều gì đang chi phối mình; biết làm chủ nhu cầu, thời gian, cảm xúc và lựa chọn sống.",
    icon: "🧠",
  },
  {
    level: "Quan hệ xã hội",
    content: "Xây dựng các quan hệ tôn trọng, bình đẳng, nhân văn; không biến người khác thành công cụ để đạt danh tiếng hay lợi ích.",
    icon: "🤝",
  },
  {
    level: "Giáo dục – Văn hóa",
    content: "Tạo điều kiện để con người phát triển năng lực, nhân cách, tư duy phản biện và ý thức trách nhiệm.",
    icon: "📚",
  },
  {
    level: "Kinh tế – Xã hội",
    content: "Giảm những cơ chế làm con người bị bóc lột, bị lệ thuộc, bị đo giá trị chỉ bằng tiền bạc, địa vị hoặc hình ảnh bên ngoài.",
    icon: "⚖️",
  },
];

export function Section3({ onNavigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F7F3EE", fontFamily: "'Inter', sans-serif" }}>
      <SectionNav current="section3" onNavigate={onNavigate} accentColor={ACCENT} />

      {/* Hero */}
      <section
        style={{
          paddingTop: 64,
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #1C1410 0%, #2D1A0F 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(28,20,16,0.92) 55%, rgba(28,20,16,0.4) 100%)" }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, backgroundColor: ACCENT }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "80px 40px" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 72, fontWeight: 900, color: `rgba(107,75,53,0.3)`, lineHeight: 1 }}>03</span>
              <div style={{ height: 1, width: 40, backgroundColor: "#B8956A" }} />
              <span style={{ color: "#B8956A", fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase" as const, fontWeight: 500 }}>Tha hóa & Giải phóng</span>
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
              Tha Hóa Con Người &
              <span style={{ color: "#C4A07A" }}> Con Đường Giải Phóng</span>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#A0A8B0", lineHeight: 1.75, maxWidth: 560 }}>
              Khi sản phẩm, quan hệ hoặc hình ảnh do con người tạo ra quay lại chi phối con người — và con đường giải phóng toàn diện theo Mác – Lênin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 40px" }}>

        {/* Definition block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: "#FFFFFF",
            borderLeft: `5px solid ${ACCENT}`,
            borderRadius: "0 12px 12px 0",
            padding: "28px 32px",
            marginBottom: 64,
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <p style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: ACCENT, fontWeight: 600, marginBottom: 8 }}>Định nghĩa</p>
          <p style={{ fontSize: "1.05rem", color: "#3A3A4A", lineHeight: 1.8 }}>
            <strong>Tha hóa</strong> là tình trạng những sản phẩm, quan hệ hoặc hình ảnh do con người tạo ra lại quay trở lại <strong style={{ color: ACCENT }}>chi phối con người</strong>, làm con người đánh mất khả năng làm chủ bản thân và đời sống của mình. Trong xã hội tư bản, Mác phân tích tha hóa gắn với lao động: người lao động bị tách khỏi sản phẩm lao động, quá trình lao động, bản chất sáng tạo và quan hệ với người khác.
          </p>
        </motion.div>

        {/* 3.1 Alienation types */}
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
            3.1 Các dạng tha hóa con người
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#6B7280", marginBottom: 36, lineHeight: 1.7 }}>
            Tha hóa không chỉ nằm trong nhà máy hay lao động sản xuất — trong đời sống hiện đại, tha hóa còn xuất hiện trong tiêu dùng, truyền thông và mạng xã hội.
          </p>

          <SectionIllustration
            src={alienationIllustration}
            alt="Minh họa con người bị chi phối bởi mặt nạ, mạng xã hội, tiêu dùng, tiền bạc và guồng máy"
            label="Những sản phẩm và quan hệ do con người tạo ra có thể quay lại chi phối con người"
            accentColor={ACCENT}
            objectPosition="center 48%"
            tone="dark"
          />

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
            {alienationTypes.map((item, i) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 12,
                  padding: "28px 28px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr 1fr",
                  gap: 24,
                  alignItems: "start",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 10,
                    backgroundColor: "#FBF6F2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                {/* General description */}
                <div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: ACCENT, marginBottom: 6 }}>{item.type}</h4>
                  <p style={{ fontSize: "0.9rem", color: "#4A4A5A", lineHeight: 1.65 }}>{item.desc}</p>
                </div>

                {/* Social media connection */}
                <div
                  style={{
                    backgroundColor: "#F5F2EE",
                    borderRadius: 8,
                    padding: "14px 16px",
                    borderLeft: `3px solid ${ACCENT}`,
                  }}
                >
                  <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#8A7060", fontWeight: 600, marginBottom: 6 }}>📱 Mạng xã hội</p>
                  <p style={{ fontSize: "0.88rem", color: "#5A5A6A", lineHeight: 1.6 }}>{item.social}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3.2 Liberation */}
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
            3.2 Giải phóng con người theo Mác – Lênin
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#6B7280", marginBottom: 36, lineHeight: 1.7 }}>
            Giải phóng con người không chỉ là giải thoát tinh thần cá nhân, mà là quá trình xóa bỏ những điều kiện xã hội làm con người bị áp bức, bị tha hóa.
          </p>

          {/* Liberation pathway */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: 28,
                top: 28,
                bottom: 28,
                width: 2,
                background: `linear-gradient(to bottom, ${ACCENT}, #B8956A)`,
              }}
            />

            <div style={{ display: "flex", flexDirection: "column" as const, gap: 20, paddingLeft: 72 }}>
              {liberationLevels.map((item, i) => (
                <motion.div
                  key={item.level}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ position: "relative" }}
                >
                  {/* Circle indicator */}
                  <div
                    style={{
                      position: "absolute",
                      left: -58,
                      top: 16,
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      backgroundColor: ACCENT,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      border: "3px solid #F7F3EE",
                      boxShadow: `0 0 0 2px ${ACCENT}`,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: 12,
                      padding: "24px 24px",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    }}
                  >
                    <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 700, color: "#1C2533", marginBottom: 8 }}>
                      Cấp độ {i + 1}: {item.level}
                    </h4>
                    <p style={{ fontSize: "0.92rem", color: "#5A5A6A", lineHeight: 1.7 }}>{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              marginTop: 40,
              padding: "36px 40px",
              background: "linear-gradient(135deg, #1C1410, #2D1A0F)",
              borderRadius: 16,
              textAlign: "center",
            }}
          >
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontStyle: "italic", color: "#F0EBE3", lineHeight: 1.75, maxWidth: 680, margin: "0 auto" }}>
              "Tha hóa không chỉ nằm trong nhà máy hay lao động sản xuất. Trong đời sống hiện đại, tha hóa còn có thể xuất hiện trong tiêu dùng, truyền thông, mạng xã hội và cách con người biến chính hình ảnh của mình thành một 'sản phẩm' để được công nhận."
            </p>
          </motion.div>
        </motion.section>
      </main>

      <SectionNav current="section3" onNavigate={onNavigate} accentColor={ACCENT} />
    </div>
  );
}
