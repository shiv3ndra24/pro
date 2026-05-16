import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <p className="font-display text-white text-lg font-semibold mb-1">Paleoclimate Lab</p>
            <p className="font-sans text-xs uppercase tracking-widest text-navy-400 mb-3">
              Paleoclimate Lab
            </p>
            <p className="font-body text-sm leading-relaxed text-navy-400">
              Advancing foundational and applied research.
            </p>
          </div>

          {/* Quick links */}
          {/* This section contains quick navigation links to important pages on the site. 
          Update the `to` paths and `label` text to match your site's structure. 
          The `to` field should correspond to the route paths defined in your app. The `label` is the text shown in the footer for each link.
          This is important to ensure your pages are accessible from the footer as well. */}

          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-navy-400 mb-3">Navigation</p>
            <ul className="grid grid-cols-2 gap-2">
              {[
                ['/', 'Home'],
                ['/publications', 'Publications'],
                ['/team', 'Team'],
                ['/projects', 'Projects'],
                ['/research', 'Research'],
                ['/gallery', 'Gallery'],
                ['/facilities', 'Facilities'],
                ['/contact', 'Contact Us'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-sans text-sm text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          {/* This section contains the lab's contact information. Update the address, email, and any other details to reflect your lab's actual contact info. */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-navy-400 mb-3">Contact</p>
            <address className="not-italic font-body text-sm text-navy-400 space-y-1 leading-relaxed">
              <p>4B 11, Third Floor , Block IV</p>
              <p>IIT Delhi</p>
              <p className="mt-2">
                <a href="mailto:dsalab@iit.ac.in" className="text-gold-400 hover:underline">
                  dummy@iit.ac.in
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-xs text-navy-500">
            © {new Date().getFullYear()} Paleoclimate Lab, IIT Delhi. All rights reserved.
          </p>
          <p className="font-sans text-xs text-navy-600 italic">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
