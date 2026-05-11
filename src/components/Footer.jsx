import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <p className="font-display text-white text-lg font-semibold mb-1">DSA Lab</p>
            <p className="font-sans text-xs uppercase tracking-widest text-navy-400 mb-3">
              Data Systems &amp; Algorithms
            </p>
            <p className="font-body text-sm leading-relaxed text-navy-400">
              Advancing foundational and applied research at the intersection of algorithms,
              networks, and artificial intelligence.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-navy-400 mb-3">Navigation</p>
            <ul className="space-y-2">
              {[
                ['/students', 'Students'],
                ['/research', 'Research'],
                ['/publications', 'Publications'],
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
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-navy-400 mb-3">Contact</p>
            <address className="not-italic font-body text-sm text-navy-400 space-y-1 leading-relaxed">
              <p>Room 312, Dept. of Computer Science &amp; Engineering</p>
              <p>Indian Institute of Technology</p>
              <p className="mt-2">
                <a href="mailto:dsalab@iit.ac.in" className="text-gold-400 hover:underline">
                  dsalab@iit.ac.in
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-xs text-navy-500">
            © {new Date().getFullYear()} DSA Lab, IIT. All rights reserved.
          </p>
          <p className="font-sans text-xs text-navy-600 italic">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
