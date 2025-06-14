function LinksMenu({ href, content, className }) {
  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}

function Menu() {
  return (
    <nav className="nav">
      <div className="logo">
        <LinksMenu href="/" content={<h2>C</h2>} />
      </div>
      <div className="links">
        <LinksMenu href="#about" content="about" />
        <LinksMenu href="#services" content="services" />
        {/*   <LinksMenu cla="montserrat logo" href="/" content={<h2>CHIRII</h2>} /> */}
        <LinksMenu href="#projects" content="projects" />
        <LinksMenu
          className="started-btn"
          href="#contact"
          content="GET STARTED"
        />
      </div>
    </nav>
  );
}

export default Menu;
