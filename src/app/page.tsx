import DarkModeToggle from "@/components/DarkModeToggle";
import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { LinkedInIcon, InstagramIcon } from "@/components/icons";

const profile = {
  name: "손정욱(Jung Wook Son)",
  bio: "글로벌 스타트업 퍼즐링 대표",
  imageUrl: "/profile.jpg",
};

const links = [
  {
    id: "1",
    title: "링크드인",
    url: "https://www.linkedin.com/in/jung-wook-son-984232386/",
    icon: <LinkedInIcon />,
  },
  {
    id: "2",
    title: "인스타그램",
    url: "https://www.instagram.com/lookingyou_99/",
    icon: <InstagramIcon />,
  },
  {
    id: "3",
    title: "이메일",
    url: "mailto:son230499@naver.com",
    icon: <span aria-hidden="true">📧</span>,
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-orange-50 via-amber-50 to-rose-100 px-6 py-20 dark:from-stone-950 dark:via-neutral-900 dark:to-stone-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.5),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />
      <DarkModeToggle />
      <div className="relative flex w-full max-w-sm flex-col items-center gap-10">
        <ProfileHeader {...profile} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
