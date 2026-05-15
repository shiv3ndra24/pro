import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { Link } from 'react-router-dom'

/* ── Facility image lookup ─────────────────────────────────────────
   Put your images in: src/assets/facilities/
   Example filenames used below: facility-1.jpg, facility-2.jpg, etc.
   If an image is missing, the card falls back to a styled placeholder.
   ──────────────────────────────────────────────────────────────── */
const facilityImages = import.meta.glob(
  '../assets/facilities/*',
  { eager: true, import: 'default' }
)

function getFacilityPath(filename) {
  if (!filename) return null
  return facilityImages[`../assets/facilities/${filename}`] || null
}

/* ── Facility data ────────────────────────────────────────────────
   Update the titles, descriptions, and image filenames to match your lab.
   Each item is rendered as a horizontal block with image on the left and
   text on the right on larger screens.
   ──────────────────────────────────────────────────────────────── */
const FACILITIES = [
  {
    id: '01',
    title: 'Computing Workstation Cluster',
    description:
      'A dedicated set of high-performance workstations for training models, running simulations, and analysing large experimental datasets. The setup supports day-to-day research tasks, reproducible experimentation, and collaborative work across projects.',
    image: 'facility-1.jpg',
  },
  {
    id: '02',
    title: 'Visualization and Analysis Corner',
    description:
      'A shared environment for reviewing results, presenting findings, and comparing outputs across experiments. It is designed to make iterative analysis easier with large screens, collaborative discussion space, and quick access to project material.',
    image: 'facility-2.jpg',
  },
  {
    id: '03',
    title: 'Data Collection / Field Support Equipment',
    description:
      'Portable equipment used for collecting, logging, and organising data where experiments extend beyond the main lab space. This section can describe sensors, instruments, or field kits that support your research workflow.',
    image: 'facility-3.jpg',
  },
  {
    id: '04',
    title: 'Reading and Reference Resources',
    description:
      'A resource area for papers, books, reports, and archived project material. It supports literature review, background study, and long-form research reading for students across all levels.',
    image: 'facility-4.jpg',
  },
]



/* DONT TOUCH */
/* ── Facility image card ────────────────────────────────────────── */
function FacilityVisual({ title, image }) {
  const [imgFailed, setImgFailed] = useState(false)
  const src = getFacilityPath(image)
  const showImage = Boolean(src) && !imgFailed

  return (
    <div className="w-full md:w-[36%] lg:w-[32%] min-h-[220px] md:min-h-[260px] relative overflow-hidden rounded-2xl bg-cream-100 border border-cream-200">
      {showImage ? (
        <img
          src={src}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain object-center"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy-900 to-indigo-900 text-white p-6 text-center">
          <span className="font-display text-5xl font-bold text-gold-400 select-none">✦</span>
          <p className="mt-4 font-sans text-xs uppercase tracking-[0.18em] text-white/70">
            Facility image
          </p>
          <p className="mt-2 font-display text-lg font-semibold leading-snug max-w-xs">
            {title}
          </p>
        </div>
      )}
    </div>
  )
}

/* ── Facility block ─────────────────────────────────────────────── */
function FacilityBlock({ id, title, description, image }) {
  return (
    <article className="card-lift bg-white rounded-2xl shadow-card border border-cream-200 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <FacilityVisual title={title} image={image} />

        <div className="flex-1 p-6 sm:p-7 md:p-8">
          <div className="flex items-start gap-4">
            <span className="font-display text-4xl font-bold text-cream-300 leading-none select-none shrink-0">
              {id}
            </span>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-800 leading-snug">
                {title}
              </h2>
              <p className="mt-2 font-body text-navy-500 text-base leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

/* ── Page ───────────────────────────────────────────────────────── */
/* Only update the display text below */

export default function Facilities() {
  return (
  <div className="page-enter pt-20 pb-20">
      {/* Page banner */}
      <div className="bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-400 mb-3">
            Paleoclimate Lab
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            Facilities
          </h1>
          <p className="mt-3 font-body text-navy-300 text-lg max-w-2xl leading-relaxed">
            A quick overview of the equipment, spaces, and shared resources that support
            research, learning, and day-to-day work in the lab.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <SectionHeader
          eyebrow="Lab Resources"
          title="Tools and spaces available to our researchers"
          subtitle="Each facility block below is arranged horizontally, with the image on the left and the title and description on the right. Replace the placeholder text and images with your actual lab equipment or spaces."
        />
      </div>

      {/* Facility list */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-6">
        {FACILITIES.map((facility) => (
          <FacilityBlock key={facility.id} {...facility} />
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-cream-100 border border-cream-200 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-semibold text-navy-800">
              Need access to a facility?
            </p>
            <p className="font-body text-navy-500 text-sm mt-1 max-w-xl">
              Reach out to the lab team for booking, supervision, or any operational details.
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
