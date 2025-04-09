import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className = '', iconClassName = 'h-6 w-6' }: SocialLinksProps) {
  const socialLinks = [
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@wanderlustafrica',
      icon: SiTiktok,
      color: 'hover:text-black'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/wanderlust_african_family',
      icon: Instagram,
      color: 'hover:text-pink-600'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/wanderlustafrica',
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/wanderlustafrica',
      icon: Facebook,
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`text-gray-600 ${item.color} transition-colors duration-300`}
        >
          <item.icon className={iconClassName} />
          <span className="sr-only">{item.name}</span>
        </motion.a>
      ))}
    </div>
  );
} 