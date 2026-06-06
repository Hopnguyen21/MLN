import { motion } from "motion/react";
import { BookOpen, Users, Zap, Smartphone, ArrowRight, ChevronDown } from "lucide-react";

type Page = "home" | "section1" | "section2" | "section3" | "section4";

interface Props {
  onNavigate: (page: Page) => void;
}

const cards = [
  {
    id: "section1" as Page,
    num: "01",
    icon: BookOpen,
    color: "#8B1A35",
    bg: "#FDF5F7",
    title: "Cơ Sở Lý Luận",
    subtitle: "Con người trong triết học Mác – Lênin",
    desc: "Từ góc nhìn tôn giáo đến thực thể tự nhiên – xã hội. Con người hiện thực sống, lao động và tồn tại trong điều kiện lịch sử cụ thể.",
  },
  {
    id: "section2" as Page,
    num: "02",
    icon: Users,
    color: "#2C5F8A",
    bg: "#F0F6FC",
    title: "Bản Chất Con Người",
    subtitle: "Tổng hòa các quan hệ xã hội",
    desc: "Nhân cách, thói quen, ước mơ và cách ứng xử đều được hình thành qua gia đình, nhà trường, cộng đồng và các quan hệ xã hội cụ thể.",
  },
  {
    id: "section3" as Page,
    num: "03",
    icon: Zap,
    color: "#6B4B35",
    bg: "#FBF6F2",
    title: "Tha Hóa & Giải Phóng",
    subtitle: "Hiện tượng tha hóa con người",
    desc: "Khi sản phẩm, quan hệ hoặc hình ảnh do con người tạo ra quay lại chi phối con người — và con đường giải phóng theo Mác – Lênin.",
  },
  {
    id: "section4" as Page,
    num: "04",
    icon: Smartphone,
    color: "#4A3878",
    bg: "#F5F2FB",
    title: "Mạng Xã Hội & Cái Tôi",
    subtitle: '"Cái tôi trình diễn" trong thời đại số',
    desc: "Phân tích tình huống M: khi hình ảnh hoàn hảo trên mạng trở thành chiếc mặt nạ. Đánh giá hai quan điểm và đề xuất giải pháp cân bằng.",
  },
];

export function LandingPage({ onNavigate }: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F7F3EE",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #1C2533 0%, #2C3E50 50%, #3D2B1F 100%)",
        }}
      >
        {/* Background texture overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("https://images.unsplash.com/photo-1620662831351-9f68f76d0b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
          }}
        />

        {/* Decorative overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(28,37,51,0.85) 0%, rgba(28,37,51,0.7) 60%, rgba(28,37,51,0.95) 100%)",
          }}
        />

        {/* Decorative line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            background: "linear-gradient(to bottom, #8B1A35, #B8956A, #8B1A35)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1100,
            margin: "0 auto",
            padding: "80px 40px 60px",
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 28,
              }}
            >
              <div style={{ height: 1, width: 48, backgroundColor: "#B8956A" }} />
              <span
                style={{
                  color: "#B8956A",
                  fontSize: 13,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                Triết học Mác – Lênin · Nghiên cứu học thuật
              </span>
            </div>

            {/* Main title */}
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#F7F3EE",
                marginBottom: 20,
                maxWidth: 820,
              }}
            >
              Vấn Đề Con Người
              <br />
              <span style={{ color: "#B8956A" }}>Trong Triết Học Mác – Lênin</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontStyle: "italic",
                color: "#C8C0B0",
                marginBottom: 32,
              }}
            >
              Liên hệ: Mạng xã hội và "cái tôi trình diễn"
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                color: "#A0A8B0",
                lineHeight: 1.75,
                maxWidth: 640,
                marginBottom: 48,
              }}
            >
              Muốn hiểu con người, phải đặt con người trong đời sống hiện thực — trong lao động, trong quan hệ xã hội và trong điều kiện lịch sử cụ thể. Từ bản chất con người đến hiện tượng tha hóa trong thời đại mạng xã hội.
            </p>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate("section1")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                backgroundColor: "#8B1A35",
                color: "#F7F3EE",
                border: "none",
                borderRadius: 4,
                padding: "14px 32px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: "0.04em",
              }}
            >
              Bắt Đầu Khám Phá
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            color: "#B8956A",
            zIndex: 1,
          }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* Cards Section */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 32px 100px",
        }}
      >
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <p
            style={{
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#8B1A35",
              marginBottom: 12,
              fontWeight: 500,
            }}
          >
            Nội dung chính
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#1C2533",
              lineHeight: 1.25,
            }}
          >
            Bốn Nội Dung Trọng Tâm
          </h2>
          <div
            style={{
              height: 3,
              width: 60,
              background: "linear-gradient(to right, #8B1A35, #B8956A)",
              margin: "20px auto 0",
              borderRadius: 2,
            }}
          />
        </motion.div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 28,
          }}
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(0,0,0,0.12)" }}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 12,
                  padding: "36px 32px",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  transition: "box-shadow 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid #EDE8DF",
                }}
                onClick={() => onNavigate(card.id)}
              >
                {/* Top accent bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    backgroundColor: card.color,
                  }}
                />

                {/* Number */}
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 64,
                    fontWeight: 900,
                    color: "#F0EBE3",
                    lineHeight: 1,
                    position: "absolute",
                    top: 12,
                    right: 20,
                  }}
                >
                  {card.num}
                </span>

                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    backgroundColor: card.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  <Icon size={24} color={card.color} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#1C2533",
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </h3>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: card.color,
                    fontWeight: 500,
                    marginBottom: 16,
                    lineHeight: 1.4,
                  }}
                >
                  {card.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#5A5A6A",
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: 24,
                  }}
                >
                  {card.desc}
                </p>

                {/* CTA */}
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    backgroundColor: "transparent",
                    border: `2px solid ${card.color}`,
                    color: card.color,
                    borderRadius: 6,
                    padding: "10px 20px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    width: "fit-content",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = card.color;
                    (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = card.color;
                  }}
                >
                  Khám phá
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer Quote */}
      <footer
        style={{
          backgroundColor: "#1C2533",
          padding: "60px 40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            height: 1,
            width: 80,
            backgroundColor: "#8B1A35",
            margin: "0 auto 32px",
          }}
        />
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1rem, 2vw, 1.35rem)",
            fontStyle: "italic",
            color: "#C8C0B0",
            maxWidth: 720,
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          "Muốn hiểu con người, phải đặt con người trong đời sống hiện thực, trong lao động, trong quan hệ xã hội và trong điều kiện lịch sử cụ thể."
        </p>
        <p style={{ color: "#6B7280", fontSize: "0.85rem", marginTop: 20 }}>
          — C. Mác và Ph. Ăngghen
        </p>
      </footer>
    </div>
  );
}
