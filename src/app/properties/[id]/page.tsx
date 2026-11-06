import { Suspense } from "react";
import PropertyDetails from "./PropertyDetails";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function PropertyPage({ params }: Props) {
  return (
    <Suspense fallback={<div>Loading property...</div>}>
      <PropertyDetails params={params} />
    </Suspense>
  );
}
