function Home() {
  // const ctx = React.useContext(UserContext);

  return (
    <Card
      header="BadBank Home"
      title="Welcome to BadBank"
      text="Your money is safe with us!"
      body={(<img src="bank.png" className="img-fluid" alt="Bank icon image" />)}
    />
  );
}