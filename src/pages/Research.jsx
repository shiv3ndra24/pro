import SectionHeader from '../components/SectionHeader'
import { Link } from 'react-router-dom'

/* ── Data ──────────────────────────────────────────────────────── 
    Update and edit the data accordingly as per your needs 
     ──────────────────────────────────────────────────────── */
const AREAS = [
  {
    id:      '01',
    title:   'Graph Algorithms & Theory',
    tagline: 'Efficient solutions for hard graph problems, from theory to practice.',
    body: `
      Our foundational research addresses classical and novel problems on graphs and networks:
      shortest paths, maximum flow, minimum spanning trees, and connectivity under dynamic
      updates. We design algorithms with provable complexity guarantees and analyse their
      behaviour on real-world sparse and scale-free networks. Recent work focuses on
      sub-linear algorithms that answer structural queries using only a fraction of the input.
    `,
    keywords: ['Dynamic graphs', 'Sub-linear algorithms', 'Approximation schemes', 'Parameterised complexity'],
  },
  {
    id:      '02',
    title:   'Influence Maximization',
    tagline: 'Seeding strategies that maximise information spread across social networks.',
    body: `
      Influence Maximization (IM) asks which k nodes in a social network should be
      activated so that a contagion spreads as widely as possible. Classical greedy
      solutions are expensive; we combine Monte-Carlo sketch techniques with deep
      reinforcement learning to obtain near-optimal seed sets orders of magnitude faster.
      The PIANO framework (see Publications) exemplifies this hybrid approach and has been
      validated on networks with tens of millions of edges.
    `,
    keywords: ['Seed-set selection', 'Deep RL', 'Independent Cascade model', 'Scalability'],
  },
  {
    id:      '03',
    title:   'Streaming Graph Systems',
    tagline: 'Real-time processing of graph data arriving as high-velocity streams.',
    body: `
      Modern applications — fraud detection, traffic routing, social-media monitoring —
      require decisions on graphs that change thousands of times per second. We build
      streaming algorithms and data-structure libraries that maintain graph properties
      (components, densest subgraph, approximate diameter) under insertions and deletions,
      using polylogarithmic memory and amortised constant-time updates wherever possible.
    `,
    keywords: ['Data streams', 'Sliding windows', 'Sketch-based summaries', 'Incremental updates'],
  },
  {
    id:      '04',
    title:   'Fairness & Bias in AI Systems',
    tagline: 'Auditing and correcting algorithmic decisions for equity and transparency.',
    body: `
      As algorithmic decision-making becomes ubiquitous in hiring, lending, and content
      recommendation, ensuring equitable outcomes is critical. We formalise fairness
      constraints for ranking and classification tasks, prove trade-off bounds between
      fairness and utility, and develop post-processing methods that impose fairness
      without retraining models. We collaborate with sociologists and legal scholars on
      real-world deployments and impact assessments.
    `,
    keywords: ['Algorithmic fairness', 'Disparate impact', 'Fair ranking', 'Explainability'],
  },
  {
    id:      '05',
    title:   'Knowledge Graphs & Reasoning',
    tagline: 'Embedding and querying large-scale structured knowledge for AI applications.',
    body: `
      Knowledge graphs encode billions of entities and relationships that power search
      engines, question-answering systems, and biomedical discovery. We research scalable
      embedding methods, link-prediction models, and efficient SPARQL-style query engines
      that support approximate and probabilistic answers. Ongoing projects focus on
      temporal knowledge graphs that evolve as facts change over time.
    `,
    keywords: ['Entity embeddings', 'Link prediction', 'Temporal KGs', 'Graph query languages'],
  },
  {
    id:      '06',
    title:   'Network Epidemiology & Diffusion',
    tagline: 'Modelling information and disease spread on contact networks.',
    body: `
      The COVID-19 pandemic highlighted the need for precise, scalable epidemiological
      simulators. We develop SIR/SIS variant simulators on heterogeneous contact networks
      and study intervention strategies — vaccination, quarantine, information seeding —
      through the lens of combinatorial optimisation. Our tools are open-source and have
      been used by public-health researchers to evaluate real policy options.
    `,
    keywords: ['SIR/SIS models', 'Intervention optimisation', 'Contact tracing', 'Monte Carlo simulation'],
  },
]

/* ── Page ──────────────────────────────────────────────────────── */
/* Only edit the display text and content, nothing else */
export default function Research() {
  return (
    <div className="page-enter pt-20 pb-20">

      {/* Page banner */}
      <div className="bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-400 mb-2">Paleoclimate Lab</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Research Areas</h1>
          <p className="mt-3 font-body text-navy-300 text-lg max-w-xl leading-relaxed">
            Six interconnected themes that span theoretical foundations and real-world
            systems — each driven by open problems with genuine societal relevance.
          </p>
        </div>
      </div>

      {/* Grid of research area cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AREAS.map(({ id, title, tagline, body, keywords }) => (
            <article
              key={id}
              className="card-lift bg-white rounded-xl shadow-card border border-cream-200 overflow-hidden flex flex-col"
            >
              {/* Accent bar */}
              <div className="research-card-accent" />

              <div className="p-7 flex flex-col flex-1">
                {/* Number + title */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-display text-4xl font-bold text-cream-300 leading-none select-none">{id}</span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-navy-800 leading-snug">{title}</h2>
                    <p className="font-sans text-xs text-gold-500 font-semibold mt-0.5">{tagline}</p>
                  </div>
                </div>

                {/* Body */}
                <p className="font-body text-navy-500 text-sm leading-relaxed flex-1 whitespace-pre-line">
                  {body.trim()}
                </p>

                {/* Keywords */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {keywords.map(k => (
                    <span
                      key={k}
                      className="inline-block px-2.5 py-0.5 bg-cream-100 border border-cream-200 rounded text-[11px] font-sans text-navy-500 font-medium"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Collaborators note */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-navy-900 text-white rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-semibold">Interested in collaborating?</p>
            <p className="font-body text-navy-300 text-sm mt-1 max-w-lg">
              We welcome partnerships with industry, government, and other academic institutions.
              Reach out to discuss joint projects, internships, or sponsored research.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-6 py-3 bg-gold-400 text-navy-900 font-sans font-semibold text-sm rounded hover:bg-gold-500 transition-colors whitespace-nowrap"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  )
}
