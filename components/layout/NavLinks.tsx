'use client';

import Link from 'next/link';

const NavLinks = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="mt-16 flex flex-col gap-8 font-silkscreen text-3xl md:mt-0 md:flex-row md:text-sm">
      <button
        className="cursor-pointer py-4 text-left md:py-0 md:hover:opacity-70"
        onClick={scrollToProjects}
      >
        Projects
      </button>

      <Link className="py-4 md:py-0 md:hover:opacity-70" href="/blog">
        Blog
      </Link>
    </nav>
  );
};
export default NavLinks;




