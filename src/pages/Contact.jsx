import SectionHeader from '../components/SectionHeader'

export default function Contact() {
  return (
    <div className="page-enter pt-24">

      {/* ══════════════════════════════════
          HEADER
      ══════════════════════════════════ */}
      <section className="border-b border-cream-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact Us"
            subtitle="We welcome collaborations, student applications, research discussions, and industry partnerships."
          />
        </div>
      </section>

      {/* ══════════════════════════════════
          CONTACT CONTENT
      ══════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10">

        {/* ── Left side ── */}
        <div>

          <h2 className="
            font-display
            text-3xl
            font-semibold
            text-navy-900
          ">
            Data Systems & Algorithms Lab
          </h2>

          <p className="
            mt-5
            text-navy-500
            font-body
            leading-relaxed
          ">
            Department of Computer Science & Engineering<br />
            Indian Institute of Technology<br />
            New Delhi, India
          </p>

          <div className="mt-8 space-y-5">

            <div>
              <p className="
                text-xs
                uppercase
                tracking-[0.18em]
                text-navy-400
                font-sans
                mb-1
              ">
                Principal Investigator
              </p>

              <p className="text-navy-800 font-medium">
                Prof. Arun Mehta
              </p>
            </div>

            <div>
              <p className="
                text-xs
                uppercase
                tracking-[0.18em]
                text-navy-400
                font-sans
                mb-1
              ">
                Email
              </p>

              <a
                href="mailto:arun.mehta@iit.edu"
                className="
                  text-gold-600
                  hover:text-gold-700
                  transition-colors
                "
              >
                arun.mehta@iit.edu
              </a>
            </div>

            <div>
              <p className="
                text-xs
                uppercase
                tracking-[0.18em]
                text-navy-400
                font-sans
                mb-1
              ">
                Office
              </p>

              <p className="text-navy-700">
                Room 402, CSE Building
              </p>
            </div>

          </div>

        </div>

        {/* ── Contact form ── */}
        <div className="
          bg-white
          border
          border-cream-200
          rounded-xl
          shadow-sm
          p-6 sm:p-8
        ">

          <form className="space-y-5">

            <div>
              <label className="
                block
                text-sm
                font-medium
                text-navy-700
                mb-2
              ">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="
                  w-full
                  rounded
                  border
                  border-cream-300
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-gold-400
                  bg-white
                "
              />
            </div>

            <div>
              <label className="
                block
                text-sm
                font-medium
                text-navy-700
                mb-2
              ">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="
                  w-full
                  rounded
                  border
                  border-cream-300
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-gold-400
                  bg-white
                "
              />
            </div>

            <div>
              <label className="
                block
                text-sm
                font-medium
                text-navy-700
                mb-2
              ">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="
                  w-full
                  rounded
                  border
                  border-cream-300
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-gold-400
                  bg-white
                  resize-none
                "
              />
            </div>

            <button
              type="submit"
              className="
                px-6
                py-3
                rounded
                bg-gold-400
                text-navy-900
                font-semibold
                hover:bg-gold-500
                transition-colors
                shadow-md
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    </div>
  )
}