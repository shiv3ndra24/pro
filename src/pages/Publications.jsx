import SectionHeader from '../components/SectionHeader'

const PUBLICATIONS = [
  {
    year: '2025',
    venue: 'WWW 2025',
    title: 'PIANO: Probabilistic Influence Analysis on Dynamic Social Networks',
    authors: 'A. Mehta, R. Sharma, S. Verma, and DSA Lab',
    tag: 'Best Paper HM',
  },
  {
    year: '2025',
    venue: 'VLDB',
    title: 'Streaming Graph Sparsification with Sublinear Memory Guarantees',
    authors: 'K. Rao, A. Mehta, and P. Singh',
    tag: 'Systems',
  },
  {
    year: '2024',
    venue: 'NeurIPS',
    title: 'FairRank: Fairness-Aware Ranking using Graph Neural Objectives',
    authors: 'S. Gupta, A. Mehta, and DSA Lab',
    tag: 'AI Ethics',
  },
  {
    year: '2024',
    venue: 'SIGKDD',
    title: 'Adaptive Seed Selection for Influence Maximization using Reinforcement Learning',
    authors: 'R. Sharma, V. Iyer, and A. Mehta',
    tag: 'Graph ML',
  },
  {
    year: '2023',
    venue: 'ICDE',
    title: 'Approximate Query Processing on Dynamic Temporal Graphs',
    authors: 'A. Mehta and T. Banerjee',
    tag: 'Databases',
  },
]

export default function Publications() {
  return (
    <div className="page-enter pt-24">

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="border-b border-cream-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeader
            eyebrow="Research Output"
            title="Publications"
            subtitle="Our research is regularly published at leading international venues across data systems, algorithms, machine learning, and network science."
          />
        </div>
      </section>

      {/* ══════════════════════════════════
          PUBLICATION LIST
      ══════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="space-y-5">

          {PUBLICATIONS.map((paper, idx) => (
            <article
              key={idx}
              className="
                pub-entry
                bg-white
                border border-cream-200
                rounded-lg
                p-6
                shadow-sm
              "
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">

                <span className="
                  inline-block
                  px-2.5 py-1
                  rounded
                  bg-navy-100
                  text-navy-700
                  text-xs
                  font-sans
                  font-semibold
                  uppercase
                  tracking-wider
                ">
                  {paper.venue}
                </span>

                <span className="
                  text-xs
                  uppercase
                  tracking-widest
                  text-navy-400
                  font-sans
                ">
                  {paper.year}
                </span>

                <span className="
                  inline-block
                  px-2.5 py-1
                  rounded
                  bg-gold-400/15
                  text-gold-600
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-wider
                ">
                  {paper.tag}
                </span>

              </div>

              <h3 className="
                text-2xl
                font-display
                font-semibold
                text-navy-900
                leading-snug
              ">
                {paper.title}
              </h3>

              <p className="
                mt-3
                text-sm
                text-navy-500
                font-body
                leading-relaxed
              ">
                {paper.authors}
              </p>

            </article>
          ))}

        </div>

      </section>

    </div>
  )
}