
/* Dont modify anything in this file apart from the display content and text. For the entries goto teamData.js and edit the objects there. */


import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { AVATAR_COLORS, FACULTY, PHD, MASTERS, UNDERGRAD, ALUMNI } from './teamData'

/* ── Icons ──────────────────────────────────────────────────────── */

// LinkedIn
function LinkedInIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

// Google Scholar (graduation cap)
function ScholarIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm-7 9.26V17l7 3.84L19 17v-4.74l-7 3.84-7-3.84z"/>
    </svg>
  )
}

// CV / Document
function CVIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6zm2-7h8v2H8v-2zm0 4h8v2H8v-2zm0-8h3v2H8V9z"/>
    </svg>
  )
}

// Mail
function MailIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
    </svg>
  )
}

// External link chevron
function ExternalIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    </svg>
  )
}

/* ── Helpers ─────────────────────────────────────────────────────── */

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
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length]
}

const peopleImages = import.meta.glob(
  '../assets/people/*',
  { eager: true, import: 'default' }
)

function getPeoplePath(filename) {
  if (!filename) return null
  return peopleImages[`../assets/people/${filename}`] || null
}

/* ── Avatar ──────────────────────────────────────────────────────── */

function Avatar({ name, image }) {
  const [imgFailed, setImgFailed] = useState(false)
  const src       = getPeoplePath(image)
  const showImage = src && !imgFailed

  return (
    <div
      className={`w-20 h-20 rounded-full flex items-center justify-center shadow-inner overflow-hidden
        ${showImage ? '' : getAvatarColor(name)}`}
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

/* ── Social link button ──────────────────────────────────────────── */

/**
 * A small icon button that stops propagation so the card-level click
 * (navigate to personal page) is NOT triggered.
 */
function SocialBtn({ href, label, children }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      onClick={e => e.stopPropagation()}
      className="
        relative z-10 w-8 h-8 flex items-center justify-center rounded-full
        bg-cream-100 border border-cream-200
        text-navy-400 hover:text-gold-500 hover:border-gold-400 hover:bg-gold-50
        transition-colors duration-150
      "
    >
      {children}
    </a>
  )
}

/* ── Member card ─────────────────────────────────────────────────── */

function MemberCard({ name, role, degree, focus, email, image, link, scholar, linkedin, cv }) {
  const isClickable = Boolean(link)

  // Outer wrapper — div when not clickable, anchor when clickable
  const Wrapper = isClickable ? 'a' : 'div'
  const wrapperProps = isClickable
    ? {
        href:   link,
        target: '_blank',
        rel:    'noopener noreferrer',
        title:  `Visit ${name}'s page`,
      }
    : {}

  const hasSocialLinks = scholar || linkedin || cv

  return (
    <Wrapper
      {...wrapperProps}
      className={`
        card-lift bg-white rounded-xl shadow-card border border-cream-200
        overflow-hidden flex flex-col
        ${isClickable ? 'cursor-pointer group' : ''}
      `}
    >
      {/* Clickable indicator strip */}
      {isClickable && (
        <div className="h-0.5 bg-gradient-to-r from-gold-400 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      )}

      {/* Avatar */}
      <div className="flex justify-center pt-8 pb-4 relative">
        <Avatar name={name} image={image} />
        {/* External link badge on hover */}
        {isClickable && (
          <span className="
            absolute top-6 right-5 w-6 h-6 flex items-center justify-center
            rounded-full bg-gold-400 opacity-0 group-hover:opacity-100
            transition-opacity duration-200 shadow
          ">
            <ExternalIcon className="w-3 h-3 text-white" />
          </span>
        )}
      </div>

      {/* Info */}
      <div className="px-5 pb-6 flex-1 flex flex-col text-center">
        <p className="font-display font-bold text-navy-800 text-lg leading-snug group-hover:text-gold-600 transition-colors">
          {name}
        </p>
        <p className="mt-1 font-sans text-xs text-gold-500 uppercase tracking-wider font-semibold">{role}</p>
        <p className="mt-0.5 font-sans text-xs text-navy-400">{degree}</p>

        {/* Divider */}
        <div className="my-4 w-10 h-px bg-cream-200 mx-auto" />

        <p className="font-body text-sm text-navy-500 leading-relaxed flex-1">
          <span className="font-semibold text-navy-600">Focus: </span>
          {focus}
        </p>

        {/* Bottom row: email + social icons */}
        {(email || hasSocialLinks) && (
          <div className="mt-5 flex items-center justify-center gap-2 flex-wrap">

            {/* Email — always a mailto, stops card navigation */}
            {email && (
              <a
                href={`mailto:${email}`}
                aria-label={`Email ${name}`}
                title={`Email ${name}`}
                onClick={e => e.stopPropagation()}
                className="
                  relative z-10 w-8 h-8 flex items-center justify-center rounded-full
                  bg-navy-900 border border-navy-800
                  text-white hover:bg-gold-500 hover:border-gold-400
                  transition-colors duration-150
                "
              >
                <MailIcon className="w-3.5 h-3.5" />
              </a>
            )}

            <SocialBtn href={scholar}  label="Google Scholar"><ScholarIcon  className="w-3.5 h-3.5" /></SocialBtn>
            <SocialBtn href={linkedin} label="LinkedIn">       <LinkedInIcon className="w-3.5 h-3.5" /></SocialBtn>
            <SocialBtn href={cv}       label="CV / Résumé">    <CVIcon       className="w-3.5 h-3.5" /></SocialBtn>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

/* ── Group section ───────────────────────────────────────────────── */

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

/* ── Page ────────────────────────────────────────────────────────── */
export default function Team() {
  return (
  <div className="page-enter pt-20 pb-20">
      {/* Page banner */}
      <div className="bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-400 mb-2">Paleoclimate Lab</p>
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
        <GroupSection title="Alumni Researchers"         members={ALUMNI}    />
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
