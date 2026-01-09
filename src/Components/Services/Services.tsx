import './Services.scss'

const items = [
  {
    title: 'Familieret',
    text:
      'Familieret er en ret alle har. Har du en familie har du sikkert prøvet familieret. Med mindre du har det, er den der du får ret. Så kan vi selvfølgelig ikke hjælpe dig.',
  },
  {
    title: 'Ejendomsret',
    text:
      'Har du købt et hus og fortrudt eller er du blevet snydt? Fortvivl ej. Vi kan hjælpe med alt der kommer af med huset, eller eventuelt smøg i skærpet og slæbe dig det.',
  },
  {
    title: 'Konkurs',
    text:
      'Er du gået konkurs ville vi rigtig gerne hjælpe, men der er ikke overskud. Vi er alle advokater med fede biler og har sjældent penge til at hjælpe hinanden i dag.',
  },
  {
    title: 'Selskabsret',
    text:
      'Selskabsret. Ved du heller aldrig hvilke ret du skal servere til et selskab? Vi holder kurser i det. Selskabsret har vi nydt i årevis.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container cards">
        {items.map((s) => (
          <article key={s.title} className="card">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
