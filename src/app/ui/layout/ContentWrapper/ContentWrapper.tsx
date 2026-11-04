import { ReactNode } from "react";

type ContentWrapperProps = {
  children: ReactNode;
};

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <div className="bg-zinc-50 flex flex-col flex-1 items-center justify-center">
      <main className="flex-1 w-full max-w-3xl py-16 px-6 sm:py-32 sm:px-16 bg-white">
        {children}
      </main>
    </div>
  );
};
