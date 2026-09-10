interface ProfileHeaderProps {
  name: string;
  bio: string;
  imageUrl: string;
}

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element -- local SVG placeholder, no optimizer needed */}
      <img
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={96}
        height={96}
        className="h-24 w-24 rounded-full object-cover"
      />
      <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
        {name}
      </h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{bio}</p>
    </div>
  );
}
