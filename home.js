function Home() {
  const ctx = React.useContext(UserContext);

  const Greeting = () => {
    var today = new Date();
    var time = today.getHours();
    let greet = '';
    if (time > 18) {
      greet = 'Good evening, ';
    } else if (time > 11) {
      greet = 'Good afternoon, ';
    } else if (time > 4) {
      greet = 'Good morning, ';
    } else {
      greet = 'Good evening, ';
    }

    return (
      <>
        {greet}{ctx.users[0].name}!
      </>
    );
  }

  return (
    <>
      <Card
        customStyle={{ maxWidth: "100%" }}
        body={(
          <>
            <img src="home-image.jpg" className="card-img" alt="Bank icon image" />
            <div className="card-img-overlay">
              <div className="container p-3">
                <h1 className="card-title">BadBank</h1>
                <p className="card-text"><em>Your money is safe with us.</em></p>

                <div className="container p-3 text-end">
                  <h3 className="card-text">
                    <Greeting />
                  </h3>
                  <p className="card-text">How can we help you today?</p>
                  <Link to="/deposit" className="btn btn-info mb-3">Make a deposit</Link><br />
                  <Link to="/withdraw" className="btn btn-info mb-3">Make a withdrawl</Link>
                </div>
                
              </div>
            </div>
          </>
        )}
      />
      <p className="mb-2"><small>Just in case it's not already obvious... this isn't a real bank. :P</small></p>
      <p><small>Photo by <a href="https://unsplash.com/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Visual Stories || Micheile</a> on <a href="https://unsplash.com/s/photos/bank?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></small></p>
    </>
  );
}