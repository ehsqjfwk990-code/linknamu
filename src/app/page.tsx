import DarkModeToggle from "@/components/DarkModeToggle";
import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";

const profile = {
  name: "손정욱",
  bio: "코스피 상장사 주식회사 피에스컴바인드 대표",
  imageUrl: "/avatar.svg",
};

const links = [
  { id: "1", title: "블로그", url: "https://example.com/blog" },
  { id: "2", title: "인스타그램", url: "https://instagram.com" },
  { id: "3", title: "포트폴리오", url: "https://example.com/portfolio" },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-neutral-50 px-4 py-12 dark:bg-neutral-900">
      <DarkModeToggle />
      <div className="flex w-full max-w-sm flex-col items-center gap-8 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
        <ProfileHeader {...profile} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
