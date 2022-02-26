const { useState, useEffect, useReducer } = React;
const Route               = ReactRouterDOM.Route;
const Link                = ReactRouterDOM.Link;
const NavLink             = ReactRouterDOM.NavLink;
const HashRouter          = ReactRouterDOM.HashRouter;
const UserContext         = React.createContext(null);
const CurrentUserContext  = React.createContext(null);

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' ';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className="container">
      <div className={classes()} style={{maxWidth: "18rem"}}> 
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>
    </div>
  );
};

function BankForm(props) {
  const { initialValues, fields, header, title, handle, showBalance, submitText, successMessage, successButton } = props;
  const [show, setShow]             = useState(true);
  const [formValues, setFormValues] = useState({...initialValues});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit]     = useState(false);
  
  const ctx = React.useContext(UserContext);    

  const fieldList = fields.map((item, index) => {
    const { label, type='text', id, name, placeholder='' } = item;
    return (
      <div className="mb-3" key={index}>
        <label><strong>{label}</strong></label>
        <input type={type} className="form-control" id={id} name={name} placeholder={placeholder} value={formValues[name]} onChange={handleFormChange} />
        <p className="text-danger"><small>{formErrors[name]}</small></p>
      </div>
    );
  });
  
  function handleFormChange(event) {
    const { name, value } = event.target;
    const newValues = {
      ...formValues,
      [name]: value
    };
    console.log('Form changed: ', newValues);
    setFormValues(newValues);
    event.preventDefault();
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    setFormErrors(handle(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log('Errors: ' + JSON.stringify(formErrors));
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      setShow(false);
    }
  }, [formErrors]);

  function clearForm() {
    setFormValues({...initialValues});
    setShow(true);
  };

  return (
    <Card
      header={header}
      body={show ? (
          <>
            { showBalance && <p>Balance: {ctx.users[0].balance.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p> }
            <form>
              {fieldList}

              <button 
                type="submit" 
                className="btn btn-primary" 
                onClick={handleFormSubmit}
              >
                {submitText}
              </button>
            </form>
          </>
        ) : (
          <>
            <h5 className="text-success">Success!</h5>
            <p>{successMessage}</p>
            { showBalance && <p>New balance: {ctx.users[0].balance.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p> }
            <button 
              type="submit" 
              className="btn btn-secondary" 
              onClick={clearForm}
            >
              {successButton}
            </button>
          </>
        )}
    />
  );
};

