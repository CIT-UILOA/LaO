export default function Index() {
  return (
    <main class="flex flex-col h-svh">
      <div class="w-full h-10 md:h-11 lg:h-20 bg-gold-100" />
      <div class="relative">
        <img
          src="/hunger.webp"
          class="saturate-0 w-screen h-[500px] object-cover object-center"
        />
        <div class=" flex flex-col justify-center absolute top-0 right-10 h-full  w-96 text-center text-white bg-slate-200 bg-opacity-40 p-3">
          <p class="text-xl">
            "If you cannot feed a hundred people, then just feed one"
          </p>
          <p class="text-right text-sm">-Mother Teresa</p>
        </div>
      </div>
      <div class="bg-blueberry-200 text-center text-white flex-grow font-serif py-auto flex justify-center">
        <div class="flex items-center gap-96">
          <p class="text-4xl w-96">I DONT KNOW WHAT TO PUT HERE :DDD</p>
          <p class="w-96 text-justify text-sm">
            Have you ever had a dream that you, um, you had, your, you- you
            could, you’ll do, you- you wants, you, you could do so, you- you’ll
            do, you could- you, you want, you want them to do you so much you
            could do anything?
          </p>
        </div>
      </div>
    </main>
  );
}
