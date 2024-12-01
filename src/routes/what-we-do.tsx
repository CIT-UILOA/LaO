import "./what.css";

export default function What() {
  return (
    <main>
      <h1>Mission Statement</h1>
      <p class="py-2">
        Law & Order is committed to eradicating hunger worldwide by fostering
        sustainable food systems, advocating for policy change, and providing
        direct aid to communities in need. The name reflects a dual approach:
        addressing systemic issues ("Law") and ensuring efficient,
        well-organized solutions ("Order").
      </p>
      <h1 class="text-4xl">How it works:</h1>
      <ol class="mx-10 my-2">
        <li>
          <h2>Advocacy and Policy Change ("Law"):</h2>
          <ul>
            <li>
              Partner with governments, international organizations, and
              advocacy groups to influence policies that promote fair food
              distribution, sustainable agriculture, and the reduction of food
              waste.
            </li>
            <li>
              Campaign for laws that protect farmers' rights, ensure access to
              nutritious food, and encourage investment in underdeveloped
              regions.
            </li>
          </ul>
        </li>
        <li>
          <h2>Efficient Operations and Resource Management ("Order"):</h2>
          <ul>
            <li>
              Establish a global network of food banks and distribution centers
              that ensure surplus food reaches those in need.
            </li>
            <li>
              Collaborate with local communities to build sustainable farming
              practices, ensuring self-sufficiency and long-term food security.
            </li>
            <li>
              Develop transparent systems for tracking resources and their
              impact to build trust with donors and stakeholders.
            </li>
          </ul>
        </li>
        <li>
          <h2>Educational Initiatives:</h2>
          <ul>
            <li>
              Launch programs to educate communities about nutrition, food
              preparation, and sustainable farming techniques.
            </li>
            <li>
              Work with schools to integrate hunger awareness and agricultural
              training into curricula.
            </li>
          </ul>
        </li>
        <li>
          <h2>Emergency Response:</h2>
          <ul>
            <li>
              Act swiftly to provide food aid during crises such as natural
              disasters, conflicts, or pandemics.
            </li>
            <li>
              Leverage technology to identify and respond to hunger hotspots in
              real time.
            </li>
          </ul>
        </li>
        <li>
          <h2>Community Involvement:</h2>
          <ul>
            <li>
              Engage volunteers and local organizations to expand reach and
              create a sense of ownership within communities.
            </li>
            <li>
              Encourage corporate partnerships and donations to maximize
              resources.
            </li>
          </ul>
        </li>
      </ol>
    </main>
  );
}
