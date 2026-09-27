const NAV = ['Catalog', 'About', 'Contact']

function Header({ tab, onTab, onInstall }) {
  return (
    <header className="header">
      <span className="brand display">Bore &amp; Barrel</span>

      <nav className="nav">
        {NAV.map((item) => (
          <button
            key={item}
            type="button"
            className={tab === item ? 'nav-link active' : 'nav-link'}
            onClick={() => onTab(item)}
          >
            {item}
          </button>
        ))}

        <button
          type="button"
          className="install-btn"
          onClick={onInstall}
        >
          Install App
        </button>
      </nav>
    </header>
  )
}

export default Header