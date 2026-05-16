import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

import logo from "../assets/iitd_logo.png"

/* ── Main nav links (shown flat in desktop) ── */
const MAIN_LINKS = [
  { to: '/',             label: 'Home'         },
  { to: '/team',         label: 'Our Team'     },
  { to: '/facilities',   label: 'Facilities'   },
  { to: '/publications', label: 'Publications' },
  { to: '/contact',      label: 'Contact Us'   },
]

/* ── Grouped inside the "Explore" dropdown ── */
const DROPDOWN_LABEL = 'Explore'
const DROPDOWN_LINKS = [
  { to: '/research',  label: 'Research'  },
  { to: '/projects',  label: 'Projects'  },
  { to: '/gallery',   label: 'Gallery'   },
]

/* ======================================================= */
export default function Navbar() {
  const [open,          setOpen]          = useState(false)  // mobile drawer
  const [dropOpen,      setDropOpen]      = useState(false)  // desktop dropdown
  const [mobileSubOpen, setMobileSubOpen] = useState(false)  // mobile nested accordion
  const [scrolled,      setScrolled]      = useState(false)

  const dropdownRef = useRef(null)
  const location    = useLocation()

  /* Close dropdowns on route change */
  useEffect(() => {
    setDropOpen(false)
    setOpen(false)
    setMobileSubOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile drawer on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* Close desktop dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  /* Highlight the Explore button when a child route is active */
  const dropdownActive = DROPDOWN_LINKS.some(l => location.pathname === l.to)

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-navy-900/98 backdrop-blur-sm shadow-lg shadow-navy-950/30'
          : 'bg-navy-900'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo / Lab name (acts as home link) ── */}
          <Link to="/" className="flex items-center gap-4 group shrink-0">
            <div className="w-12 h-12 rounded overflow-hidden bg-white/10 flex items-center justify-center">
              <img src={logo} alt="Paleoclimate Lab Logo" className="w-full h-full object-cover" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-display font-semibold text-2xl tracking-wide
                            group-hover:text-gold-400 transition-colors duration-200">
                Paleoclimate Lab
              </p>
              <p className="text-navy-300 font-sans text-base uppercase tracking-widest">IIT Delhi</p>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {MAIN_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link font-sans text-sm lg:text-base font-medium tracking-wide transition-colors pb-0.5
                   ${isActive ? 'text-gold-400 active' : 'text-navy-200 hover:text-white'}`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* ── Explore dropdown ── */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropOpen(o => !o)}
                className={`
                  flex items-center gap-1.5 font-sans text-sm lg:text-base font-medium
                  tracking-wide transition-colors pb-0.5 focus:outline-none cursor-pointer
                  ${dropdownActive ? 'text-gold-400' : 'text-navy-200 hover:text-white'}
                `}
                aria-haspopup="true"
                aria-expanded={dropOpen}
              >
                {DROPDOWN_LABEL}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown panel */}
              <div
                className={`
                  absolute right-0 top-full mt-3 w-44 rounded-lg overflow-hidden
                  bg-navy-800 border border-navy-700
                  shadow-xl shadow-navy-950/40
                  transition-all duration-200 origin-top-right
                  ${dropOpen
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-95 pointer-events-none'}
                `}
              >
                {DROPDOWN_LINKS.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 font-sans text-lg font-medium transition-colors
                       ${isActive
                         ? 'text-gold-400 bg-navy-700'
                         : 'text-navy-200 hover:text-white hover:bg-navy-700'}`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden flex flex-col justify-center gap-[6px] w-10 h-10 focus:outline-none"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[9px]'  : ''}`} />
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${open ? 'opacity-0'                     : ''}`} />
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`
        md:hidden overflow-hidden transition-all duration-300
        ${open ? 'max-h-[36rem] border-t border-navy-700' : 'max-h-0'}
        bg-navy-900
      `}>
        <nav className="flex flex-col px-4 py-3 gap-1">

          {/* Flat main links */}
          {MAIN_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-sans text-base font-medium py-2.5 px-3 rounded transition-colors
                 ${isActive
                   ? 'text-gold-400 bg-navy-800'
                   : 'text-navy-200 hover:text-white hover:bg-navy-800'}`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* ── Mobile nested accordion ── */}
          <div>
            <button
              onClick={() => setMobileSubOpen(o => !o)}
              className={`
                w-full flex items-center justify-between
                font-sans text-base font-medium py-2.5 px-3 rounded transition-colors
                ${dropdownActive || mobileSubOpen
                  ? 'text-gold-400 bg-navy-800'
                  : 'text-navy-200 hover:text-white hover:bg-navy-800'}
              `}
              aria-expanded={mobileSubOpen}
            >
              <span>{DROPDOWN_LABEL}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileSubOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Sub-links with indent + vertical rule */}
            <div className={`overflow-hidden transition-all duration-300 ${mobileSubOpen ? 'max-h-64' : 'max-h-0'}`}>
              <div className="ml-4 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-navy-700 pl-3">
                {DROPDOWN_LINKS.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `font-sans text-sm font-medium py-2 px-3 rounded transition-colors
                       ${isActive
                         ? 'text-gold-400 bg-navy-800'
                         : 'text-navy-300 hover:text-white hover:bg-navy-800'}`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

        </nav>
      </div>
    </header>
  )
}
