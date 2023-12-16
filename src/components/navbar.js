import React, { useState } from 'react'
import '../style/navbar.css'
const Navbar = () => {
    const menu=[
        'Home',
        'Farmers Place',
        'Contact us',

    ]
    const [selectedLanguage, setSelectedLanguage] = useState('english');

  // Handle change when a new language is selected
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div className='navbar'>
    <img src='logo.png' alt="logo" className='logo'></img>
 
    {menu.map((menuItem)=>{return(<div className='menuitems'> {menuItem}</div>)})}
    
    
    <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className='language-select'
      >
        <option value="english">English</option>
        
      </select>
      <div
        style={{
          width: '39px',
          height: '37px',
          borderRadius: '50%',
          overflow: 'hidden',
          margin:'40px 30px 30px 40px',
          backgroundColor:'#263C28'
        }}
      >
        <img
          src="avatar.svg" // Replace with the URL or local path of your image
          alt="Circle"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
<img src='location.svg' alt='location' style={{width:'40px'}}/>
      <div>
        <p style={{ fontSize: '18px',marginTop:'30px', color: 'white'}}>Duvvur/Kadapa</p>
        <p style={{ fontSize: '16px',marginTop:'-10px', color: 'white' }}>Andhra Pradesh</p>
      </div>
    </div>
  )
}

export default Navbar