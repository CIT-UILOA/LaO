// import {Title} from "@solidjs/meta";

import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="grid p-4">
      <Title>Page not Found</Title>
      <div class="m-auto text-center leading-relaxed">
        <h1 class="text-8xl font-extralight">Page not found</h1>
        <p class="italic">Justice is always best served equally</p>
        <p class="text-blueberry-400">
          <A href="/">Return to Homepage</A>
        </p>
      </div>
    </main>
  );
}
