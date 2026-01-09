import './About.scss'
import intetImg from '../../assets/intet-problem.jpg'
import evigImg from '../../assets/Evig-garenti.jpg'

export default function About() {
  return (
    <section id="about" className="features">
      <div className="container grid">
        <div className="img-box">
          <img src={intetImg} alt="Intet problem" />
        </div>
        <article className="text-box">
          <h2>INTET PROBLEM</h2>
          <p>
            Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle opleve at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.
          </p>
          <p>Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
        </article>
      </div>

      <div className="container grid reverse">
        <article className="text-box">
          <h2>EVIG GARANTI</h2>
          <p>
            Leo–lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge.
          </p>
          <p>
            Hvis du mod alt forventning skulle opleve at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.
          </p>
        </article>
        <div className="img-box">
          <img src={evigImg} alt="Evig garanti" />
        </div>
      </div>
    </section>
  )
}
