import { useState } from 'react';
import { MapPin, Heart, Share2, Calendar } from 'lucide-react';

interface DestinationCardProps {
  title: string;
  description: string;
  image: string;
  location: string;
  bestTimeToVisit: string;
  onLike: () => void;
  isLiked: boolean;
}

export const DestinationCard = ({
  title,
  description,
  image,
  location,
  bestTimeToVisit,
  onLike,
  isLiked,
}: DestinationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `Visit ${title}`,
        text: description,
        url: window.location.href,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <button
            onClick={onLike}
            className={`p-2 rounded-full transition-colors duration-300 ${
              isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
            }`}
          >
            <Heart className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} />
          </button>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Best time to visit: {bestTimeToVisit}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={handleShare}
            className="flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>

      {isHovered && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="px-6 py-3 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors duration-300">
            View Details
          </button>
        </div>
      )}
    </div>
  );
}; 