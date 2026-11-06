import { Suspense } from "react";
import PropertyDetails from "./PropertyDetails";
import { ContentWrapper } from "@/app/ui/layout/ContentWrapper/ContentWrapper";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function PropertyPage({ params }: Props) {
  return (
    <ContentWrapper>
      <Suspense fallback={<div>Loading property...</div>}>
        <PropertyDetails params={params} />
      </Suspense>
    </ContentWrapper>
  );
}
