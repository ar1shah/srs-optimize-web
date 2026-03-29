"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: React.ReactNode;
}

const testimonials: Testimonial[] = [
  {
    name: "Marcus Webber",
    role: "Founder of Webber Digital",
    avatar: "https://i.pravatar.cc/120?img=11",
    quote: (
      <>
        Before working with SRS, our biggest product launch capped at $1.4M.
        After installing their systems,{" "}
        <strong>
          we executed everything we built inside — and just closed a
          record-breaking $3.2M launch.
        </strong>
      </>
    ),
  },
  {
    name: "Rachel Kim",
    role: "Co-Founder of Lumen Agency",
    avatar: "https://i.pravatar.cc/120?img=5",
    quote: (
      <>
        SRS and their team offer unparalleled transparency, sharing invaluable
        insights into delegation and backend operations.{" "}
        <strong>
          Their process is a game-changer for anyone serious about growth in
          this space.
        </strong>
      </>
    ),
  },
  {
    name: "Tyler Okafor",
    role: "Founder of Streamline Coaching",
    avatar: "https://i.pravatar.cc/120?img=12",
    quote: (
      <>
        SRS helped me reframe my entire approach to operations, inspiring me to
        think bigger beyond just coaching and focus on building my empire.
      </>
    ),
  },
  {
    name: "Sophia Reinhart",
    role: "Founder of Amplifi Media",
    avatar: "https://i.pravatar.cc/120?img=9",
    quote: (
      <>
        SRS and their team helped me establish a solid foundation for my
        business,{" "}
        <strong>
          enabling me to surpass $70,000 in daily revenue three times in 2025.
        </strong>
      </>
    ),
  },
];

export default function ClientTestimonials() {
  return (
    <section id="results" className="bg-black py-20 sm:py-28">
      <Container>
        <motion.h2
          className="mb-14 text-center font-serif text-3xl italic leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Are Saying
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-2xl bg-surface-light p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <div className="mb-5 flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                  unoptimized
                />
                <div>
                  <p className="font-semibold text-accent">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted [&>strong]:font-semibold [&>strong]:text-accent">
                &ldquo;{t.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
