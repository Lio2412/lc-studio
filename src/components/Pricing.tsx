"use client";

import FadeIn from "./FadeIn";

const plans = [
  {
    name: "Site vitrine",
    price: "800 € — 2 000 €",
    delay: "1 à 2 semaines",
    includes: [
      "Design personnalisé & responsive",
      "Jusqu'à 5 pages",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Hébergement & domaine configurés",
      "30 jours de support",
    ],
  },
  {
    name: "Application métier",
    price: "2 500 € — 8 000 €",
    delay: "2 à 5 semaines",
    featured: true,
    includes: [
      "Analyse du besoin & maquettes",
      "Développement sur mesure",
      "Gestion utilisateurs & rôles",
      "Base de données sécurisée",
      "Interface d'administration",
      "Tests automatisés",
      "30 jours de support",
    ],
  },
  {
    name: "SaaS sur mesure",
    price: "5 000 € — 20 000 €+",
    delay: "4 à 10 semaines",
    includes: [
      "Architecture multi-tenant",
      "Authentification & gestion comptes",
      "Paiements & abonnements Stripe",
      "Dashboard d'administration",
      "Suite de tests complète",
      "Documentation technique",
      "60 jours de support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-border px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <p className="font-body text-xs font-light uppercase tracking-[0.2em] text-muted">
            Tarifs
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 max-w-md font-heading text-[clamp(2rem,4vw,3.2rem)] font-light leading-tight text-charcoal">
            Investissement transparent
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col p-8 lg:p-10 ${
                  plan.featured ? "bg-charcoal" : "border border-border bg-surface"
                }`}
              >
                <p
                  className={`font-body text-xs font-light uppercase tracking-[0.15em] ${
                    plan.featured ? "text-taupe-light" : "text-muted"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className={`mt-3 font-heading text-2xl font-normal ${
                    plan.featured ? "text-cream" : "text-charcoal"
                  }`}
                >
                  {plan.price}
                </p>
                <p
                  className={`mt-2 font-body text-xs font-light ${
                    plan.featured ? "text-cream/50" : "text-muted"
                  }`}
                >
                  Livraison : {plan.delay}
                </p>

                <div
                  className={`my-8 h-px ${
                    plan.featured ? "bg-cream/10" : "bg-border"
                  }`}
                />

                <ul className="flex flex-col gap-3">
                  {plan.includes.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 font-body text-sm font-light ${
                        plan.featured ? "text-cream/70" : "text-charcoal-light"
                      }`}
                    >
                      <span
                        className={`mt-1.5 block h-px w-3 shrink-0 ${
                          plan.featured ? "bg-taupe" : "bg-taupe-light"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-auto block pt-10 text-center font-body text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                    plan.featured
                      ? "border border-cream bg-cream px-6 py-3.5 text-charcoal hover:bg-transparent hover:text-cream"
                      : "border border-charcoal bg-charcoal px-6 py-3.5 text-cream hover:bg-transparent hover:text-charcoal"
                  }`}
                >
                  Demander un devis
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
