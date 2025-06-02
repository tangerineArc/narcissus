import type { ReactNode } from "react";

import {
  Github,
  Globe2,
  Instagram,
  Linkedin,
  TwitterX,
} from "react-bootstrap-icons";

export default function LinkGroup() {
  return (
    <section className="flex flex-wrap gap-x-6 gap-y-2 items-center max-w-[640px]">
      <Social
        url="https://github.com/tangerineArc"
        icon={<Github />}
        name="github.com"
      />
      <Social
        url="https://x.com/tangerine_arc"
        icon={<TwitterX />}
        name="x.com"
      />
      <Social
        url="www.linkedin.com/in/swagatampati"
        icon={<Linkedin />}
        name="linkedin.com"
      />
      <Social
        url="https://www.instagram.com/tangerine._.arc/"
        icon={<Instagram />}
        name="instagram.com"
      />
      <Social
        url="https://www.codingame.com/profile/9069f1f2b38e22aef11c2ecd7aa4ca487548726"
        icon={<Globe2 />}
        name="codingame.com"
      />
      <Social
        url="https://leetcode.com/u/dostoyevsky/"
        icon={<Globe2 />}
        name="leetcode.com"
      />
      <Social
        url="https://www.codechef.com/users/dostoyevsky"
        icon={<Globe2 />}
        name="codechef.com"
      />
    </section>
  );
}

function Social({ url, icon, name }: SocialProps) {
  return (
    <a
      className="flex gap-x-2 items-center w-fit"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span>{name}</span>
    </a>
  );
}

type SocialProps = {
  url: string;
  icon: ReactNode;
  name: string;
};
