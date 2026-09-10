import { ReactNode } from "react";

interface LinkCardProps {
  title: string;
  url: string;
  icon?: ReactNode;
}

export default function LinkCard({ title, url, icon }: LinkCardProps) {
  const isMailto = url.startsWith("mailto:");

  return (
    <a
      href={url}
      {...(!isMailto && { target: "_blank", rel: "noopener noreferrer" })}
      className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-center font-medium text-neutral-800 shadow-[0_4px_20px_-4px_rgba(120,72,32,0.15)] backdrop-blur-md transition duration-200 hover:bg-white/60 hover:shadow-[0_6px_24px_-4px_rgba(120,72,32,0.22)] dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)] dark:hover:bg-white/10"
    >
      {icon && <span className="flex h-5 w-5 shrink-0 items-center justify-center">{icon}</span>}
      {title}
    </a>
  );
}
