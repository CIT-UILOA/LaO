import { useLocation } from "@solidjs/router";

export default function Footer() {
  return (
    <footer
      class={`${
        useLocation().pathname == "/"
          ? "bg-blueberry-200 text-white"
          : "bg-inherit text-inherit"
      } text-center py-5`}
    >
      <p>
        Law & Order © 2024 • Made with <i class="nf nf-fa-heart text-red-600" />{" "}
        by{" "}
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
