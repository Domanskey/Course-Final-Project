export function Projects() {
  //   const username = "Domanskey";

  //   fetch()

  return (
    <section
      id="projects"
      className="py-5 px-6 md:px-8 md:py-7 xl:px-16 xl:py-10 max-w-360 w-full"
    >
      <h2 className="text-[20px]/[24px] tracking-[5%] uppercase text-gray-400 font-semibold mb-4">
        Recent projects
      </h2>
      <p className="text-[24px]/[31px] tracking-[-2%] mb-10 max-w-2xl xl:text-[40px]/[48px] xl:max-w-216">
        Since diving into frontend development in 2023, I've brought a range of
        projects to life. Here's a snapshot of my accomplishments so far.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </div>
    </section>
  );
}

function Project() {
  return (
    <article className="group backdrop-blur-xs bg-linear-to-br from-white/10 to-white/4 inset-shadow-white/15 inset-shadow-2xs rounded-[20px] max-w-162">
      <div className="flex flex-row gap-1.5 items-center p-4 h-11 bg-linear-to-br from-white/10 to-white/4 rounded-t-[20px] border-b border-primary inset-shadow-white/15 inset-shadow-2xs ">
        <div className="group-hover:bg-red-500 w-3 h-3 bg-primary rounded-full bg-linear-to-br from-white/10 to-white/4"></div>
        <div className="group-hover:bg-amber-500 w-3 h-3 bg-primary rounded-full bg-linear-to-br from-white/10 to-white/4"></div>
        <div className="group-hover:bg-lime-600 w-3 h-3 bg-primary rounded-full bg-linear-to-br from-white/10 to-white/4"></div>
      </div>
      <div className="p-5 sm:p-7 xl:p-10">
        <header className="flex flex-row gap-4 items-center mb-4">
          <h3 className="text-[24px]/[24px] font-semibold">simple-editor</h3>
          <div className="flex flex-row gap-0.5 px-2 py-1 rounded-sm bg-small-background/10">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-gray-400"
            >
              <path
                d="M11.2788 3.45357C11.5092 2.98663 11.6245 2.75316 11.7809 2.67856C11.917 2.61366 12.0752 2.61366 12.2113 2.67856C12.3678 2.75316 12.483 2.98663 12.7135 3.45357L14.9002 7.88353C14.9682 8.02138 15.0022 8.09031 15.0519 8.14383C15.096 8.19121 15.1488 8.2296 15.2074 8.25687C15.2737 8.28767 15.3497 8.29879 15.5018 8.32102L20.3931 9.03596C20.9082 9.11124 21.1657 9.14888 21.2849 9.27469C21.3886 9.38414 21.4373 9.53455 21.4176 9.68402C21.3949 9.85583 21.2085 10.0374 20.8356 10.4006L17.2975 13.8466C17.1873 13.954 17.1321 14.0078 17.0965 14.0717C17.065 14.1282 17.0448 14.1904 17.037 14.2547C17.0282 14.3273 17.0412 14.4032 17.0672 14.5549L17.9021 19.4224C17.9901 19.9358 18.0341 20.1924 17.9514 20.3447C17.8794 20.4772 17.7515 20.5702 17.6032 20.5977C17.4327 20.6293 17.2022 20.5081 16.7412 20.2656L12.3685 17.966C12.2322 17.8944 12.1641 17.8586 12.0923 17.8445C12.0288 17.832 11.9634 17.832 11.8999 17.8445C11.8281 17.8586 11.76 17.8944 11.6238 17.966L7.25101 20.2656C6.79001 20.5081 6.5595 20.6293 6.38906 20.5977C6.24077 20.5702 6.11281 20.4772 6.04083 20.3447C5.95809 20.1924 6.00212 19.9358 6.09016 19.4224L6.92498 14.5549C6.951 14.4032 6.96402 14.3273 6.95521 14.2547C6.94741 14.1904 6.9272 14.1282 6.8957 14.0717C6.86011 14.0078 6.80497 13.954 6.69468 13.8466L3.15665 10.4006C2.78375 10.0374 2.5973 9.85583 2.57462 9.68402C2.55488 9.53455 2.60364 9.38414 2.70734 9.27469C2.82653 9.14888 3.08406 9.11124 3.59913 9.03596L8.4904 8.32102C8.64251 8.29879 8.71857 8.28767 8.78481 8.25687C8.84345 8.2296 8.89625 8.19121 8.94028 8.14383C8.99 8.09031 9.02402 8.02138 9.09206 7.88353L11.2788 3.45357Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[16px]/[16px] text-gray-400">27</p>
          </div>
        </header>
        <p className="mb-4 text-gray-400 text-[20px]/[24px] line-clamp-7 sm:line-clamp-4">
          Phasellus dolor. In dui magna, posuere eget, vestibulum et, tempor
          auctor, justo fringilla mauris sit amet nibh. Suspendisse pulvinar,
          augue ac venenatis condimentum, sem libero volutpat...
        </p>
        <ul className="flex flex-row gap-2 mb-10">
          <li className="rounded-sm text-[14px]/[18px] font-semibold px-2 py-1 bg-small-background/10">
            HTML
          </li>
          <li className="rounded-sm text-[14px]/[18px] font-semibold px-2 py-1 bg-small-background/10">
            CSS
          </li>
          <li className="rounded-sm text-[14px]/[18px] font-semibold px-2 py-1 bg-small-background/10">
            TypeScript
          </li>
          <li className="rounded-sm text-[14px]/[18px] font-semibold px-2 py-1 bg-small-background/10">
            React
          </li>
        </ul>
        <div className="flex flex-col gap-4 items-start">
          <button className="bg-primary px-5 py-4 rounded-xl text-second text-[16px]/[24px] font-semibold flex flex-row gap-2 border border-border">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-second"
            >
              <path
                d="M22 9H2M2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            View demo
          </button>
          <button className="bg-primary px-5 py-4 rounded-xl text-second text-[16px]/[24px] font-semibold flex flex-row gap-2 border border-border">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-second"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0267 2C6.51773 2 2.05273 6.465 2.05273 11.974C2.05273 16.38 4.90973 20.119 8.87373 21.439C9.37273 21.529 9.55273 21.222 9.55273 20.958C9.55273 20.721 9.54473 20.093 9.54173 19.262C6.76673 19.864 6.18073 17.924 6.18073 17.924C5.72873 16.772 5.07373 16.465 5.07373 16.465C4.16873 15.846 5.14273 15.86 5.14273 15.86C6.14473 15.93 6.66973 16.888 6.66973 16.888C7.55973 18.412 9.00573 17.972 9.57173 17.717C9.66273 17.072 9.92273 16.632 10.2067 16.383C7.99273 16.132 5.66473 15.276 5.66473 11.453C5.66473 10.366 6.05373 9.474 6.68873 8.778C6.58773 8.525 6.24273 7.51 6.78773 6.138C6.78773 6.138 7.62473 5.869 9.52973 7.159C10.3277 6.938 11.1787 6.827 12.0257 6.823C12.8747 6.827 13.7267 6.938 14.5217 7.159C16.4277 5.868 17.2637 6.138 17.2637 6.138C17.8087 7.51 17.4667 8.525 17.3627 8.778C18.0027 9.474 18.3867 10.365 18.3867 11.453C18.3867 15.286 16.0567 16.128 13.8347 16.375C14.1897 16.683 14.5097 17.291 14.5097 18.221C14.5097 19.555 14.4977 20.631 14.4977 20.958C14.4977 21.225 14.6757 21.535 15.1847 21.437C19.1467 20.115 22.0007 16.379 22.0007 11.974C22.0007 6.465 17.5357 2 12.0267 2Z"
              />
            </svg>
            Source code
          </button>
        </div>
      </div>
    </article>
  );
}
