function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <>
      <h1>All Data (Admin Console)</h1>
      <p>{JSON.stringify(ctx)}</p>
    </>
  );
}