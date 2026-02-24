import { Profile } from "./Profile.jsx";

export function About() {
  return (
    <section
      id="about"
      className="py-5 px-6 md:px-8 md:py-7 xl:px-16 xl:py-10 flex flex-col m:flex-row-reverse items-center justify-center gap-5 m:gap-24 x:gap-36"
    >
      <Profile></Profile>
      <PersonalInfo></PersonalInfo>
    </section>
  );
}

function PersonalInfo() {
  return (
    <div className="m:max-w-3/5 xl:max-w-188">
      <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[48px]/[64px] font-bold mb-4">
        My name is Maciek and I’m an aspiring
        <span className="text-second"> Frontend developer </span>
        and a keen Star Wars fan.
      </h2>
      <p className="text-gray-400 text-[16px] sm:text-lg md:text-xl xl:text-[24px]/[32px] font-medium mb-8">
        You might be interested in checking the list of my{" "}
        <a className="text-stone-50" href="#skills">
          skills
        </a>
        . Don’t forget to have a glimpse at my{" "}
        <a className="text-stone-50" href="#projects">
          projects
        </a>
        . I’m looking for a new challenges so if you have one -{" "}
        <a className="text-stone-50" href="#contact">
          contact me
        </a>{" "}
        <span className="hidden md:inline">😊</span>
      </p>

      <div className="flex flex-col m:flex-row gap-4 items-start">
        <button className="bg-second text-primary px-4 py-2 rounded-xl text-[20px]/[36px] font-semibold flex flex-row items-center gap-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-primary"
          >
            <path
              d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Get in touch
        </button>

        <button className="bg-primary text-second px-3.5 py-1.5 rounded-xl text-[20px]/[36px] font-semibold flex flex-row items-center gap-3 border-2 border-border">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-second"
          >
            <path
              d="M4.00002 21.8174C4.6026 22 5.41649 22 6.8 22H17.2C18.5835 22 19.3974 22 20 21.8174M4.00002 21.8174C3.87082 21.7783 3.75133 21.7308 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V6.8C2 5.11984 2 4.27976 2.32698 3.63803C2.6146 3.07354 3.07354 2.6146 3.63803 2.32698C4.27976 2 5.11984 2 6.8 2H17.2C18.8802 2 19.7202 2 20.362 2.32698C20.9265 2.6146 21.3854 3.07354 21.673 3.63803C22 4.27976 22 5.11984 22 6.8V17.2C22 18.8802 22 19.7202 21.673 20.362C21.3854 20.9265 20.9265 21.3854 20.362 21.673C20.2487 21.7308 20.1292 21.7783 20 21.8174M4.00002 21.8174C4.00035 21.0081 4.00521 20.5799 4.07686 20.2196C4.39249 18.6329 5.63288 17.3925 7.21964 17.0769C7.60603 17 8.07069 17 9 17H15C15.9293 17 16.394 17 16.7804 17.0769C18.3671 17.3925 19.6075 18.6329 19.9231 20.2196C19.9948 20.5799 19.9996 21.0081 20 21.8174M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Get to know me
        </button>
      </div>
    </div>
  );
}
