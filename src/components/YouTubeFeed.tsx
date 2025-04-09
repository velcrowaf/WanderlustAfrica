import { Play } from 'lucide-react';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

export const YouTubeFeed = () => {
  const videos: YouTubeVideo[] = [
    {
      id: '1',
      title: 'Our African Family Adventure',
      thumbnail: 'https://img.youtube.com/vi/R5h8V8u4YGI/maxresdefault.jpg',
      url: 'https://youtube.com/watch?v=R5h8V8u4YGI',
    },
    {
      id: '2',
      title: 'Family Travel in Africa',
      thumbnail: 'https://img.youtube.com/vi/R5h8V8u4YGI/maxresdefault.jpg',
      url: 'https://youtube.com/watch?v=R5h8V8u4YGI',
    },
    {
      id: '3',
      title: 'African Culture & Traditions',
      thumbnail: 'https://img.youtube.com/vi/R5h8V8u4YGI/maxresdefault.jpg',
      url: 'https://youtube.com/watch?v=R5h8V8u4YGI',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <a
          key={video.id}
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <Play className="w-12 h-12 text-white" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-white text-lg font-semibold">{video.title}</h3>
          </div>
        </a>
      ))}
      <a
        href="https://www.youtube.com/@Wanderlustafricanfamily"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center col-span-full mt-8"
      >
        <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300">
          Subscribe to Our Channel
        </button>
      </a>
    </div>
  );
}; 