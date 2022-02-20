function NavBar() {
  const linkList = [
    {path: '/', name:'Home', tooltipText: 'Go to welcome landing page'},
    {path: '/createaccount', name:'Create Account', tooltipText: 'Create a new user account'},
    {path: '/login', name:'Login', tooltipText: 'Login to an existing account'},
    {path: '/deposit', name:'Deposit', tooltipText: 'Deposit funds to your account'},
    {path: '/withdraw', name:'Withdraw', tooltipText: 'Withdraw funds from your account'},
    {path: '/alldata', name:'All Data', tooltipText: 'View all users from admin console'},
  ];

  let links = linkList.map((link) => {
    return (
      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          data-bs-toggle="tooltip" 
          data-bs-placement="bottom" 
          title={link.tooltipText}
          activeStyle={{
            textDecoration: "underline",
            textDecorationColor: "DodgerBlue",
            textDecorationThickness: "3px"
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