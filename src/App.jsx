import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Team from './pages/Team'
import Research from './pages/Research'
import Facilities from './pages/facility'
import Publications from './pages/Publications'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

/* Add import statements for new pages here and add corresponding <Route> entries in the <Routes> block below. */

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"             element={<Home />}         />
          <Route path="/team"     element={<Team />}     />
          <Route path="/research"     element={<Research />}     />
          <Route path="/facilities"     element={<Facilities />}     />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact"      element={<Contact />}      />
          {/* 404 fallback */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
              <p className="font-display text-8xl font-bold text-navy-200">404</p>
              <p className="mt-4 text-xl text-navy-500 font-sans">Page not found.</p>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
