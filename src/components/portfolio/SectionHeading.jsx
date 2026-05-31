import { motion } from "framer-motion";
function SectionHeading({
  eyebrow,
  title,
  children
}) {
  return <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="mb-8 max-w-3xl"
  >
      <p className="mb-3 text-xs tracking-[0.4em] text-[var(--gold-light)]/80">{eyebrow}</p>
      <h2 className="font-display text-4xl md:text-6xl">
        {title.split(" ").map(
    (w, i) => i === title.split(" ").length - 1 ? <span key={i} className="text-gold-gradient italic"> {w}.</span> : <span key={i}>{i === 0 ? "" : " "}{w}</span>
  )}
      </h2>
      {children && <p className="mt-5 text-foreground/70 leading-relaxed">{children}</p>}
    </motion.div>;
}
export {
  SectionHeading
};
