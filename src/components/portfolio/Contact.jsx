import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser"; // <-- EmailJS package import kiya
import { SectionHeading } from "./SectionHeading";
import { Dots } from "./Dots";
import globe from "@/assets/globe.png";

function Contact() {
  const formRef = useRef(); // <-- Form ka reference handle karne ke liye
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // Input states ko handle karne ke liye state
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_xi6mbel",         // 1. Aapki Service ID (Pehle se set hai)
        "template_kk5dvz4",        // 2. YAHAN APNI NAYI TEMPLATE ID LAGEIN 
        formRef.current,
        "eALVjCpJEC6qkd_5Z"          // 3. YAHAN APNI ACCOUNT KI PUBLIC KEY LAGEIN
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          // Form fields ko reset karne ke liye
          setFormData({ user_name: "", user_email: "", message: "" });
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return <section id="contact" className="relative overflow-hidden py-16">
      <Dots count={6} />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,oklch(0.78_0.14_80/0.1),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:pl-24">
        <SectionHeading eyebrow="GET IN TOUCH" title="Let's Build Together" />

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSendEmail}
            className="space-y-4 rounded-3xl border border-gold/25 bg-card/60 p-5 sm:p-6 backdrop-blur-xl shadow-gold"
          >
            {[
              { label: "Your Name", type: "text", ph: "Your Name", name: "user_name", value: formData.user_name },
              { label: "Your Email", type: "email", ph: "Hello@example.com", name: "user_email", value: formData.user_email }
            ].map((f) => <div key={f.label}>
                <label className="mb-1.5 block text-xs tracking-widest text-[var(--gold-light)]/80">
                  {f.label.toUpperCase()}
                </label>
                <input
                  type={f.type}
                  name={f.name}
                  value={f.value}
                  onChange={handleChange}
                  required
                  placeholder={f.ph}
                  className="w-full rounded-xl border border-gold/20 bg-background/60 px-4 py-2.5 text-sm outline-none transition focus:border-[var(--gold)] focus:shadow-gold"
                />
              </div>)}
            <div>
              <label className="mb-1.5 block text-xs tracking-widest text-[var(--gold-light)]/80">
                YOUR MESSAGE
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-gold/20 bg-background/60 px-4 py-2.5 text-sm outline-none transition focus:border-[var(--gold)] focus:shadow-gold"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="cta-border group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-background shadow-gold transition hover:scale-[1.02] disabled:opacity-70"
            >
              {loading ? "Sending..." : sent ? "Message Sent ✦" : "Send Message"}
              <Send className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </motion.form>

          {
    /* Globe — bigger to match form */
  }
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto flex h-full w-full items-center justify-center min-h-[280px] sm:min-h-[360px] lg:min-h-[460px]"
          >
            <div className="relative aspect-square w-full max-w-[340px] sm:max-w-[440px] lg:h-[460px] lg:w-[460px] lg:max-w-none">
              {
    /* Orbits */
  }
              <div className="absolute inset-0 animate-spin-slow rounded-full border border-gold/30" />
              <div className="absolute inset-6 animate-spin-reverse rounded-full border border-gold/25 border-dashed" />
              <div className="absolute inset-14 animate-spin-slow rounded-full border border-gold/20" style={{ animationDuration: "20s" }} />

              {
    /* Orbit balls */
  }
              {[0, 72, 144, 216, 288].map((deg, i) => <div
                key={i}
                className="absolute left-1/2 top-1/2 h-full w-full animate-spin-slow"
                style={{ animationDuration: `${15 + i * 3}s`, transform: `rotate(${deg}deg)` }}
              >
                  <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1-2 rounded-full bg-[var(--gold)] glow-gold" />
                </div>)}

              <motion.img
                src={globe}
                alt="Earth globe"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, ease: "linear", repeat: Infinity }}
                className="absolute inset-10 h-[calc(100%-5rem)] w-[calc(100%-5rem)] object-contain drop-shadow-[0_0_50px_oklch(0.78_0.14_80/0.6)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}
export {
  Contact
};