import { motion } from "motion/react";
import { Church, Flower2, MoonStar, Sun } from "lucide-react";
import { SectionIllustration } from "./SectionIllustration";
import { SectionNav } from "./SectionNav";
import naturalSocialIllustration from "./asset/Con người là thực thể tự nhiên – xã hội.jpg";
import religionIllustration from "./asset/Một số quan niệm tôn giáo về con người.jpg";

type Page = "home" | "section1" | "section2" | "section3" | "section4";

interface Props {
  onNavigate: (page: Page) => void;
}

const ACCENT = "#8B1A35";

const religions = [
  {
    name: "Kitô giáo",
    icon: Church,
    iconColor: "#8B1A35",
    iconBackground: "#FDF0F3",
    desc: "Con người là thụ tạo của Thiên Chúa, có linh hồn, có phẩm giá và trách nhiệm đạo đức; đời sống con người gắn với tội lỗi, cứu rỗi và tình yêu thương.",
  },
  {
    name: "Hồi giáo",
    icon: MoonStar,
    iconColor: "#2F6B5F",
    iconBackground: "#EDF7F3",
    desc: "Con người do Allah tạo dựng, có trách nhiệm sống theo ý chí của Thượng đế; con người vừa là tín đồ, vừa có vai trò quản lý thế giới theo trách nhiệm đạo đức.",
  },
  {
    name: "Phật giáo",
    icon: Flower2,
    iconColor: "#B06A24",
    iconBackground: "#FFF5E8",
    desc: "Con người là sự hợp thành của các yếu tố thân – tâm, vô thường, vô ngã; khổ đau phát sinh từ vô minh và tham ái; giải thoát gắn với tu tập và giác ngộ.",
  },
  {
    name: "Ấn Độ giáo",
    icon: Sun,
    iconColor: "#7254A3",
    iconBackground: "#F4F0FA",
    desc: "Con người gắn với Atman, nghiệp, luân hồi và con đường giải thoát; đời sống cá nhân chịu ảnh hưởng bởi bổn phận và trật tự vũ trụ.",
  },
];

export function Section1({ onNavigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F7F3EE", fontFamily: "'Inter', sans-serif" }}>
      <SectionNav current="section1" onNavigate={onNavigate} accentColor={ACCENT} />

      {/* Hero */}
      <section
        style={{
          paddingTop: 64,
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(135deg, #1C2533 0%, #2C1820 100%)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080")`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            opacity: 0.15,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(28,37,51,0.92) 50%, rgba(28,37,51,0.4) 100%)" }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, backgroundColor: ACCENT }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "80px 40px" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 72, fontWeight: 900, color: "rgba(139,26,53,0.25)", lineHeight: 1 }}>01</span>
              <div style={{ height: 1, width: 40, backgroundColor: ACCENT }} />
              <span style={{ color: "#B8956A", fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase" as const, fontWeight: 500 }}>Cơ sở lý luận</span>
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
              Con Người Trong Triết Học
              <span style={{ color: "#B8956A" }}> Mác – Lênin</span>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#A0A8B0", lineHeight: 1.75, maxWidth: 540 }}>
              Từ các quan niệm tôn giáo đến thực thể tự nhiên – xã hội. Triết học Mác – Lênin đặt con người trong đời sống hiện thực, lao động và quan hệ xã hội cụ thể.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 40px" }}>
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: "#FFFFFF",
            borderLeft: `5px solid ${ACCENT}`,
            borderRadius: "0 12px 12px 0",
            padding: "28px 32px",
            marginBottom: 64,
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <p style={{ fontSize: "1.05rem", color: "#3A3A4A", lineHeight: 1.8 }}>
            Khi bàn về con người, nhiều cách tiếp cận thường bắt đầu từ linh hồn, đạo đức, bản năng, ý thức cá nhân hoặc đời sống tinh thần. Triết học Mác – Lênin không phủ nhận đời sống tinh thần, nhưng nhấn mạnh rằng{" "}
            <strong style={{ color: ACCENT }}>con người phải được hiểu như một con người hiện thực</strong>: có cơ thể tự nhiên, có nhu cầu sống, lao động, giao tiếp và tồn tại trong các quan hệ xã hội cụ thể.
          </p>
        </motion.div>

        {/* 1.1 Religions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            1.1 Một số quan niệm tôn giáo về con người
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#6B7280", marginBottom: 32, lineHeight: 1.7 }}>
            Các tôn giáo lý giải con người chủ yếu từ phương diện tinh thần, linh hồn, nghiệp, đức tin hoặc sự cứu rỗi — giúp đối chiếu với quan điểm Mác – Lênin.
          </p>

          <SectionIllustration
            src={religionIllustration}
            alt="Minh họa con người và các biểu tượng của Kitô giáo, Hồi giáo, Phật giáo và Ấn Độ giáo"
            label="Con người trong những cách lý giải tôn giáo khác nhau"
            accentColor={ACCENT}
            objectPosition="center 48%"
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {religions.map((r, i) => {
              const Icon = r.icon;

              return (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 14px 30px rgba(28,37,51,0.1)" }}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 10,
                    padding: "24px 24px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    borderTop: `3px solid ${ACCENT}`,
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 12,
                      backgroundColor: r.iconBackground,
                      color: r.iconColor,
                      marginBottom: 18,
                    }}
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 700, color: "#1C2533", marginBottom: 10 }}>
                    {r.name}
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "#5A5A6A", lineHeight: 1.7 }}>{r.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Transition note */}
          <div
            style={{
              marginTop: 28,
              padding: "20px 24px",
              backgroundColor: "#FDF5F7",
              borderRadius: 8,
              border: `1px solid #E8C0C8`,
            }}
          >
            <p style={{ fontSize: "0.95rem", color: "#5A3040", lineHeight: 1.75 }}>
              Các tôn giáo giúp con người trả lời câu hỏi về linh hồn, ý nghĩa sống và đạo đức. Triết học Mác – Lênin tiếp cận con người theo hướng khác:{" "}
              <em>con người hiện thực sống bằng gì, lao động như thế nào, quan hệ với người khác ra sao và bị điều kiện xã hội chi phối như thế nào.</em>
            </p>
          </div>
        </motion.section>

        {/* 1.2 Natural-Social */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            1.2 Con người là thực thể tự nhiên – xã hội
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#6B7280", marginBottom: 36, lineHeight: 1.7 }}>
            Theo triết học Mác – Lênin, con người không phải thực thể trừu tượng, cô lập. Con người là sinh thể tự nhiên, đồng thời là thực thể xã hội — hai mặt thống nhất trong đời sống.
          </p>

          <SectionIllustration
            src={naturalSocialIllustration}
            alt="Minh họa con người ở trung tâm giữa thế giới tự nhiên và đời sống xã hội"
            label="Con người là sự thống nhất giữa mặt tự nhiên và mặt xã hội"
            accentColor={ACCENT}
            objectPosition="center 51%"
          />

          {/* Two columns */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* Natural side */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                padding: "32px 28px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                borderBottom: "4px solid #6B4B35",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: "1.5rem" }}>🌿</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: "#6B4B35" }}>Mặt Tự Nhiên</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Có cơ thể sinh học, nhu cầu ăn, mặc, ở, nghỉ ngơi, sinh sản và sức khỏe.",
                  "Chịu tác động của quy luật tự nhiên như tuổi tác, bệnh tật và môi trường sống.",
                  "Nếu tách khỏi điều kiện tự nhiên, con người không thể tồn tại vật chất.",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, marginBottom: 14, fontSize: "0.92rem", color: "#4A4A5A", lineHeight: 1.65 }}>
                    <span style={{ color: "#6B4B35", marginTop: 2, flexShrink: 0 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social side */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                padding: "32px 28px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                borderBottom: "4px solid #2C5F8A",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: "1.5rem" }}>🤝</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: "#2C5F8A" }}>Mặt Xã Hội</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Chỉ trở thành con người đúng nghĩa qua lao động, ngôn ngữ, giáo dục, văn hóa, gia đình và cộng đồng.",
                  "Biết cải biến tự nhiên bằng lao động, tạo ra công cụ, sản phẩm, tri thức và quan hệ xã hội.",
                  "Nếu tách khỏi xã hội, con người không thể hình thành nhân cách, ý thức và giá trị sống.",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, marginBottom: 14, fontSize: "0.92rem", color: "#4A4A5A", lineHeight: 1.65 }}>
                    <span style={{ color: "#2C5F8A", marginTop: 2, flexShrink: 0 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key insight */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              marginTop: 28,
              padding: "28px 36px",
              background: "linear-gradient(135deg, #1C2533, #2C3E50)",
              borderRadius: 12,
              textAlign: "center",
            }}
          >
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontStyle: "italic", color: "#F0EBE3", lineHeight: 1.7 }}>
              "Con người không chỉ thích nghi với tự nhiên như các loài sinh vật khác, mà còn biết lao động để cải biến tự nhiên và qua đó cải biến chính bản thân mình."
            </p>
          </motion.div>
        </motion.section>

        {/* 1.3 Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 40 }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
              fontWeight: 700,
              color: "#1C2533",
              marginBottom: 24,
            }}
          >
            1.3 Tổng kết Phần 1
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { icon: "❌", title: "Không nên", text: "Hiểu con người chỉ bằng bản năng sinh học hoặc linh hồn trừu tượng." },
              { icon: "✅", title: "Đúng đắn", text: "Con người là sự thống nhất giữa mặt tự nhiên và mặt xã hội." },
              { icon: "💡", title: "Nền tảng", text: "Lao động và quan hệ xã hội làm con người phát triển thành chủ thể có ý thức và nhân cách." },
              { icon: "🔗", title: "Liên hệ", text: "Nhu cầu được công nhận là nhu cầu xã hội; nếu lệ thuộc hình ảnh ảo sẽ dẫn tới tha hóa." },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 10,
                  padding: "22px 20px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 8,
                }}
              >
                <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                <strong style={{ fontSize: "0.95rem", color: "#1C2533" }}>{item.title}</strong>
                <p style={{ fontSize: "0.88rem", color: "#5A5A6A", lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <SectionNav current="section1" onNavigate={onNavigate} accentColor={ACCENT} />
    </div>
  );
}
