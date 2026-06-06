import { motion } from "motion/react";

interface SectionIllustrationProps {
  src: string;
  alt: string;
  label: string;
  accentColor: string;
  objectPosition?: string;
  tone?: "light" | "dark";
}

export function SectionIllustration({
  src,
  alt,
  label,
  accentColor,
  objectPosition = "center",
  tone = "light",
}: SectionIllustrationProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.985 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className={`section-illustration section-illustration--${tone}`}
      style={{ borderColor: `${accentColor}38` }}
    >
      <img src={src} alt={alt} loading="lazy" decoding="async" style={{ objectPosition }} />
      <div className="section-illustration__shade" aria-hidden="true" />
      <figcaption>{label}</figcaption>
    </motion.figure>
  );
}
