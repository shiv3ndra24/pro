/* Just update the display text below */


export default function Contact() {
  return (
    <div className="page-enter pt-20">

      {/* ══════════════════════════════════
          HERO (dark banner matching Team page)
      ══════════════════════════════════ */}
      <div className="bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-400 mb-2">Get In Touch</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Contact Us</h1>
          <p className="mt-3 font-body text-navy-300 text-lg max-w-xl leading-relaxed">
            We welcome collaborations, student applications, research discussions, and industry partnerships.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════
          CONTACT CONTENT
      ══════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-start">

        {/* ── Left side ── */}
        <div>
          <h2 className="font-display text-3xl font-semibold text-navy-900">
            Paleoclimate Lab
          </h2>

          <p className="
            mt-5
            text-navy-500
            font-body
            leading-relaxed
          ">
            Paleoclimate Lab<br />
            IIT Delhi<br />
            Hauz Khas, New Delhi – 110016<br />
            India
          </p>

          <p className="
            mt-6
            text-navy-600
            font-body
            leading-relaxed
          ">
            Paleoclimate Lab conducts interdisciplinary research in atmospheric physics,
            climate science, air quality, monsoon dynamics, remote sensing,
            environmental modelling, and Earth system processes.
            We welcome academic collaborations, student inquiries,
            and interactions with research and policy communities.
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
                Centre Coordinator
              </p>

              <p className="text-navy-800 font-medium">
                Prof. [Coordinator Name]
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
                href="mailto:cas@iitd.ac.in"
                className="
                  text-gold-600
                  hover:text-gold-700
                  transition-colors
                "
              >
                cas@iitd.ac.in
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
                Block VI, IIT Delhi Campus
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
                Research Areas
              </p>

              <p className="text-navy-700 leading-relaxed">
                Climate Modelling · Aerosols & Air Pollution · Monsoon Dynamics ·
                Atmospheric Chemistry · Remote Sensing · Boundary Layer Meteorology
              </p>
            </div>

          </div>
        </div>

        {/* ── Right side: location map ── */}
        <div className="
          bg-white
          border
          border-cream-200
          rounded-xl
          shadow-sm
          overflow-hidden
          self-start
        ">
          <div className="px-6 pt-6">
            <p className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-navy-400
              font-sans
              mb-3
            ">
              Location
            </p>
          </div>

          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7776867856073!2d77.18912497632691!3d28.546401175711956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df5d552c685%3A0xa102cd7ac7f91541!2sBlock%20IV%2C%20Indian%20Institute%20of%20Technology%20Delhi%2C%20Hauz%20Khas%2C%20New%20Delhi%2C%20Delhi%20110016!5e0!3m2!1sen!2sin!4v1778656464738!5m2!1sen!2sin"
              width="100%"
              height="460"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Paleoclimate Lab IIT Delhi Location"
              className="block"
            />
          </div>
        </div>

      </section>

    </div>
  )
}
