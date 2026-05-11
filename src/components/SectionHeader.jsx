/**
 * SectionHeader — reusable heading block used across pages.
 *
 * Props:
 *   eyebrow  – small uppercase label above the title (optional)
 *   title    – main heading text
 *   subtitle – supporting paragraph (optional)
 *   center   – boolean, center-aligns everything (default false)
 */
export default function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500 font-semibold mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl font-bold text-navy-900 section-rule ${center ? 'inline-block' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 font-body text-navy-500 text-base sm:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
