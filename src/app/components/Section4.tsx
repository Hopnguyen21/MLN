import { motion } from "motion/react";
import { SectionNav } from "./SectionNav";

type Page = "home" | "section1" | "section2" | "section3" | "section4";

interface Props {
  onNavigate: (page: Page) => void;
}

const ACCENT = "#4A3878";

const mAnalysis = [
  {
    theory: "Con người là thực thể tự nhiên – xã hội",
    apply: "M có nhu cầu tâm lý – xã hội rất thật: được yêu quý, được công nhận, được thuộc về một cộng đồng. Nhưng nếu nhu cầu ấy bị dẫn dắt bởi lượt thích và hình ảnh ảo, M dễ rơi vào căng thẳng, so sánh và mất cân bằng đời sống.",
  },
  {
    theory: "Bản chất con người là tổng hòa các quan hệ xã hội",
    apply: "Cái tôi của M không tự nhiên xuất hiện. Nó được hình thành trong quan hệ với bạn bè, người theo dõi, chuẩn mực cái đẹp, áp lực thành công, thuật toán và văn hóa tiêu dùng trên mạng.",
  },
  {
    theory: "Tha hóa con người",
    apply: "Hình ảnh do M tạo ra ban đầu nhằm thể hiện bản thân, nhưng sau đó quay lại điều khiển M. M phải sống theo hình ảnh ấy, sợ đánh mất nó, thậm chí đánh giá bản thân bằng phản ứng của người khác.",
  },
];

const perspectives = [
  {
    title: "Quan điểm 1",
    thesis: "M đang sống giả tạo; mạng xã hội chỉ làm con người tha hóa.",
    pros: "Nhìn thấy mặt tiêu cực: áp lực hình ảnh, sống vì lượt thích, xa rời quan hệ thật, dễ đánh mất bản thân.",
    cons: "Quá một chiều nếu phủ nhận hoàn toàn vai trò tích cực của mạng xã hội như kết nối, học tập, sáng tạo, xây dựng thương hiệu cá nhân.",
    verdict: "Đúng một phần, nhưng chưa đủ. Cần phân biệt thể hiện bản thân lành mạnh với lệ thuộc vào hình ảnh ảo.",
    color: "#C0392B",
    bg: "#FDF2F1",
  },
  {
    title: "Quan điểm 2",
    thesis: "M có quyền xây dựng hình ảnh cá nhân; miễn nổi bật và được công nhận là thành công.",
    pros: "Tôn trọng quyền cá nhân, thấy được nhu cầu giao tiếp, sáng tạo và phát triển bản thân trong xã hội hiện đại.",
    cons: 'Dễ tuyệt đối hóa sự công nhận bên ngoài, biến con người thành "sản phẩm truyền thông", đo giá trị bản thân bằng tương tác.',
    verdict: "Đúng một phần, nhưng nguy hiểm nếu coi lượt thích và hình ảnh là thước đo chính của giá trị con người.",
    color: "#2980B9",
    bg: "#EBF5FB",
  },
];

const solutions = [
  {
    group: "Đối với M / Cá nhân",
    icon: "🧘",
    items: [
      "Xác định mục đích dùng mạng xã hội",
      "Giới hạn thời gian sử dụng hợp lý",
      "Không đánh giá bản thân bằng lượt thích",
      "Ưu tiên các quan hệ thật ngoài đời",
      "Dám thể hiện cả mặt chưa hoàn hảo một cách phù hợp",
    ],
    color: ACCENT,
    bg: "#F5F2FB",
  },
  {
    group: "Bạn bè & Gia đình",
    icon: "👨‍👩‍👧",
    items: [
      "Không cổ vũ việc so sánh, phán xét ngoại hình",
      "Không so sánh thành tích và đời sống cá nhân",
      "Tạo môi trường lắng nghe và hỗ trợ",
    ],
    color: "#27AE60",
    bg: "#F1FDF5",
  },
  {
    group: "Nhà trường",
    icon: "🏫",
    items: [
      "Giáo dục năng lực số và tư duy phản biện",
      "Giáo dục về sức khỏe tinh thần",
      "Kỹ năng nhận diện áp lực truyền thông và văn hóa tiêu dùng",
    ],
    color: "#E67E22",
    bg: "#FDF6EE",
  },
  {
    group: "Nền tảng mạng xã hội",
    icon: "🌐",
    items: [
      "Minh bạch hơn về cơ chế thuật toán",
      "Giảm thiểu nội dung độc hại",
      "Khuyến khích nội dung tích cực, lành mạnh",
      "Bảo vệ người dùng trẻ trước áp lực so sánh",
    ],
    color: "#2C5F8A",
    bg: "#EFF6FC",
  },
];

export function Section4({ onNavigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F7F3EE", fontFamily: "'Inter', sans-serif" }}>
      <SectionNav current="section4" onNavigate={onNavigate} accentColor={ACCENT} />

      {/* Hero */}
      <section
        style={{
          paddingTop: 64,
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #1A1528 0%, #2A1F45 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26,21,40,0.93) 55%, rgba(26,21,40,0.4) 100%)" }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, backgroundColor: ACCENT }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "80px 40px" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 72, fontWeight: 900, color: `rgba(74,56,120,0.3)`, lineHeight: 1 }}>04</span>
              <div style={{ height: 1, width: 40, backgroundColor: "#B8956A" }} />
              <span style={{ color: "#B8956A", fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase" as const, fontWeight: 500 }}>Mạng xã hội & Cái tôi</span>
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                color: "#F7F3EE",
                lineHeight: 1.2,
                maxWidth: 720,
                marginBottom: 20,
              }}
            >
              Mạng Xã Hội &
              <span style={{ color: "#A090D0" }}> "Cái Tôi Trình Diễn"</span>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#A0A8B0", lineHeight: 1.75, maxWidth: 560 }}>
              Phân tích tình huống M — khi hình ảnh hoàn hảo trên mạng trở thành chiếc mặt nạ. Đánh giá hai quan điểm và đề xuất giải pháp cân bằng.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 40px" }}>

        {/* 4.1 Concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: "#FFFFFF",
            borderLeft: `5px solid ${ACCENT}`,
            borderRadius: "0 12px 12px 0",
            padding: "28px 32px",
            marginBottom: 48,
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <p style={{ fontSize: "1.05rem", color: "#3A3A4A", lineHeight: 1.8 }}>
            <strong>"Cái tôi trình diễn"</strong> có thể hiểu là hình ảnh bản thân mà con người chủ động xây dựng và đưa ra trước người khác — qua ảnh, video, caption, story, lượt thích và xu hướng đang thịnh hành. Bản thân việc thể hiện cái tôi <em>không xấu</em>. Con người vốn là thực thể xã hội, có nhu cầu giao tiếp, được nhìn nhận và chia sẻ giá trị. <strong style={{ color: ACCENT }}>Vấn đề xuất hiện khi cái tôi trình diễn trở thành cái tôi duy nhất</strong> — khi con người đánh giá giá trị bản thân chủ yếu qua sự chú ý của người khác.
          </p>
        </motion.div>

        {/* 4.2 Tình huống M - split screen */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 48 }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
              fontWeight: 700,
              color: "#1C2533",
              marginBottom: 32,
            }}
          >
            4.2 Tình huống M
          </h2>

          {/* Split: online vs reality */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
            {/* Online side */}
            <div style={{ background: "linear-gradient(135deg, #1A1528, #2A1F45)", padding: "40px 32px", color: "#FFFFFF" }}>
              <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#A090D0", marginBottom: 16, fontWeight: 600 }}>M trên mạng xã hội</p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 12, marginBottom: 24 }}>
                {[
                  { label: "Hình ảnh", value: "Hoàn hảo, đẹp, sang chảnh" },
                  { label: "Cuộc sống", value: "Vui vẻ, thành công, đi chơi" },
                  { label: "Lượt thích", value: "Nhiều, liên tục tăng" },
                  { label: "Cảm giác ban đầu", value: "Tự tin hơn" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 8 }}>
                    <span style={{ fontSize: "0.88rem", color: "#9080B0" }}>{item.label}</span>
                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#E0D8F0" }}>{item.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {"❤️👍✨🌟💫".split("").map((e, i) => (
                  <span key={i} style={{ fontSize: "1.2rem" }}>{e}</span>
                ))}
              </div>
            </div>

            {/* Reality side */}
            <div style={{ background: "#F0EBE3", padding: "40px 32px" }}>
              <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#8B1A35", marginBottom: 16, fontWeight: 600 }}>M ngoài đời thực</p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 12, marginBottom: 24 }}>
                {[
                  { label: "Áp lực", value: "Phải duy trì hình ảnh mọi lúc" },
                  { label: "Sợ hãi", value: "Bị chê, ít tương tác" },
                  { label: "So sánh", value: "Liên tục với người khác" },
                  { label: "Quan hệ thật", value: "Xa rời, cô lập dần" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(0,0,0,0.08)", paddingBottom: 8 }}>
                    <span style={{ fontSize: "0.88rem", color: "#8A7060" }}>{item.label}</span>
                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#3A2A20" }}>{item.value}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "0.9rem", color: "#6B4B35", fontStyle: "italic", lineHeight: 1.6 }}>
                Mệt mỏi, căng thẳng, cô đơn sau những hình ảnh hoàn hảo.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Interactive Call-to-action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginBottom: 72,
            background: "linear-gradient(135deg, #FDF6EE 0%, #EFEBE4 100%)",
            borderRadius: 16,
            padding: "36px 40px",
            border: "1px solid rgba(74, 56, 120, 0.12)",
            boxShadow: "0 10px 30px rgba(74, 56, 120, 0.04)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>🎮</div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1528", marginBottom: 12 }}>
            Trải Nghiệm Hành Trình Của M & Câu Hỏi Ôn Tập
          </h3>
          <p style={{ fontSize: "0.95rem", color: "#5A5A6A", lineHeight: 1.65, maxWidth: 640, marginBottom: 24 }}>
            Để hiểu rõ hơn về các xung đột tâm lý, áp lực tương tác mà M đang trải qua, cũng như tham gia thử thách giải quyết các câu hỏi trắc nghiệm ôn tập tương tác sinh động, hãy truy cập nền tảng độc quyền của chúng tôi.
          </p>
          <motion.a
            href="https://philogame.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(74, 56, 120, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: ACCENT,
              color: "#FFFFFF",
              padding: "14px 28px",
              borderRadius: 30,
              fontSize: "0.95rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
          >
            Bắt đầu trải nghiệm ngay
            <span style={{ fontSize: "1.1rem" }}>→</span>
          </motion.a>
        </motion.section>

        {/* 4.3 Analysis using Marx theory */}
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
            4.3 Phân tích tình huống M qua lăng kính Mác – Lênin
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#6B7280", marginBottom: 32, lineHeight: 1.7 }}>Áp dụng ba luận điểm lý luận từ các phần trước vào phân tích cụ thể tình huống M.</p>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
            {mAnalysis.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                }}
              >
                <div style={{ backgroundColor: ACCENT, padding: "24px 20px", width: 8 }} />
                <div style={{ padding: "24px 28px" }}>
                  <p style={{ fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: ACCENT, fontWeight: 600, marginBottom: 8 }}>Luận điểm {i + 1}</p>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "#1C2533", marginBottom: 10 }}>
                    {item.theory}
                  </h4>
                  <p style={{ fontSize: "0.92rem", color: "#5A5A6A", lineHeight: 1.7 }}>{item.apply}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4.4 Two perspectives */}
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
            4.4 Đánh giá hai quan điểm
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#6B7280", marginBottom: 32, lineHeight: 1.7 }}>
            Cần đánh giá cả hai quan điểm theo hướng biện chứng — tránh cực đoan, tìm điểm hợp lý và hạn chế của mỗi phía.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {perspectives.map((p) => (
              <div
                key={p.title}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ backgroundColor: p.color, padding: "16px 24px" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "#FFFFFF" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.8)", marginTop: 4, fontStyle: "italic" }}>"{p.thesis}"</p>
                </div>
                <div style={{ padding: "24px 24px" }}>
                  <div style={{ marginBottom: 16 }}>
                    <p style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#27AE60", fontWeight: 700, marginBottom: 8 }}>✓ Điểm hợp lý</p>
                    <p style={{ fontSize: "0.9rem", color: "#4A4A5A", lineHeight: 1.65 }}>{p.pros}</p>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <p style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#C0392B", fontWeight: 700, marginBottom: 8 }}>✗ Hạn chế</p>
                    <p style={{ fontSize: "0.9rem", color: "#4A4A5A", lineHeight: 1.65 }}>{p.cons}</p>
                  </div>
                  <div style={{ backgroundColor: p.bg, borderRadius: 8, padding: "12px 16px", borderLeft: `3px solid ${p.color}` }}>
                    <p style={{ fontSize: "0.88rem", color: p.color, lineHeight: 1.65, fontWeight: 500 }}>⚖️ {p.verdict}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Balanced conclusion */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              marginTop: 28,
              padding: "28px 36px",
              background: "linear-gradient(135deg, #1A1528, #2A1F45)",
              borderRadius: 12,
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#A090D0", marginBottom: 12 }}>Kết luận cân bằng</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontStyle: "italic", color: "#F0EBE3", lineHeight: 1.75, maxWidth: 700, margin: "0 auto" }}>
              "Mạng xã hội không tự nó làm con người tha hóa. Sự tha hóa xuất hiện khi con người không còn làm chủ công cụ, mà để thuật toán, đám đông và hình ảnh ảo làm chủ mình."
            </p>
          </motion.div>
        </motion.section>

        {/* 4.5 Solutions */}
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
            4.5 Giải pháp đề xuất
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#6B7280", marginBottom: 32, lineHeight: 1.7 }}>
            Giải pháp không phải là phủ nhận mạng xã hội, mà là làm chủ nó — sử dụng như công cụ để phát triển bản thân và xây dựng quan hệ xã hội lành mạnh.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 12,
                  padding: "28px 24px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  borderTop: `4px solid ${sol.color}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                  <span style={{ fontSize: "1.4rem" }}>{sol.icon}</span>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", fontWeight: 700, color: "#1C2533" }}>{sol.group}</h4>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {sol.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: 8, marginBottom: 10, fontSize: "0.88rem", color: "#5A5A6A", lineHeight: 1.6 }}>
                      <span style={{ color: sol.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Final message */}
      <footer
        style={{
          backgroundColor: "#1C2533",
          padding: "64px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ height: 1, width: 80, backgroundColor: "#8B1A35", margin: "0 auto 32px" }} />
          <p style={{ fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#B8956A", marginBottom: 20, fontWeight: 500 }}>Kết luận chung</p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.05rem, 2vw, 1.4rem)",
              color: "#E8E0D0",
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            Triết học Mác – Lênin nhìn con người trong đời sống hiện thực, trong lao động và các quan hệ xã hội. "Cái tôi trình diễn" không phải lúc nào cũng xấu — con người có nhu cầu thể hiện và được công nhận. Tuy nhiên, nếu con người để lượt thích và áp lực đám đông quyết định giá trị bản thân, thì đó là biểu hiện của tha hóa.
          </p>
          <div style={{ height: 1, width: 80, backgroundColor: "#8B1A35", margin: "0 auto 24px" }} />
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              fontStyle: "italic",
              color: "#B8956A",
              lineHeight: 1.75,
            }}
          >
            "Muốn hiểu con người, phải đặt con người trong đời sống hiện thực, trong lao động, trong quan hệ xã hội và trong điều kiện lịch sử cụ thể."
          </p>
          <p style={{ color: "#6B7280", fontSize: "0.85rem", marginTop: 12 }}>— C. Mác và Ph. Ăngghen</p>
        </div>
      </footer>

      <SectionNav current="section4" onNavigate={onNavigate} accentColor={ACCENT} variant="pager" />
    </div>
  );
}