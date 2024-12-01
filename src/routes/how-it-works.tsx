import { BiSolidDonateHeart } from "solid-icons/bi";
import { FaSolidHandshake } from "solid-icons/fa";
import { ImUsers } from "solid-icons/im";

import "./how.css";

export default function How() {
  return (
    <main>
      <h1>Our Approach</h1>

      <ul class="my-2">
        <li>
          <h2>Policy Advocacy</h2>
          <p>
            We work with governments and organizations to reform food systems,
            fight food waste, and ensure fair access to resources.
          </p>
        </li>
        <li>
          <h2>Sustainable Food Systems</h2>
          <p>
            Through partnerships with farmers, food producers, and local
            communities, we create programs that promote sustainable agriculture
            and equitable food distribution.
          </p>
        </li>
        <li>
          <h2>Emergency Aid</h2>
          <p>
            In times of crisis, we act fast—delivering food and resources to
            those who need them most.
          </p>
        </li>
        <li>
          <h2>Education & Awareness</h2>
          <p>
            We empower individuals and communities with knowledge about
            nutrition, sustainability, and self-reliance.
          </p>
        </li>
      </ul>

      <div class="my-2">
        <h1 class="text-4xl">Get Involved</h1>
        <ul class="flex justify-between text-center mx-auto w-3/4">
          <li>
            <BiSolidDonateHeart size={64} />
            <h2>Donate</h2>
            <p>Every dollar feeds a hungry family.</p>
          </li>
          <li>
            {/* <FiUsers /> */}
            <ImUsers size={64} />
            <h2>Volunteer</h2>
            <p>Join our efforts and make a difference on the ground.</p>
          </li>
          <li>
            <FaSolidHandshake size={64} />
            <h2>Partner With Us</h2>
            <p>Collaborate to create a hunger-free world.</p>
          </li>
        </ul>
      </div>
    </main>
  );
}
