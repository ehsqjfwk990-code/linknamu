interface ProfileHeaderProps {
  name: string;
  bio: string;
  imageUrl: string;
}

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="rounded-full bg-gradient-to-br from-white/80 to-white/20 p-1 shadow-[0_12px_30px_-8px_rgba(120,72,32,0.35)] dark:from-white/10 dark:to-white/0 dark:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.55)]">
        {/* eslint-disable-next-line @next/next/no-img-element -- local SVG placeholder, no optimizer needed */}
        <img
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          width={112}
          height={112}
          className="h-28 w-28 rounded-full object-cover ring-1 ring-black/5 dark:ring-white/10"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          {name}
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{bio}</p>
      </div>
    </div>
  );
}
