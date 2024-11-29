import { Match, Switch } from "solid-js";

export default function Index() {
  const num_pulled = Math.floor(Math.random() * 4);

  console.log(num_pulled);

  return (
    <main class="flex flex-col h-svh">
      <div class="w-full h-10 md:h-11 lg:h-20 bg-gold-100" />
      <div class="relative">
        <Switch
          fallback={
            <img
              src="/image/hunger.webp"
              class="saturate-0 w-screen h-[500px] object-cover object-center"
            />
          }
        >
          <Match when={num_pulled == 3}>
            <img
              src="/image/largo.png"
              class="saturate-0 w-screen h-[500px] object-cover object-[0px_-390px]"
            />
          </Match>
        </Switch>
        <div class=" flex flex-col justify-center absolute top-0 right-10 h-full  w-96 text-center text-white bg-slate-200 bg-opacity-40 p-3">
          <p class="text-xl">
            "If you cannot feed a hundred people, then just feed one"
          </p>
          <p class="text-right text-sm">-Mother Teresa</p>
        </div>
      </div>
      <div class="bg-blueberry-200 text-white flex-grow font-serif py-auto flex justify-center">
        <div class="flex items-center gap-96">
          <p class="text-4xl w-96 flex flex-col text-left">
            <span class="text-7xl text-red-600">9.8%</span>
            of the world does not have access to food
          </p>
          <Switch
            fallback={
              <p class="w-96 text-justify text-sm">
                In 2024, more than 786,450,000 people starve to death. Law &
                Order is a Non-profit organization that aims to provide food to
                all 8 billion people globally by 2030.
              </p>
            }
          >
            <Match when={num_pulled == 3}>
              <p class="w-96 text-justify text-sm italic">
                Have you ever had a dream that you, um, you had, your, you- you
                could, you'll do, you- you wants, you, you could do so, you-
                you'll do, you could- you, you want, you want them to do you so
                much you could do anything?
              </p>
            </Match>
          </Switch>
        </div>
      </div>
    </main>
  );
}
