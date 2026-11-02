import { ReactNode } from "react";

type ContentWrapperProps = {
  children: ReactNode;
};

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <div className="bg-zinc-50 flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        {children}
      </main>
    </div>
  );
};
