/** Small lotus with a paint brush beneath, echoing the Nazaakat logo. */
export function LotusBrush({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 40" fill="none" stroke="currentColor" strokeWidth="1.1" className={className} aria-hidden="true">
      <path d="M32 6c-4 5-4 12 0 18 4-6 4-13 0-18Z" />
      <path d="M32 24c-3-6-9-9-15-9 1 6 7 10 15 9Z" />
      <path d="M32 24c3-6 9-9 15-9-1 6-7 10-15 9Z" />
      <path d="M32 24c-6-2-13-1-18 2 5 3 12 2 18-2Z" />
      <path d="M32 24c6-2 13-1 18 2-5 3-12 2-18-2Z" />
      <path d="M10 33h36" strokeLinecap="round" />
      <path d="M46 33c2-1.4 5-1.6 8-.4-2.6 1.6-5.6 1.6-8 .4Z" fill="currentColor" />
    </svg>
  )
}

export function Wordmark({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const lg = size === 'lg'
  return (
    <span className="inline-flex flex-col items-center leading-none">
      <span className={`gold-foil font-hindi ${lg ? 'text-5xl' : 'text-3xl'}`}>नज़ाकत</span>
      <LotusBrush className={`text-gold ${lg ? 'mt-1 h-6' : 'mt-0.5 h-4'}`} />
    </span>
  )
}

/** Fine-line mandala used as a background ornament. */
export function Mandala({ className = '' }: { className?: string }) {
  const petals = Array.from({ length: 16 })
  const inner = Array.from({ length: 8 })
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="96" />
      <circle cx="100" cy="100" r="88" strokeDasharray="1 3" />
      <circle cx="100" cy="100" r="40" />
      <circle cx="100" cy="100" r="12" />
      {petals.map((_, i) => (
        <path key={`p${i}`} transform={`rotate(${i * 22.5} 100 100)`} d="M100 14c8 14 8 30 0 46-8-16-8-32 0-46Z" />
      ))}
      {inner.map((_, i) => (
        <path key={`i${i}`} transform={`rotate(${i * 45 + 22.5} 100 100)`} d="M100 62c6 8 6 18 0 26-6-8-6-18 0-26Z" />
      ))}
      {petals.map((_, i) => (
        <circle key={`d${i}`} transform={`rotate(${i * 22.5 + 11.25} 100 100)`} cx="100" cy="30" r="1.4" fill="currentColor" />
      ))}
    </svg>
  )
}

/** Centered divider: hairlines flanking a small lotus bud. */
export function FloralDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 text-gold ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-light" />
      <svg viewBox="0 0 40 20" className="h-4" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M20 2c-3 4-3 9 0 14 3-5 3-10 0-14Z" />
        <path d="M20 16c-3-4-8-6-12-5 1 4 6 6 12 5Z" />
        <path d="M20 16c3-4 8-6 12-5-1 4-6 6-12 5Z" />
        <circle cx="3" cy="12" r="1" fill="currentColor" />
        <circle cx="37" cy="12" r="1" fill="currentColor" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-light" />
    </div>
  )
}

export function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  )
}
