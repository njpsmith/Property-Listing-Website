import Link from "next/link";
import { ContentWrapper } from "@/app/ui/layout/ContentWrapper/ContentWrapper";
import { Button } from "@/app/ui/components/Button/Button";
import Image from "next/image";
import { FrownIcon } from "@/app/ui/components/icons/FrownIcon";

export default function NotFound() {
  return (
    <ContentWrapper>
      <div className="text-center">
        <h2 className="text-3xl font-semibold leading-10 tracking-tight text-black">
          Property not found
        </h2>
        <Image
          src="/images/pikachu.png"
          width={1354}
          height={784}
          alt="404 not found"
          className="my-5 mx-auto max-w-100"
        />
        <p>
          Please visit the properties search page to find what you're looking
          for:
        </p>
        <Link href="/properties">
          <Button copy="Go Back" />
        </Link>
      </div>
    </ContentWrapper>
  );
}
