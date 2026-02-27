"use client";

import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "On en discute",
    description:
      "Vous m'expliquez votre projet par email ou par chat. Je pose les bonnes questions et je vous envoie une proposition claire avec un prix fixe et un délai.",
  },
  {
    number: "02",
    title: "Je construis",
    description:
      "Je développe par itérations courtes. Vous recevez des démos régulières pour valider que tout correspond à vos attentes, sans mauvaise surprise.",
  },
  {
    number: "03",
    title: "Vous lancez",
    description:
      "Votre application est mise en ligne, testée et opérationnelle. Je vous explique comment l'utiliser et je reste disponible pour les ajustements.",
  },
];

export default function Process() {
  return (
    <section className="border-t border-border px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <p className="font-body text-xs font-light uppercase tracking-[0.2em] text-muted">
            Méthode
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 max-w-md font-heading text-[clamp(2rem,4vw,3.2rem)] font-light leading-tight text-charcoal">
            Comment ça marche
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-16 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.12}>
              <div className="relative">
                <span className="font-heading text-[4rem] font-light leading-none text-border">
                  {step.number}
                </span>
                <h3 className="mt-2 font-heading text-2xl font-normal text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-4 font-body text-sm font-light leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
