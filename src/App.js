import React, { useState, useEffect, useRef } from 'react';
import { useGoogleOneTapLogin } from "react-google-one-tap-login"

function App() {
  const ref = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showPopup && !event.target.closest('.google-one-tap-login-popup')) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  useGoogleOneTapLogin({
    onSuccess: (response) => {
      setName(response.given_name);
      setEmail(response.email);
      setShowPopup(true); 
      console.log("User email:", response.email);
    },
    onError: (error) => console.log(error),
    googleAccountConfigs: {
      client_id: "1027485564712-nm6m9eifqopa3eqq2pnmj83vljb0e74c.apps.googleusercontent.com",
      showPrompt: showPopup
    },
  });

  return (
    <div style={{ width: '100%', textAlign: "center", }} ref={ref} className="app">
      {email && (
        <h1 style={{marginTop:'20%'}}>
          Dear user {name} you are successfully verify with
          <br />
          {email}
        </h1>
      )}
      <div>
        
      </div>
    </div>
  );
}

export default App;
