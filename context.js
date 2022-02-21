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
  const { initialValues, fields, title, handle, hideBalance, submitText, successMessage, successButton } = props;
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [formValues, setFormValues] = React.useState({...initialValues});
  
  const fieldList = fields.map((item, index) => {
    const { label, type='text', id, name, placeholder='' } = item;
    return (
      <div className="mb-3" key={index}>
        <label>{label}</label>
        <input type={type} className="form-control" id={id} name={name} placeholder={placeholder} value={formValues[id]} onChange={handleFormChange} />
      </div>
    );
  });
  
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    const newValues = {
      ...formValues,
      [name]: value
    };
    console.log('Form changed: ', newValues);
    setFormValues(newValues);
  };

  function clearForm() {
    setFormValues({...initialValues});
    setShow(true);
  };

  const handleFormSubmit = (formValues, callback) => {
    if (callback(formValues)) {
      setShow(false);
    } else {
      setTimeout(() => setStatus('error'),3000);
      return false;
    }
  };

  return (
    <Card
      header={title}
      status={status}
      body={show ? (
          <form>
            {fieldList}

            <button 
              type="submit" 
              className="btn btn-light" 
              onClick={() => {
                console.log('Submitting deposit: ' + formValues.amount)
                handleFormSubmit(formValues, handle);
              }}
            >
              {submitText}
            </button>
          </form>
        ) : (
          <>
            <h5>Success!</h5>
            <p>{successMessage}</p>
            <button type="submit" className="btn btn-light" onClick={clearForm}>{successButton}</button>
          </>
        )}
    />
  );
};

