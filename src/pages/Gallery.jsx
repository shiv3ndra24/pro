/*
  Gallery page
  ─────────────────────────────────────────────────────────────────
  To add or edit sections / photos, open  galleryData.js  —
  do NOT need to touch this file for content changes.
*/

import { useRef, useState, useCallback } from 'react'
import { GALLERY_SECTIONS } from './galleryData'

/* ── Vite glob import – picks up everything in assets/gallery/ ── */
const galleryImages = import.meta.glob(
  '../assets/gallery/*',
  { eager: true, import: 'default' }
)

function getGalleryPath(filename) {
  if (!filename) return null
  return galleryImages[`../assets/gallery/${filename}`] || null
}

/* ── Arrow button ───────────────────────────────────────────────── */
function ArrowBtn({ direction, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Scroll left' : 'Scroll right'}
      className={`
        flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center
        border transition-all duration-150 focus:outline-none
        ${disabled
          ? 'border-cream-200 text-cream-300 cursor-not-allowed bg-white/60'
          : 'border-navy-200 text-navy-600 bg-white hover:bg-navy-900 hover:text-white hover:border-navy-900 shadow-sm cursor-pointer'
        }
      `}
    >
      {direction === 'left' ? (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  )
}

/* ── Single photo card ──────────────────────────────────────────── */
function PhotoCard({ file, caption, onClick, index }) {
  const [failed, setFailed] = useState(false)
  const src = getGalleryPath(file)
  const showImg = src && !failed

  return (
    <button
      onClick={() => onClick(index)}
      className="
        flex-shrink-0 w-64 sm:w-72 group relative overflow-hidden rounded-xl
        border border-cream-200 shadow-card bg-cream-100
        focus:outline-none focus:ring-2 focus:ring-gold-400
        transition-transform duration-200 hover:-translate-y-0.5
        cursor-pointer
      "
      aria-label={caption || `Photo ${index + 1}`}
    >
      {/* Image area */}
      <div className="w-full h-44 sm:h-48 overflow-hidden bg-navy-100 relative">
        {showImg ? (
          <img
            src={src}
            alt={caption || file}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setFailed(true)}
          />
        ) : (
          /* Placeholder when image not yet added */
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-navy-900/5">
            <svg className="w-8 h-8 text-navy-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3.75 3h16.5M5.25 3v18M18.75 3v18" />
            </svg>
            <span className="font-sans text-xs text-navy-400">{file}</span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="
          absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20
          transition-colors duration-300 flex items-center justify-center
        ">
          <span className="
            opacity-0 group-hover:opacity-100 transition-opacity duration-200
            bg-white/90 rounded-full p-2 shadow
          ">
            <svg className="w-4 h-4 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803zM10.5 7.5v6m3-3h-6" />
            </svg>
          </span>
        </div>
      </div>

      {/* Caption */}
      {caption && (
        <div className="px-4 py-3 text-left">
          <p className="font-sans text-xs text-navy-500 leading-snug line-clamp-2">{caption}</p>
        </div>
      )}
    </button>
  )
}

/* ── Lightbox ───────────────────────────────────────────────────── */
function Lightbox({ photos, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)
  const src = getGalleryPath(photos[current]?.file)

  const prev = useCallback(() => setCurrent(i => Math.max(0, i - 1)), [])
  const next = useCallback(() => setCurrent(i => Math.min(photos.length - 1, i + 1)), [photos.length])

  /* Keyboard navigation */
  const handleKey = useCallback((e) => {
    if (e.key === 'ArrowLeft')  prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape')     onClose()
  }, [prev, next, onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={handleKey}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
    >
      {/* Panel */}
      <div
        className="relative max-w-4xl w-full mx-4 bg-navy-900 rounded-2xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center
                     rounded-full bg-navy-800 text-navy-300 hover:text-white hover:bg-navy-700
                     transition-colors focus:outline-none"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative bg-navy-950 flex items-center justify-center" style={{ minHeight: '60vh' }}>
          {src ? (
            <img
              src={src}
              alt={photos[current]?.caption || ''}
              className="max-h-[70vh] max-w-full object-contain"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 py-20 text-navy-400">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909" />
              </svg>
              <p className="font-sans text-sm">Image not yet added</p>
            </div>
          )}

          {/* Prev / Next overlays */}
          {current > 0 && (
            <button
              onClick={prev}
              className="absolute left-3 w-9 h-9 rounded-full bg-navy-800/80 hover:bg-navy-700
                         text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Previous photo"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {current < photos.length - 1 && (
            <button
              onClick={next}
              className="absolute right-3 w-9 h-9 rounded-full bg-navy-800/80 hover:bg-navy-700
                         text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Next photo"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Caption + counter */}
        <div className="px-6 py-4 flex items-center justify-between">
          <p className="font-sans text-sm text-navy-300">
            {photos[current]?.caption || ''}
          </p>
          <p className="font-sans text-xs text-navy-500 tabular-nums flex-shrink-0 ml-4">
            {current + 1} / {photos.length}
          </p>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 pb-4">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`
                w-1.5 h-1.5 rounded-full transition-all duration-200 focus:outline-none
                ${i === current ? 'bg-gold-400 w-4' : 'bg-navy-600 hover:bg-navy-500'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Carousel row ───────────────────────────────────────────────── */
const SCROLL_AMOUNT = 300   // px per arrow click

function CarouselRow({ photos, onPhotoClick }) {
  const trackRef  = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd,   setAtEnd]   = useState(false)

  const updateEdges = () => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: 'smooth' })
    // Re-check after animation
    setTimeout(updateEdges, 350)
  }

  return (
    <div className="flex items-center gap-3">
      <ArrowBtn direction="left"  onClick={() => scroll(-1)} disabled={atStart} />

      <div
        ref={trackRef}
        onScroll={updateEdges}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 flex-1
                   scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {photos.map((photo, i) => (
          <PhotoCard
            key={photo.file}
            {...photo}
            index={i}
            onClick={onPhotoClick}
          />
        ))}
      </div>

      <ArrowBtn direction="right" onClick={() => scroll(+1)} disabled={atEnd} />
    </div>
  )
}

/* ── Section ────────────────────────────────────────────────────── */
function GallerySection({ title, subtitle, photos }) {
  const [lightbox, setLightbox] = useState(null)   // null | index

  return (
    <section className="mb-16">
      {/* Section header */}
      <div className="flex items-baseline gap-4 mb-5">
        <div>
          <h2 className="font-display text-xl font-semibold text-navy-800">{title}</h2>
          {subtitle && (
            <p className="mt-0.5 font-sans text-sm text-navy-400">{subtitle}</p>
          )}
        </div>
        <div className="flex-1 h-px bg-cream-200 self-center" />
        <span className="font-sans text-xs text-navy-400 flex-shrink-0">
          {photos.length} {photos.length === 1 ? 'photo' : 'photos'}
        </span>
      </div>

      <CarouselRow photos={photos} onPhotoClick={setLightbox} />

      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox
          photos={photos}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}

/* ── Page ───────────────────────────────────────────────────────── */
export default function Gallery() {
  const totalPhotos = GALLERY_SECTIONS.reduce((sum, s) => sum + s.photos.length, 0)

  return (
    <div className="page-enter pt-20 pb-20">

      {/* ── Banner ── */}
      <div className="bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-400 mb-2">Paleoclimate Lab</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Gallery</h1>
          <p className="mt-3 font-body text-navy-300 text-lg max-w-xl leading-relaxed">
            Field expeditions, workshops, and moments from across our research journeys.
          </p>
          {/* Stats row */}
          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-display text-3xl font-bold text-white">{GALLERY_SECTIONS.length}</p>
              <p className="font-sans text-xs text-navy-400 uppercase tracking-wider mt-0.5">Albums</p>
            </div>
            <div className="w-px bg-navy-700" />
            <div>
              <p className="font-display text-3xl font-bold text-white">{totalPhotos}</p>
              <p className="font-sans text-xs text-navy-400 uppercase tracking-wider mt-0.5">Photos</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sections ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        {GALLERY_SECTIONS.map(section => (
          <GallerySection
            key={section.title}
            title={section.title}
            subtitle={section.subtitle}
            photos={section.photos}
          />
        ))}
      </div>

      {/* ── Contribute CTA ──
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="bg-cream-100 border border-cream-200 rounded-xl p-8 text-center">
          <p className="font-display text-2xl font-semibold text-navy-800 mb-2">
            Have photos to share?
          </p>
          <p className="font-body text-navy-500 text-base mb-6 max-w-lg mx-auto">
            If you have field or event photos you'd like added to the gallery,
            send them over and we'll include them.
          </p>
          <a
            href="mailto:dsalab@iit.ac.in"
            className="inline-block px-7 py-3 bg-navy-900 text-white font-sans font-semibold text-sm rounded hover:bg-navy-800 transition-colors"
          >
            Send Photos
          </a>
        </div>
      </div> */}

    </div>
  )
}
