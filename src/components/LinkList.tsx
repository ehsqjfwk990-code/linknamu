import LinkCard from "./LinkCard";

interface LinkItem {
  id: string;
  title: string;
  url: string;
}

interface LinkListProps {
  links: LinkItem[];
}

export default function LinkList({ links }: LinkListProps) {
  return (
    <div className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <LinkCard key={link.id} title={link.title} url={link.url} />
      ))}
    </div>
  );
}
