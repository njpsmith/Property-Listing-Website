import Link from "next/link";
import { ContentWrapper } from "./ui/layout/content-wrapper/content-wrapper";
import { Button } from "./ui/components/button/button";

export default function Home() {
  return (
    <ContentWrapper>
      <div className="text-left sm:text-center">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black">
          Frontdoor - A Property Listing Website
        </h1>
        <p className="text-lg leading-8 text-zinc-600">
          This is a demo property listing website in the style of Rightmove or
          Zoopla, created by{" "}
          <a
            href="https://nsmith.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-950"
          >
            Nicholas Smith
          </a>
        </p>
        <p>
          Built using Next.js, TypeScript and Tailwind.{" "}
          <a
            href="https://github.com/njpsmith/Property-Listing-Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the code here
          </a>
          .
        </p>
        <hr />

        <div className="text-center">
          <Link href="/properties">
            <Button copy="Search for Properties" arrow={true} />
          </Link>
        </div>
      </div>
    </ContentWrapper>
  );
}
