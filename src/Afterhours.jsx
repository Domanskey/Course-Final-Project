import gymWebp from "./assets/images/gym.png?format=webp";
import gymAvif from "./assets/images/gym.png?format=avif";
import gymPng from "./assets/images/gym.png";

import gameWebp from "./assets/images/game.png?format=webp";
import gameAvif from "./assets/images/game.png?format=avif";
import gamePng from "./assets/images/game.png";

import musicWebp from "./assets/images/music.png?format=webp";
import musicAvif from "./assets/images/music.png?format=avif";
import musicPng from "./assets/images/music.png";

import starwarsWebp from "./assets/images/starwars.png?format=webp";
import starwarsAvif from "./assets/images/starwars.png?format=avif";
import starwarsPng from "./assets/images/starwars.png";

export function AfterHours() {
  const game = {
    png: gamePng,
    webp: gameWebp,
    avif: gameAvif,
  };

  const music = {
    png: musicPng,
    webp: musicWebp,
    avif: musicAvif,
  };

  const gym = {
    png: gymPng,
    webp: gymWebp,
    avif: gymAvif,
  };

  const starWars = {
    png: starwarsPng,
    webp: starwarsWebp,
    avif: starwarsAvif,
  };

  return (
    <section className="py-5 px-6 md:px-8 md:py-7 xl:px-16 xl:py-10 max-w-360">
      <h2 className="text-[20px]/[24px] tracking-[5%] uppercase text-gray-400 font-semibold mb-4">
        After hours
      </h2>
      <p className="text-[24px]/[31px] tracking-[-2%] mb-10 max-w-2xl xl:text-[40px]/[48px] xl:max-w-216">
        Outside of my regular working hours, I delve into an array of activities
        and passions. Here's a glimpse into how I spend my after-hours.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-15 gap-x-4">
        <Hobby
          title={"Electronic Music"}
          description={
            "Outside of my regular working hours, I immerse myself in the pulsating rhythms and innovative sounds of electronic music"
          }
          image={music}
        ></Hobby>
        <Hobby
          title={"Star Wars Universum"}
          description={
            "In a galaxy not so far away, my leisure time is often spent exploring the intricate lore and captivating tales of Star Wars."
          }
          image={starWars}
        ></Hobby>
        <Hobby
          title={"Video Games"}
          description={
            "Lost in virtual realms, I find joy and challenge in the dynamic world of video games."
          }
          image={game}
        ></Hobby>
        <Hobby
          title={"Strength Training"}
          description={
            "Empowering both body and mind, I'm dedicated to the discipline of strength training, continuously pushing my limits."
          }
          image={gym}
        ></Hobby>
      </div>
    </section>
  );
}

function Hobby({ title, description, image }) {
  return (
    <article>
      <picture>
        <source srcSet={image.avif} type="image/avif" />
        <source srcSet={image.webp} type="image/webp" />
        <img
          className="rounded-[20px] mb-6 w-full"
          src={image.png}
          alt="Profile"
        />
      </picture>
      <h3 className="text-[20px]/[24px] font-semibold tracking-[-2%] mb-1">
        {title}
      </h3>
      <p className="text-[16px]/[24px] text-gray-400">{description}</p>
    </article>
  );
}
