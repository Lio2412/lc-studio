"use client";

import FadeIn from "./FadeIn";

const stats = [
  { value: "937", label: "Tests automatisés" },
  { value: "6", label: "Formats de tournoi" },
  { value: "30+", label: "Modèles de données" },
];

const features = [
  "Brackets en temps réel",
  "Paiements Stripe Connect",
  "Check-in par QR code",
  "Architecture multi-tenant",
  "Système de permissions RBAC",
  "6 formats de compétition",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-charcoal px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <p className="font-body text-xs font-light uppercase tracking-[0.2em] text-taupe-light">
            Réalisation
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 max-w-lg font-heading text-[clamp(2rem,4vw,3.2rem)] font-light leading-tight text-cream">
            Clutch — Plateforme SaaS
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn delay={0.15}>
            <div>
              <p className="font-body text-base font-light leading-relaxed text-cream/70">
                Clutch est une plateforme SaaS complète de gestion de tournois
                esports que j&apos;ai conçue et développée intégralement. Elle permet
                à n&apos;importe quel organisateur de créer des compétitions en
                ligne en quelques clics.
              </p>
              <p className="mt-6 font-body text-base font-light leading-relaxed text-cream/70">
                Ce projet démontre ma capacité à livrer un produit complexe, de
                la première ligne de code jusqu&apos;à la mise en production, en
                maintenant un niveau de qualité professionnel à chaque étape.
              </p>

              {/* Tech stack */}
              <p className="mt-10 font-body text-xs font-light uppercase tracking-[0.15em] text-taupe-light">
                Stack technique
              </p>
              <p className="mt-3 font-body text-sm font-light text-cream/50">
                Next.js · React · TypeScript · Prisma · Supabase · Stripe Connect ·
                Tailwind CSS · Vercel
              </p>
            </div>
          </FadeIn>

          <div>
            {/* Stats */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t border-cream/10 pt-4">
                    <p className="font-heading text-3xl font-light text-taupe">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-body text-xs font-light text-cream/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Features */}
            <FadeIn delay={0.3}>
              <div className="mt-10 grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 font-body text-sm font-light text-cream/70"
                  >
                    <span className="block h-px w-3 shrink-0 bg-taupe" />
                    {feature}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
