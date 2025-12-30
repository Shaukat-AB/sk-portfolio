import {
  CardContent,
  CardDescription,
  CardTitle,
  SocialLinks,
} from '@/components/server';

import { ReactNode } from 'react';

export default function Page() {
  return (
    <>
      <div>
        <div className="page-title space-y-2">
          <h1>Shaukat Ali</h1>
        </div>
        <CardDescription>
          <p className="text-center">Full Stack Engineer</p>
        </CardDescription>
      </div>

      <div className="mx-auto">
        <SocialLinks size="lg" onlyGithubAndEmail />
      </div>

      <CardDescription className="px-4">
        <p>
          Shaukat is a full-stack developer specializing in crafting innovative
          solutions with React.js, Next.js, and the MERN stack. He firmly
          believes that a reliable web presence is essential for any business
          looking to thrive. With expertise in custom web development,
          responsive web design, RESTful APIs, and ongoing maintenance and
          support, he is well-equipped to meet diverse client needs. Shaukat’s
          portfolio highlights projects that reflect his commitment to quality
          and functionality, ensuring each solution is not only effective but
          also scalable for future growth.
        </p>
      </CardDescription>

      <CardTitle className="px-4 md:text-center text-text-active">
        <h2>Technical Skills</h2>
      </CardTitle>

      <div className="px-4 mb-10 flex gap-10 flex-col md:flex-row md:justify-around">
        <CardContent className="space-y-4">
          <CardTitle className="text-base">
            <h3>Programming Languages</h3>
          </CardTitle>

          <SkillListWrapper>
            <li>Python</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </SkillListWrapper>
        </CardContent>

        <CardContent className="space-y-4">
          <CardTitle className="text-base">
            <h3>Frameworks and Tools</h3>
          </CardTitle>

          <SkillListWrapper>
            <li>React.js</li>
            <li>Node.js</li>
            <li>WordPress</li>
            <li>Figma</li>
            <li>Git</li>
          </SkillListWrapper>
        </CardContent>
      </div>
    </>
  );
}

const SkillListWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <CardContent className="px-10">
      <CardDescription>
        <ul className="list-disc space-y-1">{children}</ul>
      </CardDescription>
    </CardContent>
  );
};
