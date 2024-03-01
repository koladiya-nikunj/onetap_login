import './App.css';
import { useGoogleOneTapLogin } from "react-google-one-tap-login"

function App() {

  useGoogleOneTapLogin({
    onSuccess: (response) => console.log(response),
    onError: (error) => console.log(error),
    googleAccountConfigs: {
      client_id: "1027485564712-nm6m9eifqopa3eqq2pnmj83vljb0e74c.apps.googleusercontent.com"
    }
  })
  return (
    <div className="app">


    </div>
  );
}

export default App;
