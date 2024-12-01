import "./about.css";

export default function About() {
  return (
    <main>
      <h1>About Us</h1>
      <div class="text-justify flex flex-col gap-5 text-lg mx-5">
        <p>
          Law & Order is a non-profit organization founded by a group of
          lawyers, activists, and community leaders with the mission to end
          world hunger. They began by providing free, nutritious meals to
          communities in need, but their work went beyond just food
          distribution. The organization also addressed the root causes of
          hunger by offering legal aid, advocating for fair wages, promoting
          sustainable agriculture, and eliminating food waste.
        </p>
        <p>
          As Law & Order grew, it expanded its efforts to include education on
          food justice and collaborated with local and global organizations to
          fight hunger through policy change. They also worked with individuals
          like Carlos, who, after receiving food and legal support, was able to
          secure a better job and healthcare for his family.
        </p>
        <p>
          The organization faced challenges but remained committed to its cause,
          ultimately receiving international recognition for its holistic
          approach to tackling food insecurity. By combining direct aid with
          systemic change, Law & Order showed that hunger could be eradicated,
          and justice could be achieved through action and compassion.
        </p>
      </div>
      <hr class=" mx-auto my-4 h-1 w-5/6 bg-gold-300 border-none  rounded-xl" />
      <div class="flex sm:flex-col md:flex-row gap-3 md:gap-52 mx-auto w-fit">
        <div>
          <h2 class="text-4xl">List of Members:</h2>
          <ul>
            <li>
              <h3>Aparte, Ivan Leonard O</h3>
              <p>President, Simulation + Mockup</p>
            </li>
            <li>
              <h3>Perez, Jon Ivan P</h3>
              <p>Vice President, Brand Bible + Mockup</p>
            </li>
            <li>
              <h3>Alferez, Ferniel</h3>
              <p>Concept</p>
            </li>
            <li>
              <h3>Atibula, John Gabriel</h3>
              <p>Concept</p>
            </li>
            <li>
              <h3>Ibarra, Gian</h3>
              <p>Concept + Initial Homepage Design</p>
            </li>
            <li>
              <h3>Martus, Julian</h3>
              <p>Concept</p>
            </li>
            <li>
              <h3>Shawndon, James</h3>
              <p>Concept</p>
            </li>
            <li>
              <h3>Suerte, Aaliah Ashley</h3>
              <p>Concept</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-4xl">Tech Stack</h2>
          <p class="text-4xl">
            <i class="nf nf-dev-typescript text-blue-500" />
            {" + "}
            <i class="nf nf-dev-solidjs text-blue-600" />
            {" + "}
            <i class="nf nf-fa-heart text-red-600" />
          </p>
        </div>
      </div>
    </main>
  );
}
