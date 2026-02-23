import profileWebp from "./assets/images/profile.png?format=webp";
import profileAvif from "./assets/images/profile.png?format=avif";
import profilePng from "./assets/images/profile.png";

export function Profile() {
  return (
    <picture>
      <source srcSet={profileAvif} type="image/avif" />
      <source srcSet={profileWebp} type="image/webp" />
      <img src={profilePng} alt="Profile" />
    </picture>
  );
}
