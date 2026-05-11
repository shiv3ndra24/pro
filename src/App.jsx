import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Students from './pages/Students'
import Research from './pages/Research'
import Publications from './pages/Publications'
import Contact from './pages/Contact'

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
          <Route path="/students"     element={<Students />}     />
          <Route path="/research"     element={<Research />}     />
          <Route path="/publications" element={<Publications />} />
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
