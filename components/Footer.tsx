import {
  FaSpotify,
  FaApple,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa'; // importing the icons

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full text-center py-4 text-sm font-serif text-parchment bg-[#1c332c]">
      <div className="flex justify-center space-x-6">
        {/* Spotify */}
        <a
          href="https://open.spotify.com/artist/5iNc6GGrzMn0gnnWlQMeib"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-cardboard transition"
        >
          <FaSpotify />
        </a>

        {/* Apple Music */}
        <a
          href="https://music.apple.com/us/artist/si-belle/1645898908"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-cardboard transition"
        >
          <FaApple />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-cardboard transition"
        >
          <FaInstagram />
        </a>

        {/* TikTok */}
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-cardboard transition"
        >
          <FaTiktok />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/channel/UCkOq6m4sfBK2KCcKMZVNWNA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-cardboard transition"
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
}
