import { useState, useEffect } from "react";

function EffectHook() {
  //useState bruges til at gemme den indhentede data
  const [data, setData] = useState([]);

  //useEffect bruges til at hente data ved komponentens første rendering (her bruges en dummy-API til test)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json()) //når fetch-anmodning er fuldført returnerer den et responsobjekt, som konverterer til JSON
      .then((data) => setData(data)); //opdaterer state med de hentede data fra API'en
  }, []); // []/tom liste betyder at useEffect kun kører en gang (når man åbner siden)

  return (
    <div>
      <h2>Data hentet fra API</h2>
      <ul>
        {/* slice (0,5) tager en del af arrayets data - bruges til at brgrænse antallet af elementer der vises*/}
        {data.slice(0, 5).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}{" "}
        {/** map bruges til at iterere over vores array og udføre en funktion på hvert element (item). I det her tilfælde udføres funktionenn (item), som så returnere et li element for hvert igen i vores array */}
      </ul>
    </div>
  );
}

export default EffectHook;
