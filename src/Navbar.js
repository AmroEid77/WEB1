import React from 'react';

function Navbar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', paddingRight: '10px' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <div style={{ backgroundColor: 'blue', width: '40px', height: '40px', marginLeft: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-megaphone-fill" viewBox="0 0 16 16">
            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
          </svg>
        </div>
        <input
  type="text"
  placeholder="Search..."
  style={{
    background:'dark gray',
    backgroundColor: ' #f0f0fo', 
    border: '1px solid rgb(240, 240, 240)',
    paddingLeft: '40px',
    paddingRight: '20px', 
    background: `url("data:image/svg+xml,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path></svg>'
    )}") no-repeat 10px center`,
    backgroundSize: '16px 16px',
    borderRadius: '5px', 
    height: '40px', 
  }}
/>


      </div>

      <div style={{ display: 'flex', marginLeft: '100px', gap: '20px',marginTop:'20px' }}>
        <p style={{ color: 'blue', margin: 0 }}>Overview</p>
        <p style={{ margin: 0, color: 'gray' }}>Subscription</p>
        <p style={{ margin: 0, color: 'gray' }}>Streams</p>
        <p style={{ margin: 0, color: 'gray' }}>Library</p>

        <div style={{ display: 'flex', gap: '20px',marginLeft:"205px" }}>
          <span style={{ color: 'gray',marginLeft:'200px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
          </span>
          <span style={{ color: 'gray' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', paddingRight: '10px' }}>
  <img
    src="https://www.annahar.com/ContentFiles/160065Image1-1180x677_d.jpg?version=1907003"
    style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px', marginTop: '-10px' }}
  />
  <div style={{ marginLeft: '9px', textAlign: 'left', marginTop: '-10px' }}>
    <div>
      <b>Lori Fergusor</b>
    </div>
    <div style={{ color: 'darkgray' }}>Web Developer</div>
  </div>



      {}
    </div>
      </div>
    </div>
  );
}

export default Navbar;
