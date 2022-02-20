function NavBar() {
  const linkList = [
    {path: '/', name:'Home'},
    {path: '/createaccount', name:'Create Account'},
    {path: '/login', name:'Login'},
    {path: '/deposit', name:'Deposit'},
    {path: '/withdraw', name:'Withdrawal'},
    {path: '/alldata', name:'All Data'},
  ];

  let links = linkList.map((link) => {
    return (
      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          activeStyle={{
            fontWeight: "bold", 
            color: "MediumSeaGreen",
            textDecoration: "underline"
          }} 
          to={link.path} 
          exact={true}
        >
          {link.name}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container container-fluid">
        <a className="navbar-brand" href="/">BadBank</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {links}
          </ul>
        </div>
      </div>
    </nav>         
  );
}