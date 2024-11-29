import { createSignal } from "solid-js";

export default function Donate() {
  const [price, setPrice] = createSignal("");

  return (
    <div class="mx-auto w-[700px] my-5 bg-blueberry-100 p-5 rounded-xl text-white">
      <h1 class="text-5xl">Donate Now!</h1>
      <div class="flex flex-col gap-3 my-5">
        <div class="flex gap-3 justify-center">
          <button
            class="button"
            onClick={() => {
              setPrice("PHP 5.00");
            }}
          >
            PHP 5.00
          </button>
          <button
            class="button"
            onClick={() => {
              setPrice("PHP 10.00");
            }}
          >
            PHP 10.00
          </button>
          <button
            class="button"
            onClick={() => {
              setPrice("PHP 50.00");
            }}
          >
            PHP 50.00
          </button>
          <button
            class="button"
            onClick={() => {
              setPrice("PHP 100.00");
            }}
          >
            PHP 100.00
          </button>
          <button
            class="button"
            onClick={() => {
              setPrice("PHP 500.00");
            }}
          >
            PHP 500.00
          </button>
        </div>
        <form action="/">
          <div class="flex gap-3 ml-20 items-center">
            <label for="custom-value" class="text-lg">
              Enter Custom Value:
            </label>
            <input
              id="custom-value"
              type="text"
              // bg-orange-50 border border-purple-300 text-gray-900 text-sm rounded-lg block w-full p-2.5
              class="bg-blueberry-200 placeholder-blueberry-400 text-white p-2.5 rounded-lg"
              placeholder="PHP 50.00"
              value={price()}
              onInput={(e) => setPrice(e.currentTarget.value)}
            />
          </div>
          <input
            type="submit"
            class="button block mx-auto w-fit my-5 px-3 rounded-xl"
            onClick={() => {
              alert(
                `AHAHAHHAHAHAH WE STEALING YOUR ${price()} THANK YOU SO MUCH <3333`
              );
            }}
          />
        </form>
      </div>
      <p class="italic text-sm text-center">
        For non-monetary donations, please contact 0922 414 0700
      </p>
    </div>
  );
}
