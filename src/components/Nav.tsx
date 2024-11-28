export default function Nav() {
  return (
    <nav class="bg-blueberry-200 text-white py-5 px-3 flex gap-6">
      <img src="/logo.png" class="w-12" />
      <div class="flex w-full items-center">
        <ul class="flex gap-3 text-xl italic">
          <li>What we do</li>
          <li>How it works</li>
          <li>About</li>
        </ul>
        <p class="ml-auto bg-gold-300 p-3">Donate Now!</p>
      </div>
    </nav>
  );
}
