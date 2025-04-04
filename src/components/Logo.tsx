import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  isSmall?: boolean;
}

export function Logo({ className = '', isSmall = false }: LogoProps) {
  const size = isSmall ? 'w-8 h-8' : 'w-14 h-14';
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`${size} rounded-full bg-orange-500 flex items-center justify-center relative overflow-hidden cursor-pointer shadow-md hover:bg-orange-600 transition-colors duration-300`}
      >
        <div className="absolute w-full h-1/2 bg-orange-600 top-0"></div>
        <div className="absolute w-6 h-6 bg-white rounded-full transform -translate-y-1/4"></div>
        <div className="absolute w-8 h-1.5 bg-white bottom-4"></div>
      </div>
      {!isSmall && (
        <span className="text-2xl font-bold tracking-tight transition-colors duration-300">
          Wanderlust Africa
        </span>
      )}
    </div>
  );
} 