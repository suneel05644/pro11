import './App.css';
import {GoogleLogin} from 'react-google-login' 
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props' 

const   responseGoogle=(response)=>{
    console.log(response)
}

const   responseFacebook=(response)=>{
  console.log(response)
}

function App() {
  return (
    <div className="App">

      <br></br>
      <GoogleLogin 
      clientId="321619680551-gsevrknhiouih5qhdq70unnbo11lk8q8.apps.googleusercontent.com"
      onSuccess={responseGoogle}
      onFailure={responseGoogle} />\

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>



<FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    onClick={responseFacebook}
    callback={responseFacebook}
    

    render={renderProps => (
      <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          className="App_form_oauth_button"
      >
          <i className="fab fa-facebook-f"></i>
          Login with Facebook
      </button>
  )}
    
    />



<br></br>
    
     
    </div>
  );
}

export default App;
