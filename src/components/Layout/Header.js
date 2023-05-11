import React from 'react'
import logo from './logoresponsive.svg';
// import logo2 from './logoresponsive2.svg'
export default function Header() {
    return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand mx-2" href="/">
            <img src={logo} alt="logo"/> Medossier</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 "style={{marginRight:'350px',marginLeft:'350px'}}>
                <li className='navbar-brand'>
                    Hi! Hope the Liver is doing well!!
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
    )
}

        // <div className="header">
        //     <div className="header-right">
        //         <div className="logo">
        //             <img src='' alt="logo" />
        //         </div>
        //         <div className="logo-name">logo-name</div>
        //     </div>
        //     <div className="tagline">
        //         This is tagline
        //     </div>
        //     <div className="header-left">
        //         <div className="querybox">
        //             querybox
        //         </div>
        //     </div>
        // </div>