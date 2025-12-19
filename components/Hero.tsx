import Image from "next/image";

const ctaLinks = [
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "GitHub",
    href: "https://github.com/your-handle",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-handle",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-[140px] dark:bg-indigo-400/20" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[160px] dark:bg-cyan-400/10" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 pb-16 pt-28 sm:px-10">
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              Web3 Portfolio
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-300/80">
                Hi, I&apos;m
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Bilyana Chiang
              </h1>
              <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300 sm:text-xl">
                I design and build thoughtful digital experiences with a focus
                on modern interfaces, blockchain products, and developer
                tooling.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {ctaLinks.map((link) => (
                <a
                  key={link.label}
                  className="group inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_0_0_1px_rgba(15,23,42,0.04)] transition hover:border-slate-900/20 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] dark:hover:border-white/20 dark:hover:bg-white/10"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available for select collaborations
              </span>
              <span>Based in the Bay Area</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full border border-slate-900/10 bg-white/60 blur-3xl dark:border-white/10 dark:bg-white/5" />
            <div className="relative mx-auto w-full max-w-sm rounded-3xl border border-slate-900/10 bg-white/70 p-8 shadow-[0_25px_120px_-60px_rgba(15,23,42,0.25)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-[0_25px_120px_-60px_rgba(15,23,42,0.6)]">
              <div className="absolute right-6 top-6 h-20 w-20 rounded-full border border-slate-900/10 bg-white/60 dark:border-white/10 dark:bg-white/10" />
              <div className="relative flex flex-col items-start gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl border border-slate-900/10 bg-white/70 dark:border-white/20 dark:bg-white/10">
                    <Image
                      alt="Portrait avatar"
                      className="h-full w-full object-cover"
                      height={64}
                      src="/images/avatar.jpg"
                      width={64}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Bilyana Chiang
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-300">
                      Product Designer + Engineer
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <p>
                    Building calm, high-impact experiences that bridge web
                    infrastructure and delightful product design.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {[
                      "UI Systems",
                      "Web3 UX",
                      "Next.js",
                      "Design Tokens",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
