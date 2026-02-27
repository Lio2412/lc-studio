"use client";

import FadeIn from "./FadeIn";

const advantages = [
  {
    title: "Livraison rapide",
    description:
      "Grâce à un workflow assisté par intelligence artificielle, je livre en semaines ce qu'une agence met des mois à produire.",
  },
  {
    title: "Un seul interlocuteur",
    description:
      "Pas de commercial, pas de chef de projet. Vous parlez directement à celui qui code. Les décisions se prennent vite.",
  },
  {
    title: "Prix fixe",
    description:
      "Chaque projet fait l'objet d'un devis détaillé avant le début du travail. Vous savez exactement ce que vous payez.",
  },
  {
    title: "Code testé",
    description:
      "Chaque fonctionnalité est couverte par des tests automatisés. Moins de bugs, moins de maintenance, plus de tranquillité.",
  },
  {
    title: "Vous êtes propriétaire",
    description:
      "Le code, les accès, les données : tout vous appartient. Aucune dépendance, aucun verrouillage.",
  },
  {
    title: "Communication asynchrone",
    description:
      "Tout par email et chat. Pas de créneaux à caler. Vous m'écrivez quand ça vous arrange, je réponds sous 24h.",
  },
];

export default function WhyUs() {
  return (
    <section className="border-t border-border px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <p className="font-body text-xs font-light uppercase tracking-[0.2em] text-muted">
            Pourquoi LC Studio
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 max-w-lg font-heading text-[clamp(2rem,4vw,3.2rem)] font-light leading-tight text-charcoal">
            Ce qui fait la différence
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {advantages.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <div className="border border-border bg-surface p-8 lg:p-10">
                <h3 className="font-heading text-xl font-normal text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm font-light leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
