import React, { useEffect, useState } from 'react';
import {publicIp, publicIpv4, publicIpv6} from 'public-ip';
 
import "./App.css"
const App = () => {

  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    // Use the ipify API to get the user's IP address using fetch
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ip);
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
      });
  }, []);
 
  return (
    <div>

      <div className='MainContainer'>

        <div className='title'>
          <h1>Your Ip address</h1>
        </div>

        <div className='data'>
        <h1>{ipAddress}</h1>
        </div>

      </div>

    </div>
  )
}

export default App