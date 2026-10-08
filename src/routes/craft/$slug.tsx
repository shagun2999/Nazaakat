import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import crafts, { INSTAGRAM_DM_URL, cdn } from '@/data/crafts'
import { FloralDivider, InstagramIcon, LotusBrush, Mandala } from '@/components/Ornaments'
import { CommissionForm } from '@/components/CommissionForm'

export const Route = createFileRoute('/craft/$slug')({
  loader: ({ params }) => {
    const index = crafts.findIndex((c) => c.slug === params.slug)
    if (index === -1) throw notFound()
    return { craft: crafts[index], next: crafts[(index + 1) % crafts.length] }
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.craft.name} · Nazaakat` },
          { name: 'description', content: loaderData.craft.description },
        ]
      : [],
  }),
  component: CraftPage,
  notFoundComponent: () => (
    <div className="px-6 pt-48 pb-32 text-center">
      <p className="font-display text-4xl">This collection could not be found</p>
      <Link to="/" hash="collections" className="btn-outline mt-8">
        View all collections
      </Link>
    </div>
  ),
})

function CraftPage() {
  const { craft, next } = Route.useLoaderData()

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-blush/50 to-ivory pt-32 pb-20 lg:pt-40">
        <Mandala className="slow-spin pointer-events-none absolute -right-40 -top-32 h-[30rem] w-[30rem] text-gold/15" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div className="arch rise aspect-[4/5] overflow-hidden bg-cream">
            <img src={cdn(craft.image, 900)} alt={`${craft.name} by Nazaakat`} className="h-full w-full object-cover" />
          </div>
          <div className="rise" style={{ animationDelay: '0.15s' }}>
            <Link to="/" hash="collections" className="eyebrow inline-flex items-center gap-2 hover:!text-rose">
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.4} /> All collections
            </Link>
            <p className="mt-8 font-hindi text-2xl text-gold">{craft.hindi}</p>
            <h1 className="mt-1 font-display text-5xl font-light text-ink sm:text-6xl">{craft.name}</h1>
            <p className="mt-4 font-display text-2xl italic text-rose">{craft.tagline}</p>
            <p className="mt-6 leading-relaxed text-muted">{craft.description}</p>

            <div className="mt-10">
              <p className="eyebrow">Pieces I can make</p>
              <ul className="mt-4 divide-y divide-gold-light/40 border-y border-gold-light/40">
                {craft.pieces.map((p) => (
                  <li key={p} className="flex items-center gap-4 py-3 text-ink/90">
                    <LotusBrush className="h-3.5 flex-none text-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {craft.idealFor.map((t) => (
                <span key={t} className="rounded-full bg-blush/60 px-4 py-1.5 text-xs tracking-wider text-ink/80">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={INSTAGRAM_DM_URL} target="_blank" rel="noreferrer" className="btn-gold">
                <InstagramIcon className="h-4 w-4" /> DM to Order
              </a>
              <a href="#enquire" className="btn-outline">
                Send an Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="enquire" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="eyebrow">Custom Orders</p>
            <h2 className="mt-4 font-display text-4xl font-light text-ink">
              Commission your <em>{craft.name.toLowerCase()}</em>
            </h2>
            <FloralDivider className="mt-6" />
          </div>
          <div className="mt-12 rounded-2xl bg-ivory p-8 shadow-[0_30px_80px_-40px_rgba(61,46,42,0.35)] ring-1 ring-gold-light/40 sm:p-12">
            <CommissionForm key={craft.slug} defaultCraft={craft.name} />
          </div>
        </div>
      </section>

      <Link
        to="/craft/$slug"
        params={{ slug: next.slug }}
        className="group block border-t border-gold-light/40 bg-cream py-16 text-center transition-colors hover:bg-blush/40"
      >
        <p className="eyebrow">Next collection</p>
        <p className="mt-3 inline-flex items-center gap-4 font-display text-4xl text-ink">
          {next.name}
          <ArrowRight className="h-6 w-6 text-gold transition-transform group-hover:translate-x-2" strokeWidth={1.2} />
        </p>
      </Link>
    </>
  )
}
