import profileWebp from "./assets/images/profile.png?format=webp";
import profileAvif from "./assets/images/profile.png?format=avif";
import profilePng from "./assets/images/profile.png";

export function Profile() {
  return (
    <picture>
      <source srcSet={profileAvif} type="image/avif" />
      <source srcSet={profileWebp} type="image/webp" />
      <img
        className="rounded-2xl rounded-tr-[200px] -mx-2 m:mx-0 w-[calc(100%+16px)] m:w-full max-w-104"
        src={profilePng}
        alt="Profile"
      />
    </picture>
  );
}
