"use client";

import { ReactNode, useEffect, useState } from "react";
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
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(links.map((link) => [link.id, 0]))
  );

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => {
        setCounts((prev) => ({ ...prev, ...data }));
      })
      .catch(() => {});
  }, []);

  const handleCardClick = (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST", keepalive: true }).catch(() => {});
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          url={link.url}
          icon={link.icon}
          count={counts[link.id] ?? 0}
          onClick={() => handleCardClick(link.id)}
        />
      ))}
    </div>
  );
}
