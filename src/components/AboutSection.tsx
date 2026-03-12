import { motion } from "framer-motion";
import { Truck, Shield, Clock, MapPin } from "lucide-react";
import fleetImg from "@/assets/fleet.jpg";

const features = [
  { icon: Truck, title: "Semi Truck Fleet", desc: "Modern, well-maintained fleet of semi trucks ready for any load." },
  { icon: Shield, title: "Safe & Insured", desc: "Fully insured operations with a stellar safety record." },
  { icon: Clock, title: "On-Time Delivery", desc: "Reliable schedules and real-time tracking for every shipment." },
  { icon: MapPin, title: "Nationwide Coverage", desc: "Coast-to-coast routes across all 48 contiguous states." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Your Trusted Freight Partner in <span className="text-primary">Miami</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Based in the heart of Miami, Port Tamcha specializes in long-haul and regional semi-truck freight transportation. With years of experience and a commitment to excellence, we move your cargo safely and efficiently.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img src={fleetImg} alt="Port Tamcha fleet of trucks" className="rounded-2xl shadow-2xl w-full" />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-heading font-bold">24/7</p>
              <p className="text-sm opacity-90">Dispatch Available</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
