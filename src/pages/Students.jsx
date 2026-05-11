import SectionHeader from '../components/SectionHeader'

/* ── Data ──────────────────────────────────────────────────────── */
const FACULTY = [
  {
    name:    'Prof. Arun Mehta',
    role:    'Principal Investigator',
    degree:  'Ph.D., IISc Bangalore',
    focus:   'Graph algorithms, influence maximization, algorithmic fairness.',
    email:   'mehta@iit.ac.in',
    initials:'AM',
    color:   'bg-navy-700',
  },
]

const PHD = [
  {
    name:    'MAAAAAAAAA ka BHOsra AAAAAAAAAAAAAAAAAAAAAAAAAAAG',
    role:    'Ph.D. Scholar — 3rd Year',
    degree:  'B.Tech., NIT Trichy',
    focus:   'Temporal graph streaming and incremental shortest-path algorithms.',
    initials:'PN',
    color:   'bg-indigo-700',
  },
  {
    name:    'Divya Sharma',
    role:    'Ph.D. Scholar — 1st Year',
    degree:  'B.E., BITS Pilani',
    focus:   'Fairness-aware ranking algorithms and bias auditing in recommender systems.',
    initials:'DS',
    color:   'bg-rose-700',
  },
  {
    name:    'Rahul Joshi',
    role:    'Ph.D. Scholar — 2nd Year',
    degree:  'B.Tech., IIT Delhi',
    focus:   'Approximate counting and sub-linear graph algorithms for streaming data.',
    initials:'RJ',
    color:   'bg-amber-700',
  },
]

const MASTERS = [
  {
    name:    'Ananya Reddy',
    role:    'M.Tech. Research — CSE',
    degree:  'B.Tech., JNTU Hyderabad',
    focus:   'Seed-selection heuristics for influence maximization in heterogeneous networks.',
    initials:'AR',
    color:   'bg-purple-700',
  },
  {
    name:    'Karthik Suresh',
    role:    'M.Tech. Research — CSE',
    degree:  'B.E., Anna University',
    focus:   'Real-time community detection on dynamic social graphs.',
    initials:'KS',
    color:   'bg-cyan-700',
  },
]

const UNDERGRAD = [
  {
    name:    'Raj Verma',
    role:    'B.Tech. — CSE (Final Year)',
    degree:  'IIT (current)',
    focus:   'Implementing scalable graph partitioning for distributed influence diffusion.',
    initials:'RV',
    color:   'bg-green-700',
  },
  {
    name:    'Sneha Pillai',
    role:    'B.Tech. — CSE (3rd Year)',
    degree:  'IIT (current)',
    focus:   'Visualisation dashboard for temporal network evolution and anomaly detection.',
    initials:'SP',
    color:   'bg-pink-700',
  },
  {
    name:    'Aditya Kumar',
    role:    'B.Tech. — Data Science (Final Year)',
    degree:  'IIT (current)',
    focus:   'Benchmarking graph neural networks on citation and co-authorship networks.',
    initials:'AK',
    color:   'bg-orange-700',
  },
]

/* ── Sub-components ─────────────────────────────────────────────── */

function MemberCard({ name, role, degree, focus, email, initials, color }) {
  return (
    <div className="card-lift bg-white rounded-xl shadow-card border border-cream-200 overflow-hidden flex flex-col">
      {/* Avatar */}
      <div className="flex justify-center pt-8 pb-4">
        <div className={`w-20 h-20 rounded-full ${color} flex items-center justify-center shadow-inner`}>
          <span className="font-display text-2xl font-bold text-white/90">{initials}</span>
        </div>
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
        <GroupSection title="Faculty"                  members={FACULTY}   />
        <GroupSection title="Doctoral Researchers"     members={PHD}       />
        <GroupSection title="Master's Researchers"     members={MASTERS}   />
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
