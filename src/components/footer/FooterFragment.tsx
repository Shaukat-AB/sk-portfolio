import { GitHubIcon, LinkedInIcon, MailIcon } from '@/lib/icons';
import { Button } from '../ui/button';
import { MailToLink } from '../MailToLink';
import { config } from '@/lib/app-config';

const currentYear = new Date().getFullYear();

export const FooterFragment = () => {
  return (
    <>
      <p className="text-sm text-text-active">
        &copy; {currentYear} /{' '}
        <strong className="font-semibold">Shaukat Ali</strong> / Designed and
        built
      </p>

      <div className="text-text-active flex items-center gap-5">
        <Button
          asChild
          className="p-2 w-10 h-10"
          variant="outline"
          size="equal"
        >
          <a href={config.GITHUB_LINK}>
            <GitHubIcon className="size-5 text-text-active" />
          </a>
        </Button>

        <Button
          asChild
          className="p-2 w-10 h-10"
          variant="outline"
          size="equal"
        >
          <a href={config.LINKEDIN_LINK}>
            <LinkedInIcon className="size-5 text-text-active" />
          </a>
        </Button>

        <MailToLink>
          <Button
            asChild
            className="p-2 w-10 h-10"
            variant="outline"
            size="equal"
          >
            <MailIcon className="size-5" />
          </Button>
        </MailToLink>
      </div>
    </>
  );
};
