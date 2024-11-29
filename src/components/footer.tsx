import { useLocation } from "@solidjs/router";

export default function Footer() {
  return (
    <footer
      class={`${
        useLocation().pathname == "/"
          ? "bg-blueberry-200 text-white"
          : "bg-inherit text-inherit"
      } text-center`}
    >
      <p>
        Law & Order © 2024 • Made with ♥ by{" "}
        <a
          class="underline text-gold-300"
          target="_blank"
          href="https://github.com/Kiwifuit"
        >
          Ivan Leonard O Aparte
        </a>
      </p>
    </footer>
  );
}
