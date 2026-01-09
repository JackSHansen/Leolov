import './Team.scss'
import johnImg from '../../assets/John.jpg'
import peterImg from '../../assets/Peter.jpg'
import eliseImg from '../../assets/Elise.jpg'
import mortenImg from '../../assets/Morten.jpg'

const people = [
  { name: 'John Harbinger', quote: 'Jeg er den mest succesfulde advokat i firmaet. I hvert fald mere end Peter.', img: johnImg },
  { name: 'Peter Parker', quote: 'Jeg holder af kaffe og så jeg helt enormt succesfuld. Meget mere end John.', img: peterImg },
  { name: 'Elise Li', quote: 'Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg altid sagt.', img: eliseImg },
  { name: 'Morten Nate', quote: 'Jeg er født i landet. På landet. Der er ingen ret og lov. Det er det vilde vest derude.', img: mortenImg },
]

export default function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <h2>MØD HOLDET</h2>
        <div className="team-grid">
          {people.map((p) => (
            <article key={p.name} className="member">
              <div className="avatar">
                <img src={p.img} alt="Teammedlem" loading="lazy" />
              </div>
              <h3>{p.name}</h3>
              <p>“{p.quote}”</p>
              <span className="underline" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
