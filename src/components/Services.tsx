"use client";

import FadeIn from "./FadeIn";

const services = [
  {
    number: "01",
    title: "Site vitrine",
    description:
      "Un site qui donne envie de vous contacter. Design sur mesure, rapide, optimisé pour Google et parfaitement lisible sur mobile.",
    price: "À partir de 800 €",
    includes: [
      "Design adapté à votre identité",
      "Jusqu'à 5 pages",
      "Responsive mobile & tablette",
      "Optimisation SEO",
      "Formulaire de contact",
    ],
  },
  {
    number: "02",
    title: "Application métier",
    description:
      "Vous gérez encore des fichiers Excel ? Je transforme ça en une application web sur mesure, accessible depuis n'importe quel navigateur.",
    price: "À partir de 2 500 €",
    includes: [
      "Analyse du besoin & maquettes",
      "Interface d'administration",
      "Gestion des utilisateurs & droits",
      "Base de données sécurisée",
      "Déploiement inclus",
    ],
  },
  {
    number: "03",
    title: "SaaS sur mesure",
    description:
      "Vous avez une idée de produit logiciel ? Je conçois votre SaaS complet : inscription, abonnements, paiements, tableau de bord.",
    price: "À partir de 5 000 €",
    includes: [
      "Architecture multi-utilisateurs",
      "Authentification sécurisée",
      "Paiements & abonnements Stripe",
      "Dashboard d'administration",
      "Tests automatisés",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-border px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <p className="font-body text-xs font-light uppercase tracking-[0.2em] text-muted">
            Services
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 max-w-lg font-heading text-[clamp(2rem,4vw,3.2rem)] font-light leading-tight text-charcoal">
            Ce que je construis pour vous
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.1}>
              <div className="group flex h-full flex-col border border-border bg-surface p-8 transition-colors duration-500 hover:bg-cream lg:p-10">
                <span className="font-body text-xs font-light text-taupe">
                  {service.number}
                </span>
                <h3 className="mt-4 font-heading text-[1.75rem] font-normal text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-4 font-body text-sm font-light leading-relaxed text-muted">
                  {service.description}
                </p>

                <ul className="mt-8 flex flex-col gap-2.5">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-sm font-light text-charcoal-light"
                    >
                      <span className="mt-1.5 block h-px w-3 shrink-0 bg-taupe" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-8 font-body text-sm font-medium tracking-wide text-charcoal">
                  {service.price}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
