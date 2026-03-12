import profileWebp from "../assets/images/profile.png?format=webp&width=832";
import profileAvif from "../assets/images/profile.png?format=avif&width=832";
import profilePng from "../assets/images/profile.png";

export function Profile() {
  return (
    <picture>
      <source srcSet={profileAvif} type="image/avif" />
      <source srcSet={profileWebp} type="image/webp" />
      <img
        width={832}
        height={918}
        fetchpriority="high"
        className="rounded-2xl aspect-[0.91] rounded-tr-[200px] -mx-2 m:mx-0 w-[calc(100%+16px)] m:w-full m:min-w-104 max-w-104"
        src={profilePng}
        alt="Profile"
      />
    </picture>
  );
}
