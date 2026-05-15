import SectionHeader from '../components/SectionHeader'
import { Link } from 'react-router-dom'

/* ── Data ──────────────────────────────────────────────────────── */
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
]

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
          {PROJECTS.map(({ id, title, status, summary, description, researchers }) => (
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
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy-800 leading-snug">
                        {title}
                      </h2>
                    </div>
                  </div>

                  <p className="mt-5 font-body text-navy-500 text-base leading-relaxed whitespace-pre-line">
                    {description.trim()}
                  </p>

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
