import { useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

/* ── Vite glob import – import from assets/project-photos ─────────────── */
const projectImages = import.meta.glob(
  '../assets/project-photos/*',
  { eager: true, import: 'default' }
)

function getProjectImagesPath(filename) {
  if (!filename) return null
  return projectImages[`../assets/project-photos/${filename}`] || null
}

/* ── Data ──────────────────────────────────────────────────────── */
/* You can modify the data and photos as per your requirements */
const PROJECTS = [
  {
    id: '01',
    title: 'Temporal Graph Stream Processing',
    status: 'Completed',
    summary:
      'Building algorithms and systems for analysing large, continuously evolving graphs in real time, with a focus on updates, deletions, and fast query answering.',
    description: `
      Many modern networks change constantly — social interactions, communication logs,
      transportation systems, and sensor networks all generate high-velocity graph data.
      This project studies how to maintain key graph properties efficiently under stream
      updates, including components, reachability, approximation of distances, and
      densest-subgraph style measures. We aim to balance strong theoretical guarantees
      with practical throughput on large real datasets.
    `,
    researchers: [
      'Prof. Yama Dixit',
      'Priya Nair',
      'Rahul Joshi',
    ],
    // Add filenames from src/assets/gallery/ — omit the array (or leave []) for no photos
    photos: [
      { file: 'yama dixit.png', caption: 'Lab setup at base camp' },
      { file: 'delhi_2012_03.jpg', caption: 'Team briefing — Day 1' },
      { file: 'delhi_2012_04.jpg', caption: 'Sediment layering — 4 m depth' },
    ],
  },
  {
    id: '02',
    title: 'Influence Maximization on Large Networks',
    status: 'Ongoing',
    summary:
      'Developing faster seed-selection strategies for maximising information spread in social and communication networks.',
    description: `
      Influence maximization asks which small set of nodes should be activated so that a
      diffusion process spreads as widely as possible. Classical greedy approaches are
      often expensive on large graphs, so this project explores Monte-Carlo acceleration,
      sketching, sampling-based estimates, and learning-guided heuristics. We also study
      robustness under uncertainty in edge probabilities and network dynamics.
    `,
    researchers: [
      'Prof. Yama Dixit',
      'Priya Nair',
      'Rahul Joshi',
    ],
    photos: [],   // no photos — strip hidden automatically
  },
  {
    id: '03',
    title: 'Fairness-Aware Ranking and Recommendation',
    status: 'Ongoing',
    summary:
      'Designing methods to audit and reduce bias in ranking, retrieval, and recommendation systems without sacrificing too much utility.',
    description: `
      As algorithmic decision-making becomes more common, ranking and recommendation
      systems must be evaluated for fairness, transparency, and downstream impact.
      This project investigates formal fairness constraints, post-processing methods,
      and practical auditing tools that can be applied to ranking pipelines. We also
      analyse trade-offs between fairness objectives and task performance across
      different application settings.
    `,
    researchers: [
      'Prof. Yama Dixit',
      'Priya Nair',
      'Rahul Joshi',
    ],
    photos: [
      { file: 'blr_2014_01.jpg', caption: 'Workshop keynote session' },
      { file: 'blr_2014_02.jpg', caption: 'Poster presentations' },
      { file: 'blr_2014_03.jpg', caption: 'Field sampling — Deccan plateau' },
      { file: 'blr_2014_04.jpg', caption: 'Sample preparation in the field' },
      { file: 'blr_2014_05.jpg', caption: 'Group dinner — closing evening' },
    ],
  },
  {
    id: '04',
    title: 'Graph Mining for Knowledge Discovery',
    status: 'Ongoing',
    summary:
      'Extracting structure, communities, and meaningful patterns from large graphs for search, analytics, and decision support.',
    description: `
      Graphs provide a natural representation for relationships in citation networks,
      collaboration graphs, biological systems, and knowledge bases. This project
      focuses on community detection, link prediction, graph embeddings, and scalable
      summarisation techniques that help uncover structure in large networks. We are
      especially interested in methods that remain effective under sparse supervision
      and noisy observations.
    `,
    researchers: [
      'Prof. Yama Dixit',
      'Priya Nair',
      'Rahul Joshi',
    ],
    photos: [],
  },
  {
    id: '05',
    title: 'Graph-Based Tools for Scientific Workflows',
    status: 'Ongoing',
    summary:
      'Creating reusable software tools and visual analytics interfaces for researchers working with graph data.',
    description: `
      Beyond core algorithmic advances, we also build practical tools that make graph
      analysis accessible to non-specialists. This project includes interactive visual
      dashboards, data ingestion utilities, evaluation scripts, and reproducible
      experiment pipelines. The goal is to help users explore their data, compare methods,
      and communicate findings more effectively.
    `,
    researchers: [
      'Prof. Yama Dixit',
      'Priya Nair',
      'Rahul Joshi',
    ],
    photos: [
      { file: 'uk_2017_01.jpg', caption: 'Base camp at 3 800 m' },
      { file: 'uk_2017_02.jpg', caption: 'Glacier terminus mapping' },
    ],
  },
]

/* ── Lightbox ───────────────────────────────────────────────────── */
function Lightbox({ photos, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)
  const src = getProjectImagesPath(photos[current]?.file)

  const prev = useCallback(() => setCurrent(i => Math.max(0, i - 1)), [])
  const next = useCallback(() => setCurrent(i => Math.min(photos.length - 1, i + 1)), [photos.length])

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
      {/* Close — fixed to viewport so it's always visible regardless of panel width */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-[110] w-9 h-9 flex items-center justify-center
                   rounded-full bg-navy-800 text-navy-300 hover:text-white hover:bg-navy-700
                   shadow-lg transition-colors focus:outline-none"
        aria-label="Close lightbox"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="relative max-w-4xl w-full mx-4 bg-navy-900 rounded-2xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >

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

/* ── Single thumbnail ───────────────────────────────────────────── */
function Thumbnail({ file, caption, index, onClick }) {
  const [failed, setFailed] = useState(false)
  const src = getProjectImagesPath(file)
  const showImg = src && !failed

  return (
    <button
      onClick={() => onClick(index)}
      aria-label={caption || `Photo ${index + 1}`}
      className="
        flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden relative group
        border border-cream-200 bg-navy-100
        focus:outline-none focus:ring-2 focus:ring-gold-400
        transition-all duration-200 hover:scale-105 hover:shadow-md
        cursor-pointer
      "
    >
      {showImg ? (
        <img
          src={src}
          alt={caption || file}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-navy-900/5">
          <svg className="w-5 h-5 text-navy-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909" />
          </svg>
        </div>
      )}

      {/* Hover zoom icon overlay */}
      <div className="
        absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/30
        transition-colors duration-200 flex items-center justify-center
      ">
        <span className="
          opacity-0 group-hover:opacity-100 transition-opacity duration-150
          bg-white/90 rounded-full p-1 shadow
        ">
          <svg className="w-3 h-3 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803zM10.5 7.5v6m3-3h-6" />
          </svg>
        </span>
      </div>
    </button>
  )
}

/* ── Scrollable thumbnail strip ─────────────────────────────────── */
const THUMB_SCROLL = 180   // px per arrow click

function ThumbnailStrip({ photos }) {
  const trackRef = useRef(null)
  const [lightbox, setLightbox] = useState(null)   // null | index
  const [atStart, setAtStart] = useState(true)
  const [atEnd,   setAtEnd]   = useState(!photos || photos.length <= 4)

  const updateEdges = () => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * THUMB_SCROLL, behavior: 'smooth' })
    setTimeout(updateEdges, 350)
  }

  // Hide strip entirely when no photos
  if (!photos || photos.length === 0) return null

  const showArrows = photos.length > 4

  return (
    <>
      <div className="mt-6 pt-5 border-t border-cream-100">
        <h3 className="font-sans text-sm font-semibold text-navy-700 uppercase tracking-wider mb-3">
          Images
          <span className="ml-2 font-normal normal-case tracking-normal text-navy-400">
            ({photos.length})
          </span>
        </h3>

        <div className="flex items-center gap-2">
          {/* Left arrow */}
          {showArrows && (
            <button
              onClick={() => scroll(-1)}
              disabled={atStart}
              aria-label="Scroll left"
              className={`
                flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center
                border transition-all duration-150 focus:outline-none
                ${atStart
                  ? 'border-cream-200 text-cream-300 cursor-not-allowed bg-white/60'
                  : 'border-navy-200 text-navy-600 bg-white hover:bg-navy-900 hover:text-white hover:border-navy-900 shadow-sm cursor-pointer'
                }
              `}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Track */}
          <div
            ref={trackRef}
            onScroll={updateEdges}
            className="flex gap-2.5 overflow-x-auto flex-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {photos.map((photo, i) => (
              <Thumbnail
                key={photo.file}
                {...photo}
                index={i}
                onClick={setLightbox}
              />
            ))}
          </div>

          {/* Right arrow */}
          {showArrows && (
            <button
              onClick={() => scroll(+1)}
              disabled={atEnd}
              aria-label="Scroll right"
              className={`
                flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center
                border transition-all duration-150 focus:outline-none
                ${atEnd
                  ? 'border-cream-200 text-cream-300 cursor-not-allowed bg-white/60'
                  : 'border-navy-200 text-navy-600 bg-white hover:bg-navy-900 hover:text-white hover:border-navy-900 shadow-sm cursor-pointer'
                }
              `}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Lightbox portal */}
      {lightbox !== null && (
        <Lightbox
          photos={photos}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <div className="page-enter pt-20 pb-20">
      {/* Page banner */}
      <div className="bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-400 mb-2">Paleoclimate Lab</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold"> Projects</h1>
          <p className="mt-3 font-body text-navy-300 text-lg max-w-xl leading-relaxed">
            A snapshot of the active work being pursued across theory, systems, and applications.
          </p>
        </div>
      </div>

      {/* Project list */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="space-y-8">
          {PROJECTS.map(({ id, title, status, summary, description, researchers, photos }) => (
            <article
              key={id}
              className="card-lift bg-white rounded-2xl shadow-card border border-cream-200 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left visual panel */}
                <div className="w-full lg:w-[30%] bg-gradient-to-br from-navy-900 to-indigo-900 text-white p-8 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-sans font-semibold uppercase tracking-wider text-white/80">
                      {status}
                    </span>
                    <span className="block mt-8 font-display text-5xl font-bold text-gold-400 select-none leading-none">
                      {id}
                    </span>
                  </div>

                  <p className="mt-8 font-body text-white/75 text-sm leading-relaxed">
                    {summary}
                  </p>
                </div>

                {/* Right content */}
                <div className="w-full lg:w-[70%] p-7 sm:p-8">
                  <h2 className="font-display text-2xl font-bold text-navy-800 leading-snug">
                    {title}
                  </h2>

                  <p className="mt-5 font-body text-navy-500 text-base leading-relaxed whitespace-pre-line">
                    {description.trim()}
                  </p>

                  {/* Researchers */}
                  <div className="mt-6">
                    <h3 className="font-sans text-sm font-semibold text-navy-700 uppercase tracking-wider mb-3">
                      Researchers
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {researchers.map(item => (
                        <span
                          key={item}
                          className="inline-block px-3 py-1 bg-cream-100 border border-cream-200 rounded-full text-xs font-sans text-navy-500 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Photos — hidden automatically when photos array is empty */}
                  <ThumbnailStrip photos={photos} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Collaboration CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-cream-100 border border-cream-200 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-semibold text-navy-800">Interested in collaborating on a project?</p>
            <p className="font-body text-navy-500 text-sm mt-1 max-w-2xl">
              We welcome ideas, internships, and research partnerships related to algorithms,
              graph analytics, fairness, and systems work.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-6 py-3 bg-navy-900 text-white font-sans font-semibold text-sm rounded hover:bg-navy-800 transition-colors whitespace-nowrap"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  )
}
