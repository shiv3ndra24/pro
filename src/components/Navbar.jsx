import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from "../assets/iitd_logo.png"

const NAV_LINKS = [
  { to: '/',             label: 'Home'         },
  { to: '/team',     label: 'Our Team'     },
  { to: '/research',     label: 'Research'     },
  { to: '/facilities',     label: 'Facilities'     },
  { to: '/publications', label: 'Publications' },
  { to: '/projects', label: 'Projects' },
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo / Lab name ── */}
          <Link to="/" className="flex items-center gap-4 group" onClick={() => setOpen(false)}>
            {/* Monogram badge */}
            <div className="
              w-12 h-12 rounded overflow-hidden
              bg-white/10
              flex items-center justify-center
            ">
              <img
                src={logo}
                alt="Paleoclimate Lab Logo"
                className="w-full h-full object-cover"
              />
            </div>         
           <div className="leading-tight">
              <p className="text-white font-display font-semibold text-lg tracking-wide">Paleoclimate Lab</p>
              <p className="text-navy-300 font-sans text-xs uppercase tracking-widest">IIT Delhi</p>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-10">
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
            className="md:hidden flex flex-col justify-center gap-[6px] w-10 h-10 focus:outline-none"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${open ? 'opacity-0'              : ''}`} />
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-[9px]' : ''}`} />
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
