import { Accessor, createSignal, For, Setter } from "solid-js";

export default function Donate() {
  const [amount, setAmount] = createSignal("");
  const prices = ["10.00", "25.00", "50.00", "100.00", "500.00"];

  const handleTextInputFocus = () => {
    setAmount("");
  };

  return (
    <div class="w-[400px] mx-5 border-blueberry-100 rounded-t-lg border-2 my-5">
      <h1 class="text-3xl font-light bg-blueberry-100 text-white py-5 px-5 mb-5">
        Enter amount to donate:
      </h1>
      <form action="/" class="">
        <div class="mx-auto w-64 grid grid-cols-2 gap-3">
          <For each={prices}>
            {(price) => (
              <Radio
                setAmount={setAmount}
                getAmount={amount}
                key="amount"
                value={price}
                label={`₱ ${price}`}
              />
            )}
          </For>
        </div>
        <input
          type="text"
          onfocus={handleTextInputFocus}
          placeholder="Custom Value"
        />
      </form>

      <p class="italic text-sm text-center">
        For non-monetary donations, please contact 0922 414 0700
      </p>
    </div>
  );
}

function Radio(props: {
  key: string;
  value: string;
  label: string;
  setAmount: Setter<string>;
  getAmount: Accessor<string>;
}) {
  return (
    <div class="border border-blueberry-400 w-fit h-auto rounded-md font-light has-[:checked]:bg-blueberry-400 has-[:checked]:text-white flex">
      <input
        type="radio"
        id={props.value}
        name={props.key}
        value={props.value}
        checked={props.getAmount() === props.value}
        onchange={() => props.setAmount(props.value)}
        class="appearance-none"
      />
      <label for={props.value} class="p-5 block">
        {props.label}
      </label>
    </div>
  );
}
