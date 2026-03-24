"use client";

import { motion } from "framer-motion";
import { Eye, Target, Lightbulb } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Our Vision",
    colorClass: "text-primary-red",
    iconBg: "bg-primary-red/10",
    content:
      "To be India's most trusted and impactful brain development organization — unlocking the genius within every child across the globe through structured, scientifically proven mental arithmetic and cognitive training programs.",
    points: [
      "Reach every district in India with quality abacus education",
      "Build a global community of young mental champions",
      "Redefine how the world thinks about children's education",
    ],
  },
  {
    icon: Target,
    title: "Our Mission",
    colorClass: "text-sky-blue",
    iconBg: "bg-sky-blue/10",
    content:
      "To provide affordable, high-quality brain development programs to children aged 5–18, equipping them with life-long mental skills, academic confidence, and a love for learning through our franchise and school project network.",
    points: [
      "Develop scientifically proven curricula for mental arithmetic",
      "Train and certify quality educators through our trainer program",
      "Expand our franchise network to every city in India",
    ],
  },
  {
    icon: Lightbulb,
    title: "Our Objectives",
    colorClass: "text-orange",
    iconBg: "bg-orange/10",
    content:
      "I-Genius is driven by clear, measurable objectives that guide our growth, quality, and impact every year. We are committed to continuous improvement and innovation in children's education.",
    points: [
      "Enrol 5 lakh+ students by 2030 across India",
      "Establish 1,000+ franchise centres pan-India",
      "Partner with 500+ schools through School Project",
    ],
  },
];

export default function VisionMission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary-red">
            Our Foundation
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-dark-green">
            Vision, Mission &amp; Objectives
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border-2 border-gold-tan hover:border-primary-red hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`icon-wrapper mb-5 ${card.iconBg}`}>
                  <Icon size={22} className={card.colorClass} />
                </div>
                <h3 className="font-headline text-xl font-bold text-dark-green mb-3">
                  {card.title}
                </h3>
                <p className="text-dark-green/70 text-sm leading-relaxed mb-5">
                  {card.content}
                </p>
                <ul className="space-y-2">
                  {card.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-dark-green/80">
                      <span className={`mt-0.5 flex-shrink-0 font-bold ${card.colorClass}`}>›</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
