
const Footer=()=>{
    return(
        <footer className="bg-body-tertiary text-center text-lg-start" >
        <div className="container p-4" >
          <div className="row " style={{overflow:"hidden"}} >
            <div className="col-lg-8 col-md-12 mb-4 mb-md-0">
              <ul className="nav justify-content-center justify-content-lg-start">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Support</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Docs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Privacy & terms</a></li>
              </ul>
              <p className="text-muted">
                © 2023 Webestica. All rights reserved. Supposing so be resolving breakfast am or perfectly. Is drew am hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported.
              </p>
            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-end justify-content-lg-end pe-lg-5">
              <a href="https://apps.apple.com/app/webestica/id1234567890" className="me-4" >
                <img src="https://camo.githubusercontent.com/ede66ae1a6a8ea35fae80b92baa32733d727b4aa/687474703a2f2f692e696d6775722e636f6d2f374978744d56302e706e67" alt="Download on the App Store" style={{ maxWidth: '100%' }} />
              </a>
              <a href="https://play.google.com/store/games?device=windows">
                <img src="https://camo.githubusercontent.com/38a81d92ff33df0904536f106a42fe56e9156c15/687474703a2f2f692e696d6775722e636f6d2f707846664230532e706e67" alt="Download on Google Play" style={{ maxWidth: '100%' }} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    
    )
}
export default Footer