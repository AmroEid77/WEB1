import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
function Navbar() {
  return (
    
<div className="container">
<div className="d-flex align-items-center p-3" style={{ backgroundColor: "#f8f9fa",marginTop:"0",marginBottom:"0" }}>
  <div className="col-md-6 d-flex gap-3 align-items-center">
    <div className="bg-primary rounded" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-megaphone-fill" viewBox="0 0 16 16">
        <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
      </svg>
    </div>
    <input
      type="text"
      className="form-control"
      placeholder="Search..."
      style={{
        background: 'dark gray',
        border: '1px solid #f0f0f0',
        paddingLeft: '40px',
        paddingRight: '20px',
        background: `url("data:image/svg+xml,${encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path></svg>'
        )}") no-repeat 10px center`,
        backgroundSize: '16px 16px',
        borderRadius: '5px',
        height: '40px',
        width: '50%', // Full width for the left section
        marginRight: '10px', // Margin-right to create space between input and navbar
      }}
    />
  </div>

  <div className="col-md-6"style={{ marginLeft: '1px',justifyContent:'center' }}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
      <a className="navbar-brand" style={{color:'blue'}}>Overview</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <a className="nav-link active" aria-current="page">Subscription</a>
        <a className="nav-link">Streams</a>
        <a className="nav-link">Library</a>
     
        <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', paddingRight: '10px', marginLeft:'100px'}}>
      
        <div style={{ display: 'flex', gap: '10px', marginLeft: 'auto', marginRight: '10px' }}>
  <span style={{ color: 'gray' }}>
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
    </nav>
    
  </div>
  
      </div>
      </div>

  
  )}
export default Navbar;