import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="bg-cream min-h-screen flex flex-col justify-center items-center text-center font-body p-6">
      <h1 className="text-6xl font-heading text-espresso mb-4">404</h1>
      <h2 className="text-2xl text-caramel mb-2">Oops! Page not found.</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        The page you're looking for doesn’t exist or has been moved. But hey — a cup of coffee can fix anything.
      </p>
      <Link to="/" className="bg-caramel text-white px-6 py-3 rounded-lg hover:bg-espresso transition">
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound
