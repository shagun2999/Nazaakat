import { Link } from '@tanstack/react-router'
import crafts, { INSTAGRAM_DM_URL, INSTAGRAM_URL } from '../data/crafts'
import { InstagramIcon, Mandala, Wordmark } from './Ornaments'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-cream pt-20 pb-10">
      <Mandala className="pointer-events-none absolute -right-32 -bottom-32 h-[28rem] w-[28rem] text-gold/15" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <Wordmark size="lg" />
          <p className="mt-6 max-w-sm font-display text-xl italic text-muted">
            Handcrafted with grace: resin, mandala, lippan, texture, canvas, crochet and curated gifting.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-5">Collections</p>
          <ul className="space-y-2 text-sm">
            {crafts.map((c) => (
              <li key={c.slug}>
                <Link to="/craft/$slug" params={{ slug: c.slug }} className="text-ink/80 transition-colors hover:text-gold">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Say Hello</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-ink/80 hover:text-gold">
            <InstagramIcon className="h-4 w-4" /> @nazaakatt_
          </a>
          <a href={INSTAGRAM_DM_URL} target="_blank" rel="noreferrer" className="mt-2 block text-sm text-ink/80 hover:text-gold">
            Send a DM to order
          </a>
          <Link to="/" hash="commission" className="mt-2 block text-sm text-ink/80 hover:text-gold">
            Commission a piece
          </Link>
        </div>
      </div>
      <div className="relative mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-gold-light/40 px-6 pt-8 text-xs tracking-wider text-muted md:flex-row lg:px-10">
        <span>© {new Date().getFullYear()} Nazaakat. All pieces handmade in India.</span>
        <span className="font-hindi text-gold">कला · नज़ाकत · प्रेम</span>
      </div>
    </footer>
  )
}
