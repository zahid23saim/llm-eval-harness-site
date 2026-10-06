import { ArrowUpRight, Check, CircleDot, GitBranch, Play, ShieldCheck, Terminal } from 'lucide-react'

const links = [
  {
    label: 'View source',
    href: 'https://github.com/zahid23saim/llm-eval-harness',
    icon: GitBranch,
  },
  {
    label: 'Try the demo',
    href: 'https://zahid23saim.github.io/demo.html',
    icon: Play,
  },
  {
    label: 'Read the article',
    href: 'https://dev.to/zahid23saim/catch-llm-regressions-before-your-users-do-a-tiny-ci-gate-for-llm-output-8bg',
    icon: ArrowUpRight,
  },
]

const rules = [
  { name: 'exact', detail: 'Match the answer exactly' },
  { name: 'contains', detail: 'Look for required text' },
  { name: 'numeric', detail: 'Compare numeric answers' },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f8f7] text-[#123b3a]">
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 sm:px-10 lg:px-14">
        <div className="pointer-events-none absolute -right-48 -top-48 size-[34rem] rounded-full bg-[#d7ece7] opacity-70 blur-3xl" />

        <header className="relative flex items-center justify-between border-b border-[#cfe0dc] pb-5">
          <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#123b3a]">
            <span className="grid size-8 place-items-center rounded-lg bg-[#0b5754] text-[#e5faf4]">
              <Terminal aria-hidden="true" className="size-4" />
            </span>
            llm-eval-harness
          </a>
          <a
            href="https://github.com/zahid23saim/llm-eval-harness"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 text-sm font-medium text-[#39706c] transition-colors hover:text-[#0b5754] sm:flex"
          >
            Open source <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </header>

        <section id="top" className="relative grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b8d5cf] bg-[#e9f5f1] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#39706c]">
              <CircleDot aria-hidden="true" className="size-3.5" />
              A tiny CI gate for LLM output
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#103c3a] sm:text-7xl">
              Catch LLM regressions before your users do.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#52716e] sm:text-xl">
              A one-file Python harness that scores LLM answers against a gold set—so bad model or prompt changes fail the build, not your product.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://github.com/zahid23saim/llm-eval-harness" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#0b5754] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0b5754]/15 transition hover:bg-[#084744]">
                <GitBranch aria-hidden="true" className="size-4" /> View on GitHub <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
              <a href="https://zahid23saim.github.io/demo.html" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-[#a9c9c2] bg-white/60 px-5 py-3 text-sm font-semibold text-[#205653] transition hover:border-[#0b5754] hover:bg-white">
                <Play aria-hidden="true" className="size-4" /> Live demo
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-[#b9d5cf] bg-[#123b3a] p-2 shadow-2xl shadow-[#174d48]/15">
              <div className="overflow-hidden rounded-xl bg-[#f9fcfb]">
                <div className="flex items-center justify-between border-b border-[#d8e9e4] px-5 py-4">
                  <div className="flex gap-1.5"><span className="size-2 rounded-full bg-[#9bc6bb]" /><span className="size-2 rounded-full bg-[#c5ddd6]" /><span className="size-2 rounded-full bg-[#dcece8]" /></div>
                  <span className="font-mono text-[11px] text-[#77958f]">gold.json</span>
                </div>
                <div className="space-y-5 px-5 py-6 font-mono text-xs leading-6 text-[#35625e] sm:px-7 sm:py-8 sm:text-sm">
                  <div><span className="text-[#94aaa5]">01</span> <span className="text-[#0b5754]">{`{`}</span></div>
                  <div className="pl-5"><span className="text-[#b66f47]">"id"</span><span className="text-[#94aaa5]">: </span><span className="text-[#39706c]">"q1"</span><span className="text-[#94aaa5]">,</span></div>
                  <div className="pl-5"><span className="text-[#b66f47]">"question"</span><span className="text-[#94aaa5]">: </span><span className="text-[#39706c]">"What year did the first moon landing happen?"</span><span className="text-[#94aaa5]">,</span></div>
                  <div className="pl-5"><span className="text-[#b66f47]">"answer"</span><span className="text-[#94aaa5]">: </span><span className="text-[#39706c]">"1969"</span><span className="text-[#94aaa5]">,</span></div>
                  <div className="pl-5"><span className="text-[#b66f47]">"match"</span><span className="text-[#94aaa5]">: </span><span className="text-[#39706c]">"numeric"</span></div>
                  <div><span className="text-[#0b5754]">{`}`}</span></div>
                  <div className="mt-2 border-t border-[#d8e9e4] pt-5 font-mono text-xs leading-5 text-[#52716e]">accuracy: 80% (4/5)<br /><span className="text-[#a65342]">FAIL q5: How many bits are in a byte? expected: &apos;8&apos; got: &apos;A byte has seven bits.&apos;</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#cfe0dc] py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#6d938d]">Why it matters</p><h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#103c3a] sm:text-4xl">Unit tests for the part of your product that talks back.</h2></div>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                ['01', 'One file', 'Standard library only. Drop it into a project and run it anywhere Python runs.'],
                ['02', 'Clear failures', 'Every failure says what to fix, instead of leaving you to inspect a vague score.'],
                ['03', 'CI-ready', 'The exit code does the work: a bad model or prompt change fails the build.'],
              ].map(([number, title, detail]) => <div key={number} className="border-t-2 border-[#83b5aa] pt-4"><span className="font-mono text-xs text-[#83a39d]">{number}</span><h3 className="mt-5 text-lg font-semibold text-[#1b514d]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#5d7d78]">{detail}</p></div>)}
            </div>
          </div>
        </section>

        <section className="grid gap-5 rounded-2xl bg-[#dfeee9] p-7 sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5d8981]">Each question gets its own rule</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#103c3a]">Simple matching, dependable checks.</h2></div>
          <div className="grid gap-3 sm:grid-cols-3">{rules.map((rule) => <div key={rule.name} className="rounded-xl border border-[#c1ddd5] bg-[#f6fbf9] p-4"><div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#0b5754]"><ShieldCheck aria-hidden="true" className="size-4" /> {rule.name}</div><p className="mt-2 text-sm leading-5 text-[#63827d]">{rule.detail}</p></div>)}</div>
        </section>

        <footer className="flex flex-col gap-7 border-t border-[#cfe0dc] pb-4 pt-12 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-sm text-[#52716e]">Made by <span className="font-semibold text-[#205653]">Zahid Ahmed</span></p><p className="mt-2 text-xs text-[#7b9892]">Open source, MIT</p></div>
          <nav aria-label="Project links" className="flex flex-wrap gap-x-6 gap-y-3">{links.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#39706c] transition-colors hover:text-[#0b5754]"><Icon aria-hidden="true" className="size-4" /> {label}</a>)}</nav>
        </footer>
      </div>
    </main>
  )
}
