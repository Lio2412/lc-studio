"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const questions = [
  {
    q: "Comment se déroule un projet ?",
    a: "Tout commence par un échange par email ou chat. Vous m'expliquez votre besoin, je pose les questions nécessaires et je vous envoie une proposition détaillée avec un prix fixe et un planning. Si on est d'accord, je commence le développement. Vous recevez des démos régulières pendant la construction. À la livraison, je déploie le tout en ligne.",
  },
  {
    q: "Comment livrez-vous aussi rapidement ?",
    a: "J'utilise un processus de développement assisté par intelligence artificielle qui me permet d'écrire, tester et déployer du code beaucoup plus vite. Le code produit est systématiquement vérifié et testé. L'IA accélère les tâches répétitives, je me concentre sur l'architecture et la logique métier.",
  },
  {
    q: "Est-ce que je suis propriétaire du code ?",
    a: "Oui, à 100 %. À la livraison, vous recevez l'intégralité du code source, les accès aux serveurs et à la base de données. Tout vous appartient, sans restriction. Vous pouvez faire évoluer le projet avec un autre développeur si vous le souhaitez.",
  },
  {
    q: "Que se passe-t-il après la livraison ?",
    a: "Les 30 premiers jours (60 pour les SaaS) sont inclus : je corrige tout bug éventuel et je fais les petits ajustements nécessaires. Au-delà, je propose des forfaits de maintenance mensuels. Rien n'est obligatoire.",
  },
  {
    q: "Pas d'appels téléphoniques ?",
    a: "Par email et par messagerie instantanée. C'est plus efficace qu'un appel : tout est écrit, rien ne se perd, et vous pouvez me contacter quand ça vous arrange. Je réponds sous 24 heures, souvent beaucoup plus vite.",
  },
  {
    q: "Quelles technologies utilisez-vous ?",
    a: "Next.js (React) pour le frontend, TypeScript pour la robustesse du code, PostgreSQL pour les bases de données, Stripe pour les paiements, et Vercel pour l'hébergement. Ce sont les mêmes outils utilisés par Netflix, Airbnb ou Notion.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="pr-4 font-heading text-lg font-normal text-charcoal md:text-xl">
          {q}
        </span>
        <span
          className={`shrink-0 font-body text-xl font-light text-muted transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 font-body text-sm font-light leading-relaxed text-muted">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-border px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <FadeIn>
              <p className="font-body text-xs font-light uppercase tracking-[0.2em] text-muted">
                FAQ
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-heading text-[clamp(2rem,4vw,3.2rem)] font-light leading-tight text-charcoal">
                Questions fréquentes
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <div className="border-t border-border">
              {questions.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
