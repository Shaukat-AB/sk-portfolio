import { ReactNode } from 'react';

export const ProjectsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-10 max-w-3xl">
      {children}
    </div>
  );
};
