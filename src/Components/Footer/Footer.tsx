import './Footer.scss'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container cols">
        <div className="col">
          <h4>Adresse</h4>
          <p>Maldives rd. 22,<br />Seychelle Islands</p>
        </div>
        <div className="col">
          <h4>Kontakt</h4>
          <p>email@mail.dk<br />Tlf: 0192 3023</p>
        </div>
        <div className="col">
          <h4>Politik</h4>
          <ul>
            <li><a href="#">Privatlivspolitik</a></li>
            <li><a href="#">Cookiepolitik</a></li>
            <li><a href="#">Generelle betingelser</a></li>
          </ul>
        </div>
        <div className="col">
          <h4>Sociale medier</h4>
          <div className="icons">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
