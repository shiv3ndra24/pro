// ...existing code... (SectionHeader removed in favor of a dark banner)

// ======================== update the publications and add their https links
// =========================================================================

//remove research paper entries or copy-paste the below object and fill in the details for new publications. Make sure to add the https links for each paper to make them clickable and accessible to visitors.

const PUBLICATIONS = [
  {
    year: '2025',
    venue: 'WWW 2025',
    title: 'PIANO: Probabilistic Influence Analysis on Dynamic Social Networks',
  authors: 'A. Mehta, R. Sharma, S. Verma, and Paleoclimate Lab',
    tag: 'Best Paper HM',
    link: 'https://www.iitd.ac.in', // replace with the actual paper URL
  },
  {
    year: '2025',
    venue: 'VLDB',
    title: 'Streaming Graph Sparsification with Sublinear Memory Guarantees',
    authors: 'K. Rao, A. Mehta, and P. Singh',
    tag: 'Systems',
    link: '', // replace with the actual paper URL
  },
  {
    year: '2024',
    venue: 'NeurIPS',
    title: 'FairRank: Fairness-Aware Ranking using Graph Neural Objectives',
  authors: 'S. Gupta, A. Mehta, and Paleoclimate Lab',
    tag: 'AI Ethics',
    link: '', // replace with the actual paper URL
  },
  {
    year: '2024',
    venue: 'SIGKDD',
    title: 'Adaptive Seed Selection for Influence Maximization using Reinforcement Learning',
    authors: 'R. Sharma, V. Iyer, and A. Mehta',
    tag: 'Graph ML',
    link: '', // replace with the actual paper URL
  },
  {
    year: '2023',
    venue: 'ICDE',
    title: 'Approximate Query Processing on Dynamic Temporal Graphs',
    authors: 'A. Mehta and T. Banerjee',
    tag: 'Databases',
    link: '', // replace with the actual paper URL
  },
]

export default function Publications() {
  return (
    <div className="page-enter pt-20">

      {/* ══════════════════════════════════
          HERO (dark banner matching Team page)
      ══════════════════════════════════ */}
      <div className="bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-400 mb-2">Research Output</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Publications</h1>
          <p className="mt-3 font-body text-navy-300 text-lg max-w-xl leading-relaxed">
            Our research is regularly published at leading international venues across data systems, algorithms, machine learning, and network science.
          </p>
        </div>
      </div>


      {/* ══════════════════════════════════
          Dont Modify anything in the below section !!!
      ══════════════════════════════════ */}

      {/* ══════════════════════════════════
          PUBLICATION LIST
      ══════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="space-y-5">

          {PUBLICATIONS.map((paper, idx) => {
            const Card = paper.link ? 'a' : 'article'
            const cardProps = paper.link
              ? {
                  href: paper.link,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  title: `Open ${paper.title}`,
                }
              : {}

            return (
            <Card
              key={idx}
              {...cardProps}
              className={`
                pub-entry
                bg-white
                border border-cream-200
                rounded-lg
                p-6
                shadow-sm
                block
                ${paper.link ? 'cursor-pointer transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md' : ''}
              `}
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

            </Card>
            )
          })}

        </div>

      </section>

    </div>
  )
}