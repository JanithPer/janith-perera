import Logo from './Logo';
import Image from 'next/image';
import { socialLinks } from '@/constants/contacts';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-12 px-6 py-24 xl:flex-row xl:justify-evenly">
      <Logo isLogoFooter />

      <ul className="flex flex-wrap gap-12">
        {socialLinks.map((socialLink) => (
          <li key={socialLink.id}>
            {socialLink.download ? (
              <a href={socialLink.path} download>
                <Image
                  src={socialLink.icon}
                  alt={socialLink.alt}
                  width={25}
                  height={25}
                />
                <span className="text-code text-base text-silverchalice">
                  {socialLink.id}
                </span>
              </a>
            ) : (
              <a href={socialLink.path} target="_blank" rel="noopener noreferrer">
                <Image
                  src={socialLink.icon}
                  alt={socialLink.alt}
                  width={25}
                  height={25}
                />
                <span className="text-code text-base text-silverchalice">
                  {socialLink.id}
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;




