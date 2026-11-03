import Link from "next/link";
import { ContentWrapper } from "./ui/layout/ContentWrapper/ContentWrapper";
import { Button } from "./ui/components/Button/Button";
import Image from "next/image";

export default function NotFound() {
  return (
    <ContentWrapper>
      <div className="text-center">
        <h2 className="text-3xl font-semibold leading-10 tracking-tight text-black">
          404 - Not Found
        </h2>
        <Image
          src="/images/pikachu.png"
          width={1354}
          height={784}
          alt="404 not found"
          className="my-5 mx-auto max-w-100"
        />
        <p>Could not find requested resource.</p>
        <Link href="/">
          <Button copy="Return Home" />
        </Link>
      </div>
    </ContentWrapper>
  );
}
