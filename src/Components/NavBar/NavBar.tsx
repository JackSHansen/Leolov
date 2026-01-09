import './NavBar.scss'

export default function NavBar() {
  return (
    <header className="topbar" role="banner">
      <div className="container bar">
        <nav className="links" aria-label="Sektioner">
          <a href="#home">Hjem</a>
          <a href="#team">Advokaterne</a>
          <a href="#about">Om LeoLov</a>
          <a href="#contact">Kontakt</a>
        </nav>
        <a className="brand" href="#home" aria-label="Leo-Lov">
          <span className="brand-part leo">Leo</span>
          <span className="brand-part lov">–Lov</span>
        </a>
      </div>
    </header>
  )
}
