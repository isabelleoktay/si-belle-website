'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSpotify, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { IoMusicalNotes } from 'react-icons/io5';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-8 lg:px-12 xl:px-48 flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center z-50 bg-transparent ${className}`}
    >
      <div className="space-y-4 mb-6 lg:mb-0">
        <h1 className="logo text-6xl lg:text-9xl text-amber-500 sm:text-center font-display font-extrabold tracking-wide">
          <Link href="/" className="hover:text-amber-400 transition">
            SI BELLE
          </Link>
        </h1>
        <div className="hidden lg:flex justify-center space-x-6 text-amber-500">
          {/* Spotify */}
          <a
            href="https://open.spotify.com/artist/5iNc6GGrzMn0gnnWlQMeib"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-amber-400 transition"
          >
            <FaSpotify />
          </a>

          {/* Apple Music */}
          <a
            href="https://music.apple.com/us/artist/si-belle/1645898908"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-amber-400 transition"
          >
            <IoMusicalNotes />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-amber-400 transition"
          >
            <FaInstagram />
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-amber-400 transition"
          >
            <FaTiktok />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UCkOq6m4sfBK2KCcKMZVNWNA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-amber-400 transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      <nav className="space-x-12 text-2xl lg:text-2xl font-semibold text-amber-500 font-serif">
        <Link
          href="/#music"
          className={`${
            pathname === '/music' ? 'text-4xl font-bold' : ''
          } hover:text-amber-400 transition`}
        >
          Music
        </Link>
        <Link
          href="/#video"
          className={`${
            pathname === '/video' ? 'text-4xl font-bold' : ''
          } hover:text-amber-400 transition`}
        >
          Video
        </Link>
        <Link
          href="/#contact"
          className={`${
            pathname === '/contact' ? 'text-4xl font-bold' : ''
          } hover:text-amber-400 transition`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
