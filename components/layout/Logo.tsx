import Link from 'next/link';

const Logo = ({ isLogoFooter = false }: { isLogoFooter?: boolean }) => {
  return (
    <Link
      href="/"
      className={`text-code font-bold uppercase ${
        isLogoFooter ? 'text-3xl' : 'text-2xl'
      }`}
    >
      <span className="text-valencia">J</span>
      <span className="text-supernova">A</span>
      <span className="text-cerise">N</span>
      <span className="text-azureradiance">I</span>
      <span className="text-azureradiance">T</span>
      <span className="text-oceangreen">H</span>
      <span className="text-roseofsharon">.</span>
      <span className="text-brickred">P</span>
      <span className="text-tanhide">E</span>
      <span className="text-valencia">R</span>
      <span className="text-supernova">E</span>
      <span className="text-cerise">R</span>
      <span className="text-azureradiance">A</span>
    </Link>
  );
};
export default Logo;




