"use client";

import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <FadeIn>
              <p className="font-body text-xs font-light uppercase tracking-[0.2em] text-taupe-light">
                Contact
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-heading text-[clamp(2rem,4vw,3.2rem)] font-light leading-tight text-cream">
                Parlons de votre projet
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-md font-body text-base font-light leading-relaxed text-cream/60">
                Décrivez-moi votre idée en quelques lignes. Je vous réponds sous
                24 heures avec mes premières recommandations et une estimation
                budgétaire.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 space-y-4">
                <p className="font-body text-xs font-light uppercase tracking-[0.15em] text-cream/40">
                  Pas d&apos;appel téléphonique · Réponse personnalisée sous 24h
                </p>
                <p className="font-body text-xs font-light uppercase tracking-[0.15em] text-cream/40">
                  Vos informations restent confidentielles
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-body text-xs font-light uppercase tracking-[0.1em] text-cream/50">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border-b border-cream/20 bg-transparent pb-3 font-body text-sm font-light text-cream outline-none transition-colors focus:border-taupe"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-body text-xs font-light uppercase tracking-[0.1em] text-cream/50">
                    Votre email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border-b border-cream/20 bg-transparent pb-3 font-body text-sm font-light text-cream outline-none transition-colors focus:border-taupe"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-body text-xs font-light uppercase tracking-[0.1em] text-cream/50">
                  Type de projet
                </label>
                <select className="w-full appearance-none border-b border-cream/20 bg-transparent pb-3 font-body text-sm font-light text-cream outline-none transition-colors focus:border-taupe">
                  <option value="" className="text-charcoal">
                    Sélectionnez...
                  </option>
                  <option value="vitrine" className="text-charcoal">
                    Site vitrine
                  </option>
                  <option value="app" className="text-charcoal">
                    Application métier
                  </option>
                  <option value="saas" className="text-charcoal">
                    SaaS sur mesure
                  </option>
                  <option value="autre" className="text-charcoal">
                    Autre
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-body text-xs font-light uppercase tracking-[0.1em] text-cream/50">
                  Décrivez votre projet
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Expliquez-moi votre besoin, votre idée, ou le problème que vous cherchez à résoudre..."
                  className="w-full resize-none border-b border-cream/20 bg-transparent pb-3 font-body text-sm font-light text-cream outline-none transition-colors placeholder:text-cream/20 focus:border-taupe"
                />
              </div>

              <div>
                <label className="mb-2 block font-body text-xs font-light uppercase tracking-[0.1em] text-cream/50">
                  Budget approximatif
                </label>
                <select className="w-full appearance-none border-b border-cream/20 bg-transparent pb-3 font-body text-sm font-light text-cream outline-none transition-colors focus:border-taupe">
                  <option value="" className="text-charcoal">
                    Je ne sais pas encore
                  </option>
                  <option value="1000" className="text-charcoal">
                    Moins de 1 000 €
                  </option>
                  <option value="3000" className="text-charcoal">
                    1 000 — 3 000 €
                  </option>
                  <option value="10000" className="text-charcoal">
                    3 000 — 10 000 €
                  </option>
                  <option value="10000+" className="text-charcoal">
                    Plus de 10 000 €
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-4 w-full border border-cream bg-cream px-8 py-4 font-body text-xs font-medium uppercase tracking-[0.15em] text-charcoal transition-all duration-300 hover:bg-transparent hover:text-cream sm:w-auto sm:self-start"
              >
                Envoyer ma demande
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
