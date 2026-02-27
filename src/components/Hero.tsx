"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end px-6 pb-20 pt-32 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 font-body text-xs font-light uppercase tracking-[0.2em] text-muted"
        >
          Développement web sur mesure — Liège, Belgique
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl font-heading text-[clamp(2.8rem,7vw,6rem)] font-light leading-[1.1] tracking-tight text-charcoal"
        >
          Votre application web,{" "}
          <span className="italic text-taupe">livrée en semaines.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 max-w-xl font-body text-base font-light leading-relaxed text-muted"
        >
          Vous avez une idée, un besoin métier, un projet digital ? Je le
          construis de A à Z, plus vite et moins cher qu&apos;une agence. Un seul
          interlocuteur, qualité professionnelle.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="border border-charcoal bg-charcoal px-8 py-3.5 font-body text-xs font-medium uppercase tracking-[0.15em] text-cream transition-all duration-300 hover:bg-transparent hover:text-charcoal"
          >
            Discutons de votre projet
          </a>
          <a
            href="#portfolio"
            className="link-underline font-body text-xs font-light uppercase tracking-[0.15em] text-muted transition-colors hover:text-charcoal"
          >
            Voir une réalisation
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 font-body text-[11px] font-light uppercase tracking-[0.15em] text-muted/60"
        >
          Réponse sous 24h — Sans engagement — Pas d&apos;appel téléphonique
        </motion.p>
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-0 left-6 right-6 h-px origin-left bg-border lg:left-8 lg:right-8"
      />
    </section>
  );
}
