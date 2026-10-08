import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { InstagramIcon, Wordmark } from './Ornaments'
import { INSTAGRAM_URL } from '../data/crafts'

const links = [
  { href: '/#collections', label: 'Collections' },
  { href: '/#story', label: 'Our Story' },
  { href: '/#process', label: 'Process' },
  { href: '/#commission', label: 'Commission' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_rgba(176,141,87,0.2)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <nav className="hidden flex-1 gap-9 md:flex">
          {links.slice(0, 2).map((l) => (
            <a key={l.href} href={l.href} className="eyebrow !text-ink/80 transition-colors hover:!text-gold">
              {l.label}
            </a>
          ))}
        </nav>

        <Link to="/" aria-label="Nazaakat home" className="flex-none">
          <Wordmark />
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-9 md:flex">
          {links.slice(2).map((l) => (
            <a key={l.href} href={l.href} className="eyebrow !text-ink/80 transition-colors hover:!text-gold">
              {l.label}
            </a>
          ))}
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Nazaakat on Instagram" className="text-gold hover:text-rose">
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        <button className="text-ink md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X className="h-6 w-6" strokeWidth={1.2} /> : <Menu className="h-6 w-6" strokeWidth={1.2} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold-light/40 bg-ivory px-6 pb-8 pt-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 font-display text-2xl text-ink">
              {l.label}
            </a>
          ))}
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 eyebrow">
            <InstagramIcon className="h-4 w-4" /> @nazaakatt_
          </a>
        </div>
      )}
    </header>
  )
}
