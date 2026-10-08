import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import crafts, { INSTAGRAM_DM_URL, INSTAGRAM_URL, cdn } from '@/data/crafts'
import { FloralDivider, InstagramIcon, LotusBrush, Mandala } from '@/components/Ornaments'
import { CommissionForm } from '@/components/CommissionForm'

export const Route = createFileRoute('/')({
  component: Home,
})

const occasions = [
  { title: 'Weddings & Trousseau', text: 'Varmala preservation, trousseau packing, bridesmaid gifts and return favours.' },
  { title: 'Festivals', text: 'Diwali, Rakhi and Karwa Chauth hampers, painted diyas, torans and festive décor.' },
  { title: 'Homes & Housewarming', text: 'Name plates, lippan mirrors and statement wall art made for your space.' },
  { title: 'Corporate Gifting', text: 'Branded, elegant hampers and keepsakes, crafted in bulk with care.' },
]

const steps = [
  { n: '०१', title: 'Share your idea', text: 'DM me on Instagram or send an enquiry with your colours, occasion and inspiration.' },
  { n: '०२', title: 'Design together', text: 'I suggest sizes, palettes and finishes, and share a sketch or mock-up before I begin.' },
  { n: '०३', title: 'Handcrafted for you', text: 'Your piece is poured, painted or stitched by hand, slowly and carefully.' },
  { n: '०४', title: 'Wrapped & delivered', text: 'Gift-ready packaging, shipped safely to your doorstep across India.' },
]

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Collections />
      <Story />
      <Occasions />
      <Process />
      <Commission />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush/50 via-ivory to-ivory pt-32 pb-20 lg:pt-40 lg:pb-28">
      <Mandala className="slow-spin pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] text-gold/15" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:px-10">
        <div className="rise text-center lg:text-left">
          <p className="eyebrow">Handcrafted Art · Décor · Gifting</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-light text-ink sm:text-6xl lg:text-7xl">
            The quiet grace
            <br />
            of things made <em className="text-rose">by hand</em>
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-muted lg:mx-0">
            <span className="font-hindi text-gold">नज़ाकत</span>, meaning delicacy, is a small art studio creating resin keepsakes,
            mandalas, lippan mirror-work, textured canvases, crochet and curated hampers, each one made by hand for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a href="#collections" className="btn-gold">
              Explore Collections <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
            </a>
            <a href={INSTAGRAM_DM_URL} target="_blank" rel="noreferrer" className="btn-outline">
              <InstagramIcon className="h-4 w-4" /> DM to Order
            </a>
          </div>
        </div>

        <div className="rise relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-3 arch border border-gold-light/60" />
          <div className="arch relative aspect-[4/5] overflow-hidden bg-cream">
            <img
              src={cdn('/img/hero.png', 1000)}
              alt="A gold and blush mandala in progress beside a pink lotus, paint brush and mirror pieces"
              className="h-full w-full object-cover object-[70%_50%]"
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-full bg-ivory px-6 py-4 shadow-[0_10px_40px_-15px_rgba(61,46,42,0.35)] sm:-left-10">
            <p className="font-display text-lg italic text-ink">Made to order</p>
            <p className="eyebrow !text-[0.6rem]">Every piece one of a kind</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = [...crafts, ...crafts]
  return (
    <div className="overflow-hidden border-y border-gold-light/40 bg-ivory py-5">
      <div className="marquee flex w-max items-center gap-10 whitespace-nowrap">
        {items.map((c, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl italic text-ink/70">
            {c.name}
            <LotusBrush className="h-4 text-gold" />
          </span>
        ))}
      </div>
    </div>
  )
}

function SectionHeading({ eyebrow, title, hindi }: { eyebrow: string; title: React.ReactNode; hindi?: string }) {
  return (
    <div className="text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-light text-ink sm:text-5xl">{title}</h2>
      {hindi && <p className="mt-2 font-hindi text-lg text-gold">{hindi}</p>}
      <FloralDivider className="mt-6" />
    </div>
  )
}

function Collections() {
  return (
    <section id="collections" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="The Collections" title={<>Seven crafts, <em>one</em> sensibility</>} hindi="संग्रह" />
        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {crafts.map((c, i) => (
            <Link
              key={c.slug}
              to="/craft/$slug"
              params={{ slug: c.slug }}
              className={`group block ${i === 6 ? 'lg:col-start-2' : ''}`}
            >
              <div className="arch relative aspect-[4/5] overflow-hidden bg-cream">
                <img
                  src={cdn(c.image, 700)}
                  alt={`${c.name} by Nazaakat`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>
              <div className="mt-6 text-center">
                <p className="font-hindi text-sm text-gold">{c.hindi}</p>
                <h3 className="mt-1 font-display text-3xl text-ink">{c.name}</h3>
                <p className="mt-2 text-sm text-muted">{c.tagline}</p>
                <span className="eyebrow mt-4 inline-flex items-center gap-2 border-b border-transparent pb-1 transition-colors group-hover:border-gold">
                  View pieces <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.4} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section id="story" className="relative scroll-mt-20 overflow-hidden bg-blush/40 py-24 lg:py-32">
      <Mandala className="pointer-events-none absolute -right-48 top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 text-gold/15" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="grid grid-cols-2 gap-4">
          <img src={cdn('/img/lippan.png', 500)} alt="Pastel lippan mirror-work wall plate" loading="lazy" className="arch aspect-[3/4] w-full object-cover" />
          <img src={cdn('/img/crochet.png', 500)} alt="Pastel crochet flower bouquet and tote" loading="lazy" className="arch mt-12 aspect-[3/4] w-full object-cover" />
        </div>
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-light text-ink sm:text-5xl">
            Rooted in Indian craft, <em className="text-rose">finished</em> with a soft, modern touch
          </h2>
          <div className="mt-8 space-y-5 leading-relaxed text-muted">
            <p>
              Nazaakat began with a paint brush and a love for the crafts I grew up around: the mirror-work walls of Kutch,
              the patience of a mandala, the joy of a hand-wrapped festive gift.
            </p>
            <p>
              Today every piece is still made by hand in small batches. I design in gentle pastels and antique gold so that
              each creation feels at home in a modern space while still carrying a little of India’s heritage.
            </p>
          </div>
          <p className="mt-10 font-display text-3xl italic text-gold">— with love, Nazaakat</p>
        </div>
      </div>
    </section>
  )
}

function Occasions() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="Made For" title={<>Every occasion, <em>beautifully</em> marked</>} hindi="हर मौक़े के लिए" />
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-gold-light/40 bg-gold-light/40 sm:grid-cols-2 lg:grid-cols-4">
          {occasions.map((o) => (
            <div key={o.title} className="bg-ivory p-8 transition-colors duration-500 hover:bg-cream lg:p-10">
              <LotusBrush className="h-6 text-gold" />
              <h3 className="mt-6 font-display text-2xl text-ink">{o.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{o.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="The Process" title={<>From your idea to <em>your hands</em></>} hindi="प्रक्रिया" />
        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold-light font-hindi text-xl text-gold">
                {s.n}
              </span>
              <h3 className="mt-6 font-display text-2xl text-ink">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Commission() {
  return (
    <section id="commission" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1.3fr] lg:px-10">
        <div>
          <p className="eyebrow">Commission a Piece</p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-light text-ink sm:text-5xl">
            Let’s create something <em className="text-rose">just for you</em>
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            Whether it’s a single keepsake or a hundred festive hampers, the easiest way to order is a direct message on
            Instagram. You can also share your idea here and I’ll reach out personally.
          </p>
          <a
            href={INSTAGRAM_DM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 flex items-center gap-5 rounded-2xl border border-gold-light/60 bg-blush/30 p-6 transition-colors duration-500 hover:bg-blush/60"
          >
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-ivory text-gold">
              <InstagramIcon className="h-6 w-6" />
            </span>
            <span>
              <span className="eyebrow block">DM to order</span>
              <span className="font-display text-2xl text-ink">@nazaakatt_</span>
            </span>
            <ArrowUpRight className="ml-auto h-5 w-5 text-gold" strokeWidth={1.4} />
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="eyebrow mt-5 inline-block hover:!text-rose">
            See the latest work on Instagram →
          </a>
        </div>
        <div className="rounded-2xl bg-ivory p-8 shadow-[0_30px_80px_-40px_rgba(61,46,42,0.35)] ring-1 ring-gold-light/40 sm:p-12">
          <CommissionForm />
        </div>
      </div>
    </section>
  )
}
