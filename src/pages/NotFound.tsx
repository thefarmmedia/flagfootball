import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Missouri EPIC</title>
      </Helmet>
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-8xl font-black text-brand-red/20 mb-4 select-none">404</div>
          <h1 className="text-3xl font-black text-white mb-3">Page Not Found</h1>
          <p className="text-gray-400 mb-8">
            Looks like that play got broken up. The page you're looking for doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              <Home size={16} />
              Back to Home
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
