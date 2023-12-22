import { useState } from "react";
import { useFireBase } from "../../FireBase/useFireBase.js";
import Verified from "../Trailers/Verified.js";

const Header = () => {
        
    const { items } = useFireBase("header");

    return(
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        {items.map((info) => (
                            <div className="card text-white mx-auto" key={info.id}>
                                <img src={info.image} className="card-img img-fluid" alt="..." style={{height: '400px'}}/>
                                <div className="card-img-overlay px-5 row align-items-center">
                                    <div className="col-lg-12 col-md-8 fw-bold text-start">
                                        <img src={info.profilePic} className="rounded-circle img-fluid pr-5" style={{ width: '30px', height: '30px' }}/>
                                        <p className="card-text d-inline-block mx-2">
                                            {info.username} {info.verification && <Verified />}
                                            &emsp;
                                            {info.views}
                                        </p>
                                        <h1 className="card-title fs-3">{info.title}</h1>
                                        <p className="card-text fw-normal lead">
                                            {info.text}
                                        </p>
                                        <button type="button" className="btn btn-primary btn-lg"><span><i className="bi bi-file-earmark-play"></i></span>  Watch now</button>
                                    </div>   
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;