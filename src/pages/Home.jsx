import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

import heroImage from '../assets/hero.png' /* Replace with a photo of the lab or IIT campus for the hero section background. */                   
import profImage from '../assets/people/yama dixit.png' /* Replace with a photo of the PI for the featured card below. Ensure the filename matches exactly and is placed in the specified directory. */

/* =========================
    ── Stat items shown below hero ───────────────────────────────  Update it as per your need
    ======================================*/
const STATS = [
  { value: '12+', label: 'Lab Members'       },
  { value: '40+', label: 'Publications'      },
  { value: '6',   label: 'Active Projects'   },
  { value: '8',   label: 'Industry Partners' },
]

/* =========================
  ── News / recent highlights ────────────────────────────────── Update it as per your need
  ===========================*/
const NEWS = [
  {
    date: 'April 2025',
    tag:  'Award',
    text: 'PIANO paper receives Best Paper Honourable Mention at WWW 2025.',
  },
  {
    date: 'February 2025',
    tag:  'Grant',
  text: 'Paleoclimate Lab awarded a 3-year SERB CRG grant for research in temporal graph analysis.',
  },
  {
    date: 'December 2024',
    tag:  'Conference',
    text: 'Two new PhD students join the lab for Spring 2025 intake.',
  },
  {
    date: 'October 2024',
    tag:  'Talk',
    text: 'Prof. Mehta delivers an invited keynote at ICDM 2024, Abu Dhabi.',
  },
]


export default function Home() {
  return (
    <div className="page-enter">

      {/* ══════════════════════════════════
          HERO (only edit the contents and not the code)
      ══════════════════════════════════ */}
      <section className="relative h-[92vh] min-h-[540px] max-h-[840px] flex items-end overflow-hidden mt-16">

        {/* Background image */}
        <img
          src={heroImage}
          alt="photo of the lab or IIT campus"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 w-full">
          <p className="font-sans text-base uppercase tracking-[0.2em] text-gold-400 mb-4">
            IIT Delhi · Paleoclimate Lab
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Paleoclimate Lab <br className="hidden sm:block" />
          </h1>
          <p className="mt-5 font-body text-lg text-white/80 max-w-xl leading-relaxed">
            Focused on teaching and interdisciplinary research on problems relating to the atmosphere, ocean, climate change, and air pollution.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/research"
              className="px-6 py-3 bg-gold-400 text-navy-900 font-sans font-semibold text-sm rounded hover:bg-gold-500 transition-colors shadow-lg"
            >
              Explore Research
            </Link>
            <Link
              to="/facilities"
              className="px-6 py-3 border border-white/50 text-white font-sans font-medium text-sm rounded hover:bg-white/10 transition-colors"
            >
              Our Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS BAR (Dont touch)
      ══════════════════════════════════ */}
      <section className="bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <dt className="font-display text-4xl font-bold text-gold-400">{value}</dt>
                <dd className="mt-1 font-sans text-sm text-navy-300 uppercase tracking-widest">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ══════════════════════════════════
          WELCOME / ABOUT (only change the text and links, not the code structure or styling)
      ══════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-start">

        {/* Left: about text */}
        <div>
          <SectionHeader
            eyebrow="About the Lab"
            title="Welcome to Paleoclimate Lab"
            subtitle="The Paleoclimate Lab is focused on teaching and interdisciplinary research on problems relating to the atmosphere, ocean, climate change, and air pollution. Established more than forty years ago, the Centre has addressed problems of national importance. The Centre contributes to India and the world through its excellence in scientific and technical education and research. It also serves as a valuable resource for industry and society. Its main mission is to create new knowledge by generating cutting-edge research and to uphold academic growth by offering state-of-the-art undergraduate, post-graduate and doctoral programs."
          />
          <p className="font-body text-navy-500 text-base leading-relaxed mb-5">
            Our work spans theoretical algorithm design—complexity, combinatorics, and
            approximation—through to large-scale systems that process streaming graph data in
            real time. We collaborate closely with industry partners and regularly publish at
            premier venues including SIGKDD, WWW, NeurIPS, VLDB, and ICDE.
          </p>
          <p className="font-body text-navy-500 text-base leading-relaxed">
            The lab is led by <strong className="text-navy-800 font-semibold">Prof. Yama Dixit</strong>,
            and currently hosts doctoral, master's, and undergraduate researchers who share a
            passion for rigorous, impactful atmosphere science.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/team" className="font-sans text-sm font-semibold text-gold-500 hover:text-gold-600 transition-colors flex items-center gap-1">
              Meet the team →
            </Link>
          </div>
        </div>

        {/* Right: quick-link cards + PI profile card below */}
        <div className="flex flex-col gap-6">

          {/* Quick-link cards grid */}
          {/* ==========================================
            Please change the contents as per need 
            ==========================================*/}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: '⬡',
                title: 'Graph Algorithms',
                desc:  'Scalable solutions for connectivity, centrality, and flow on massive networks.',
                to:    '/research',
              },
              {
                icon: '◈',
                title: 'Influence Maximization',
                desc:  'Seed-selection strategies combining combinatorial bounds with deep RL.',
                to:    '/research',
              },
              {
                icon: '▷',
                title: 'Streaming Systems',
                desc:  'Real-time data processing pipelines with provable approximation guarantees.',
                to:    '/research',
              },
              {
                icon: '◎',
                title: 'Fairness in AI',
                desc:  'Algorithmic fairness, bias auditing, and equitable ranking systems.',
                to:    '/research',
              },
            ].map(({ icon, title, desc, to }) => (
              <Link
                key={title}
                to={to}
                className="card-lift bg-white rounded-lg p-5 shadow-card border border-cream-200 block"
              >
                <span className="text-2xl text-gold-400 font-display">{icon}</span>
                <p className="mt-3 font-display font-semibold text-navy-800 text-base">{title}</p>
                <p className="mt-1.5 font-body text-navy-500 text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>

          {/* ── Featured PI Card ───────────────────────────────────── */}
          <Link
            to="/team"
            className="card-lift group block bg-white rounded-2xl shadow-card border border-cream-200 overflow-hidden "
          >

            {/* Large image section */}
            <div className="relative h-[340px] overflow-hidden bg-cream-100">
              <img
                src={profImage}
                alt={'Prof. Yama Dixit'}
                className=" w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500 "
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement.classList.add(
                    'bg-indigo-700',
                    'flex',
                    'items-center',
                    'justify-center'
                  )

                  const span = document.createElement('span')
                  span.className =
                    'text-white font-bold text-6xl select-none font-display'

                  span.textContent = 'Prof. Yama Dixit'
                    .split(' ')
                    .filter(Boolean)
                    .map(w => w[0])
                    .slice(0, 2)
                    .join('')
                    .toUpperCase()

                  e.currentTarget.parentElement.appendChild(span)
                }}
              />
            </div>

            {/* Text section */}
            <div className="px-6 py-5 text-center">
              <p className="
                font-display text-2xl font-bold
                text-navy-800
                group-hover:text-gold-600
                transition-colors
              ">
                Prof. Yama Dixit
              </p>

              <p className="
                mt-1
                font-sans text-xs
                uppercase tracking-[0.22em]
                text-gold-500 font-semibold
              ">
                Main Researcher
              </p>
            </div>
          </Link>

        </div>
      </section>

      {/* ══════════════════════════════════
          NEWS & UPDATES
      ══════════════════════════════════ */}
      <section className="bg-cream-100 border-y border-cream-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeader eyebrow="What's New" title="Lab News & Updates" />
          <ul className="divide-y divide-cream-200">
            {NEWS.map(({ date, tag, text }) => (
              <li key={text} className="py-5 flex flex-col sm:flex-row sm:items-start gap-3">
                <time className="font-sans text-xs text-navy-400 uppercase tracking-wide whitespace-nowrap w-32 pt-0.5 shrink-0">
                  {date}
                </time>
                <span className={`
                  self-start shrink-0 inline-block px-2 py-0.5 rounded text-[10px] font-sans font-bold uppercase tracking-wider
                  ${
                    tag === 'Award'
                      ? 'bg-gold-400/20 text-gold-600'
                      : tag === 'Grant'
                      ? 'bg-navy-100 text-navy-600'
                      : tag === 'Recruitment'
                      ? 'bg-green-100 text-green-700'
                      : tag === 'Talk'
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-violet-100 text-gray-700'
                  }
                `}>{tag}</span>
                <p className="font-body text-navy-700 text-base leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  )
}
