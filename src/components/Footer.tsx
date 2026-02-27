import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="font-heading text-2xl font-semibold tracking-wide text-charcoal">
                LC Studio
              </p>
              <p className="mt-2 font-body text-sm font-light text-muted">
                Développement web sur mesure — Liège, Belgique
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 md:items-end">
              <a
                href="mailto:lionel.callerame@gmail.com"
                className="link-underline font-body text-sm font-light text-charcoal-light"
              >
                lionel.callerame@gmail.com
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="font-body text-xs font-light text-muted">
            © {new Date().getFullYear()} LC Studio — Lionel Callerame. Tous droits
            réservés.
          </p>
          <p className="font-body text-xs font-light text-muted/50">
            Plus vite, mieux, pour moins cher.
          </p>
        </div>
      </div>
    </footer>
  );
}
