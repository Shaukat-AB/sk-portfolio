import { config } from '@/lib/app-config';
import { ReactNode } from 'react';

export const MailToLink = ({ children }: { children: ReactNode }) => {
  return <a href={`mailto:${config.EMAIL_ADDRESS}`}>{children}</a>;
};
