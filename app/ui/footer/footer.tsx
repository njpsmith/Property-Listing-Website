export const Footer = () => {
  return (
    <footer className="py-8 px-4 text-center">
      <p>
        Built by{" "}
        <a
          href="https://nsmith.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nicholas Smith
        </a>
        .
      </p>
      <p>
        Built with Next.js and Tailwind CSS. The code for this site can be found{" "}
        <a
          href="https://github.com/njpsmith/Property-Listing-Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
