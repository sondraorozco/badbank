function NavBar() {

  const activeStyle = {
    fontWeight: "bold", 
    color: "MediumSeaGreen",
    textDecoration: "underline"
  };

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container container-fluid">
          <a className="navbar-brand" href="/">BadBank</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" activeStyle={activeStyle} to="/" exact={true}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={activeStyle} to="/CreateAccount">Create Account</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={activeStyle} to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={activeStyle} to="/deposit">Deposit</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={activeStyle} to="/withdraw">Withdraw</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={activeStyle} to="/alldata">AllData</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>      
    
  );
}