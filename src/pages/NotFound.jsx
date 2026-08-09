import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <span className="text-7xl font-display font-bold text-primary-300">404</span>
      <h1 className="mt-4 text-2xl font-display font-semibold text-ink">Page not found</h1>
      <p className="mt-2 text-ink-soft max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <FiArrowLeft size={16} /> Back to home
      </Link>
    </div>
  );
};

export default NotFound;
