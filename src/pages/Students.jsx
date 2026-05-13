import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'


const AVATAR_COLORS = [
  'bg-indigo-700',
  'bg-rose-700',
  'bg-amber-700',
  'bg-green-700',
  'bg-cyan-700',
  'bg-purple-700',
  'bg-pink-700',
  'bg-orange-700',
  'bg-blue-700',
  'bg-teal-700',
]

/* ── Helpers ────────────────────────────────────────────────────── */

/**
 * Derives up to 2 initials from a full name.
 * Takes the first letter of the first word and the first letter of the last word.
 * Falls back to the first two characters of the name if only one word is present.
 *
 * @param {string} name - Full name string
 * @returns {string} 1–2 uppercase initials
 */
function getInitials(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function getAvatarColor(name = '') {
  let hash = 0

  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }

  const index = Math.abs(hash) % AVATAR_COLORS.length

  return AVATAR_COLORS[index]
}

const peopleImages = import.meta.glob(
  '../assets/people/*',
  {
    eager: true,
    import: 'default'
  }
)

/**
 * Resolves the full image path from the `people` assets folder.
 * Expects images at: src/assets/people/<filename>
 *
 * @param {string|null|undefined} filename - e.g. 'arun-mehta.png'
 * @returns {string|null}
 */
function getPeoplePath(filename) {
  if (!filename) return null
  // Vite-compatible dynamic import base; adjust prefix if using CRA or a different bundler.
  return peopleImages[`../assets/people/${filename}`] || null
}

/* ── Avatar ─────────────────────────────────────────────────────── */

/**
 * Renders a circular avatar.
 * Shows `image` when provided and successfully loaded; falls back to initials on error or when null.
 */
function Avatar({ name, image }) {
  const [imgFailed, setImgFailed] = useState(false)

  const src = getPeoplePath(image)

  const showImage = src && !imgFailed

  const fallbackColor = getAvatarColor(name)

  return (
    <div
      className={`w-20 h-20 rounded-full flex items-center justify-center shadow-inner overflow-hidden
        ${showImage ? '' : fallbackColor}`}
    >
      {showImage ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="font-display text-2xl font-bold text-white/90 select-none">
          {getInitials(name)}
        </span>
      )}
    </div>
  )
}

/* ── Data ──────────────────────────────────────────────────────── */

const FACULTY = [
  {
    name:   'Prof. Arun Mehta',
    role:   'Principal Investigator',
    degree: 'Ph.D., IISc Bangalore',
    focus:  'Graph algorithms, influence maximization, algorithmic fairness.',
    email:  'dummy@iit.ac.in',
    image:  'arun mehta.jpg',   // optional — remove or set null if no image
  },
]

const PHD = [
  {
    name:   'Priya Nair',       // ← fix the corrupted name here
    role:   'Ph.D. Scholar — 3rd Year',
    degree: 'B.Tech., NIT Trichy',
    focus:  'Temporal graph streaming and incremental shortest-path algorithms.',
    email:  'dummy@iit.ac.in',
    image:  null,               // no image — will show initials
  },
  {
    name:   'Divya Sharma',
    role:   'Ph.D. Scholar — 1st Year',
    degree: 'B.E., BITS Pilani',
    focus:  'Fairness-aware ranking algorithms and bias auditing in recommender systems.',
    email:  'dummy@iit.ac.in',
    image:  'divya sharma.png',
  },
  {
    name:   'Rahul Joshi',
    role:   'Ph.D. Scholar — 2nd Year',
    degree: 'B.Tech., IIT Delhi',
    focus:  'Approximate counting and sub-linear graph algorithms for streaming data.',
    email:  'dummy@iit.ac.in',
    image:  'rahul joshi.jpg',
  },
]

const MASTERS = [
  {
    name:   'Ananya Reddy',
    role:   'M.Tech. Research — CSE',
    degree: 'B.Tech., JNTU Hyderabad',
    focus:  'Seed-selection heuristics for influence maximization in heterogeneous networks.',
    image:  null,
  },
  {
    name:   'Karthik Suresh',
    role:   'M.Tech. Research — CSE',
    degree: 'B.E., Anna University',
    focus:  'Real-time community detection on dynamic social graphs.',
    image:  null,
  },
]

const UNDERGRAD = [
  {
    name:   'Raj Verma',
    role:   'B.Tech. — CSE (Final Year)',
    degree: 'IIT (current)',
    focus:  'Implementing scalable graph partitioning for distributed influence diffusion.',
    image:  null,
  },
  {
    name:   'Sneha Pillai',
    role:   'B.Tech. — CSE (3rd Year)',
    degree: 'IIT (current)',
    focus:  'Visualisation dashboard for temporal network evolution and anomaly detection.',
    image:  null,
  },
  {
    name:   'Aditya Kumar',
    role:   'B.Tech. — Data Science (Final Year)',
    degree: 'IIT (current)',
    focus:  'Benchmarking graph neural networks on citation and co-authorship networks.',
    image:  null,
  },
]

/* ── Sub-components ─────────────────────────────────────────────── */

function MemberCard({ name, role, degree, focus, email, image, color }) {
  return (
    <div className="card-lift bg-white rounded-xl shadow-card border border-cream-200 overflow-hidden flex flex-col">
      {/* Avatar */}
      <div className="flex justify-center pt-8 pb-4">
        <Avatar name={name} image={image} />
      </div>

      {/* Info */}
      <div className="px-5 pb-6 flex-1 flex flex-col text-center">
        <p className="font-display font-bold text-navy-800 text-lg leading-snug">{name}</p>
        <p className="mt-1 font-sans text-xs text-gold-500 uppercase tracking-wider font-semibold">{role}</p>
        <p className="mt-0.5 font-sans text-xs text-navy-400">{degree}</p>

        {/* Divider */}
        <div className="my-4 w-10 h-px bg-cream-200 mx-auto" />

        <p className="font-body text-sm text-navy-500 leading-relaxed flex-1">
          <span className="font-semibold text-navy-600">Focus: </span>
          {focus}
        </p>

        {email && (
          <a
            href={`mailto:${email}`}
            className="mt-4 font-sans text-xs text-gold-500 hover:text-gold-600 transition-colors"
          >
            {email}
          </a>
        )}
      </div>
    </div>
  )
}

function GroupSection({ title, members }) {
  return (
    <div className="mb-16">
      <h3 className="font-display text-xl font-semibold text-navy-700 mb-6 pb-2 border-b border-cream-200">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map(m => <MemberCard key={m.name} {...m} />)}
      </div>
    </div>
  )
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function Students() {
  return (
    <div className="page-enter pt-24 pb-20">
      {/* Page banner */}
      <div className="bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-400 mb-2">DSA Lab</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Our People</h1>
          <p className="mt-3 font-body text-navy-300 text-lg max-w-xl leading-relaxed">
            A diverse group of researchers united by curiosity and a commitment to
            rigorous, reproducible, and impactful computer science.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <GroupSection title="Faculty"                   members={FACULTY}   />
        <GroupSection title="Doctoral Researchers"      members={PHD}       />
        <GroupSection title="Master's Researchers"      members={MASTERS}   />
        <GroupSection title="Undergraduate Researchers" members={UNDERGRAD} />
      </div>

      {/* Join CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="bg-cream-100 border border-cream-200 rounded-xl p-8 text-center">
          <p className="font-display text-2xl font-semibold text-navy-800 mb-2">
            Interested in joining the lab?
          </p>
          <p className="font-body text-navy-500 text-base mb-6 max-w-lg mx-auto">
            We are always looking for motivated students passionate about algorithms and systems.
            Reach out with your CV and a brief research statement.
          </p>
          <a
            href="mailto:dsalab@iit.ac.in"
            className="inline-block px-7 py-3 bg-navy-900 text-white font-sans font-semibold text-sm rounded hover:bg-navy-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}