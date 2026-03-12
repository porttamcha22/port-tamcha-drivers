import { motion } from "framer-motion";
import { DollarSign, Heart, Route, Star, ArrowRight } from "lucide-react";

const perks = [
  { icon: DollarSign, title: "$1,000 Sign-Up Bonus", desc: "Get a $1,000 bonus when you join our team as a driver." },
  { icon: Star, title: "Competitive Pay", desc: "Top-tier compensation with consistent miles and weekly pay." },
  { icon: Route, title: "Great Routes", desc: "Well-planned routes with home time that respects your life." },
  { icon: Heart, title: "Benefits Package", desc: "Health insurance, paid time off, and retirement plans." },
];

const CareersSection = () => {
  return (
    <section id="careers" className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            We're Hiring
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Drive With <span className="text-primary">Port Tamcha</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            We're looking for experienced CDL-A drivers to join our growing team. Enjoy great pay, modern equipment, and a company that values you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-navy-light/50 border border-primary-foreground/10 rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm opacity-70">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="tel:3863127784"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Call to Apply: (386) 312-7784 <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
