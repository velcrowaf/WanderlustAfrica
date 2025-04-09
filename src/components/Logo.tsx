import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-bold text-primary">Wanderlust Africa</span>
    </Link>
  );
}; 