import { GitHubIcon, LinkedInIcon, MailIcon } from '@/lib/icons';
import { Button } from '../ui/button';
import { MailToLink } from '../MailToLink';
import { config } from '@/lib/app-config';
import { Activity } from 'react';

const currentYear = new Date().getFullYear();

export const FooterFragment = () => {
  return (
    <>
      <p className="text-sm text-text-active">
        &copy; {currentYear} /{' '}
        <strong className="font-semibold">Shaukat Ali</strong> / Designed and
        built
      </p>

      <SocialLinks />
    </>
  );
};

export const SocialLinks = ({
  size = 'sm',
  onlyGithubAndEmail = false,
}: {
  size?: 'sm' | 'md' | 'lg';
  onlyGithubAndEmail?: boolean;
}) => {
  const className = `p-2 size-${size === 'lg' ? 12 : size === 'md' ? 11 : 10}`;
  return (
    <div className="text-text-active flex items-center gap-5">
      <Button
        asChild
        className={className}
        variant="outline"
        size="equal"
        aria-label="Github"
      >
        <a href={config.GITHUB_LINK}>
          <GitHubIcon className="size-5 text-text-active" />
        </a>
      </Button>

      <Activity mode={!onlyGithubAndEmail ? 'visible' : 'hidden'}>
        <Button
          asChild
          className={className}
          variant="outline"
          size="equal"
          aria-label="LinkdIn"
        >
          <a href={config.LINKEDIN_LINK}>
            <LinkedInIcon className="size-5 text-text-active" />
          </a>
        </Button>
      </Activity>

      <MailToLink>
        <Button
          asChild
          className={className}
          variant="outline"
          size="equal"
          aria-label="Send Email"
        >
          <span>
            <MailIcon className="size-5" />
          </span>
        </Button>
      </MailToLink>
    </div>
  );
};
