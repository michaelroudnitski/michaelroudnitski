import { useState, useEffect, useCallback } from "react";
import { Transition } from "@headlessui/react";

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
          ? "bg-red-500 dark:bg-gray-900 dark:text-gray-200"
          : "bg-purple-500 dark:bg-gray-900 dark:text-blue-200"
      } transition-colors overflow-hidden w-full`}
    >
      <div className="flex flex-col sm:flex-row justify-between relative z-10 px-4 sm:px-6 lg:px-8 pb-12 pt-8 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="relative">
          <img
            className="rounded-full dark:opacity-75 h-20"
            src="/mroudnitski.jpeg"
            alt="Illustration of Michael Roudnitski"
          />
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
                text="w/ Software"
                fontClass="text-5xl font-display font-bold tracking-hero"
              />
            </div>
          </h1>
          <p className="max-w-lg my-2 text-xl text-opacity-90 mt-4 sm:mt-6 sm:mb-2">
            Software Engineer | Toronto, Canada 🇨🇦
          </p>
          <div className="flex">TODO: Add social media links</div>
        </div>

        <div>TODO: Latest blog post from dev.to</div>
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
