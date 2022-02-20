function NavBar() {

  function classes() {
    // const isActive = ' active'; // how to set this??
    return 'nav-link' 
  }

  function classes() {
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' ';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container container-fluid">
          <a className="navbar-brand" href="#">BadBank</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#/CreateAccount">Create Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/deposit">Deposit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/withdraw">Withdraw</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/alldata">AllData</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>      
    
  );
}