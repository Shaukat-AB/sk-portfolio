import { MailToLink } from './MailToLink';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';

export const ContactCard = () => {
  return (
    <Card className="p-6">
      <CardContent className="max-w-md mx-auto flex flex-col gap-6 text-center">
        <CardTitle>Get in Touch</CardTitle>

        <CardDescription>
          I am here to answer your questions, want to work together or simply
          want to connect? Feel free to reach out.
        </CardDescription>

        <MailToLink>
          <Button asChild className="w-full" variant="secondary" size="sm">
            <span>Email Me</span>
          </Button>
        </MailToLink>
      </CardContent>
    </Card>
  );
};
