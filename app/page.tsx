import { ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-linear-to-br from-[#070d18] via-[#0b1220] to-black px-6 pb-16 pt-12 text-gray-100 sm:px-10">
      <div className="pointer-events-none absolute -left-24 top-6 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.06),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(15,23,42,0.8),transparent_45%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14">
        <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-200">
            Nomi&apos;s AI
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            A calmer, faster AI workspace that stays in sync with you.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Nomi-GPT 1.0 blends focused chat, smart recall, and tasteful UI so
            you can ideate, draft, and ship without friction. No clutter—just a
            responsive brain beside you.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href={"/chat"} className="cursor-pointer">
              <button
                type="button"
                className="group cursor-pointer inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 to-blue-600 px-8 py-3 text-base font-semibold text-black shadow-[0_18px_70px_-35px_rgba(34,211,238,0.9)] transition hover:scale-[1.02] hover:shadow-[0_22px_80px_-35px_rgba(59,130,246,0.85)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220]"
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Understands your flow",
              icon: Sparkles,
              body: "Context-aware responses tuned for product, dev, and content work—no more generic answers.",
            },
            {
              title: "Moves at your speed",
              icon: Zap,
              body: "Snappy handoffs, live memory, and quick actions keep momentum while you ideate or ship.",
            },
            {
              title: "Safe by design",
              icon: ShieldCheck,
              body: "Private by default with transparent controls so your ideas stay yours.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-white/[0.07]"
            >
              <div className="absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-2">
                  <item.icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-gray-300">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 px-6 py-8 shadow-2xl shadow-blue-500/20 md:flex md:items-center md:justify-between md:gap-10 md:px-10">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-12 -bottom-15 h-52 w-52 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="relative space-y-3 md:max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Why people switch
            </p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Everything you need, without the noise.
            </h2>
            <p className="text-sm text-gray-300">
              Keep your threads, files, and tasks aligned in a single calm
              workspace. Designed for long sessions and real work—not just quick
              demos.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-gray-200">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <Sparkles className="h-4 w-4 text-cyan-300" /> Designer-grade UI
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <Zap className="h-4 w-4 text-cyan-300" /> Fast actions
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <ShieldCheck className="h-4 w-4 text-cyan-300" /> Private by
                default
              </span>
            </div>
          </div>

          <div className="relative mt-8 w-full max-w-md md:mt-0">
            <div className="rounded-2xl border border-white/10 bg-[#0f172a]/70 p-5 shadow-xl shadow-cyan-500/15">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Live canvas</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[10px] text-cyan-200">
                  v1.0
                </span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-lg bg-linear-to-br from-cyan-400 to-blue-600" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Instant answers
                      </p>
                      <p className="text-xs text-gray-400">
                        Ask, decide, ship.
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-cyan-200">0.8s</span>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/4 p-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                    Smart memory
                  </p>
                  <p className="mt-2 text-sm text-gray-200">
                    Picks up where you left off—whether that was design tweaks,
                    code cleanup, or a launch brief.
                  </p>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/5 bg-linear-to-r from-white/10 via-white/5 to-transparent px-3 py-3 text-sm text-gray-200">
                  <div>
                    <p className="font-semibold text-white">Launch-ready</p>
                    <p className="text-xs text-gray-400">
                      Polished prompts, drafts, and decks on tap.
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-cyan-300" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
