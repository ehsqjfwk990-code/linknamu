import { ReactNode } from "react";
import LinkCard from "./LinkCard";

interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon?: ReactNode;
}

interface LinkListProps {
  links: LinkItem[];
}

export default function LinkList({ links }: LinkListProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard key={link.id} title={link.title} url={link.url} icon={link.icon} />
      ))}
    </div>
  );
}
