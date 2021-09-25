import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

/* Components */
import Blog from "./Blog";
import Socials from "./Socials";

export default function Hero() {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setToggle((toggle) => !toggle), 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${
        toggle
          ? "bg-red-500 dark:bg-gray-900 dark:text-white"
          : "bg-purple-500 dark:bg-gray-900 dark:text-white"
      } transition-colors overflow-hidden w-full`}
    >
      <div className="max-w-7xl mx-auto py-12 space-y-12 md:space-y-24 z-10 px-4 sm:px-6 lg:px-8 pb-12 pt-8 sm:pt-20 lg:pb-24">
        <div className="relative">
          <h1 className="pt-4 sm:text-5xl">
            <div className="overflow-hidden h-10 relative">
              <Title
                fontClass="font-display text-2xl tracking-hero"
                show={toggle}
                text="Hi, I'm"
              />
              <Title
                fontClass="font-display text-2xl tracking-hero"
                show={!toggle}
                text="I build"
              />
            </div>
            <div className="overflow-hidden h-12 sm:h-14 relative">
              <Title
                show={toggle}
                text="Michael"
                fontClass="text-5xl font-display font-bold tracking-hero"
              />
              <Title
                show={!toggle}
                text="Solutions"
                fontClass="text-5xl font-display font-bold tracking-hero"
              />
            </div>
            <div className="overflow-hidden h-12 sm:h-14 relative">
              <Title
                show={toggle}
                text="Roudnitski"
                fontClass="text-5xl font-display font-bold tracking-hero"
              />
              <Title
                show={!toggle}
                text="& Software"
                fontClass="text-5xl font-display font-bold tracking-hero"
              />
            </div>
          </h1>
          <p className="text-xl text-opacity-90 mt-4 sm:mb-2 dark:text-gray-400">
            Software Engineer | Toronto, Canada
          </p>
          <div className="mt-4 flex space-x-4 md:order-2">
            <Socials />
          </div>
        </div>
        <div className="mt-24">
          <Blog />
        </div>
      </div>
    </div>
  );
}

function Title({ show, text, colorClass, fontClass }) {
  return (
    <Transition
      appear={true}
      show={show}
      enter="transition-transform transform ease-in-out duration-1000"
      enterFrom="translate-y-80"
      enterTo="translate-y-0"
      leave="transition-all transform ease-in-out duration-1000"
      leaveFrom="translate-y-0"
      leaveTo="translate-y-80"
    >
      <span className={`block absolute ${colorClass} ${fontClass}`}>
        {text}
      </span>
    </Transition>
  );
}
