import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/',             label: 'Home'         },
  { to: '/students',     label: 'Students'     },
  { to: '/research',     label: 'Research'     },
  { to: '/publications', label: 'Publications' },
  { to: '/contact',      label: 'Contact Us'   },
]

export default function Navbar() {
  const [open,      setOpen]      = useState(false)
  const [scrolled,  setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-navy-900/98 backdrop-blur-sm shadow-lg shadow-navy-950/30'
          : 'bg-navy-900'}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo / Lab name ── */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            {/* Monogram badge */}
            <span className="
              w-9 h-9 flex items-center justify-center rounded
              bg-gold-400 text-navy-900 font-display font-bold text-lg
              group-hover:bg-gold-500 transition-colors
            ">
              Λ
            </span>
            <div className="leading-tight">
              <p className="text-white font-display font-semibold text-base tracking-wide">DSA Lab</p>
              <p className="text-navy-300 font-sans text-[10px] uppercase tracking-widest">IIT Research Group</p>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link font-sans text-sm font-medium tracking-wide transition-colors pb-0.5
                   ${isActive
                     ? 'text-gold-400 active'
                     : 'text-navy-200 hover:text-white'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 focus:outline-none"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${open ? 'opacity-0'              : ''}`} />
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`
        md:hidden overflow-hidden transition-all duration-300
        ${open ? 'max-h-96 border-t border-navy-700' : 'max-h-0'}
        bg-navy-900
      `}>
        <nav className="flex flex-col px-4 py-3 gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-sans text-sm font-medium py-2.5 px-3 rounded transition-colors
                 ${isActive
                   ? 'text-gold-400 bg-navy-800'
                   : 'text-navy-200 hover:text-white hover:bg-navy-800'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
