import { A } from "@solidjs/router";

export default function Nav() {
  return (
    <nav class="bg-blueberry-200 text-white py-5 px-3 flex gap-6 text-base md:text-xl">
      <A href="/">
        <img src="/image/logo.png" class="w-12" />
      </A>
      <div class="flex w-full items-center">
        <ul class="flex gap-0 md:gap-3 italic">
          <li>
            <A href="/what-we-do">What we do</A>
          </li>
          <li>
            <A href="/how-it-works">How it works</A>
          </li>
          <li>
            <A href="/about">About</A>
          </li>
        </ul>
        <A href="/donate" class="ml-auto bg-gold-300 p-3">
          Donate Now!
        </A>
      </div>
    </nav>
  );
}
