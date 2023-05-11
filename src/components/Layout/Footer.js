import React from 'react'

export default function Footer() {
    return (
    <>
        <footer class="bd-footer py-4 py-md-5 mt-5" style={{backgroundColor:'##00d9d9', color:'##00d9d9', height:'100vh'}}>
            <div class="container py-4 py-md-5 px-4 px-md-3 -bs-primary">
                <div class="row">
                    <div class="col-6 col-lg-2 mb-3" style={{ marginRight: '122px', marginLeft: '34px'}}>
                        <h5 style={{ color:'##00d9d9'}}>Know the Tech Stack</h5>
                        <ul class="list-unstyled ">
                        <li class="mb-2">React.js</li>
                        <li class="mb-2">Node.js</li>
                        <li class="mb-2">Express.js</li>
                        <li class="mb-2">MongoDB</li>
                        <li class="mb-2">HTML</li>
                        <li class="mb-2">Cascading Style Sheets</li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 mb-3"style={{ marginRight: '122px', marginLeft: '122px'}}>
                        <h5 style={{ color:'##00d9d9'}}>Contributors </h5>
                        <ul class="list-unstyled">
                        <li class="mb-2">Kshitij Gupta</li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 mb-2"style={{ marginRight: '122px', marginLeft: '122px'}}>
                        <h5 style={{ color:'##00d9d9'}}>The Algorithms used</h5>
                        <ul class="list-unstyled">
                        <li class="mb-2">Bootstrap 5</li>
                        <li class="mb-2">Bootstrap 4</li>
                        <li class="mb-2">Icons</li>
                        <li class="mb-2">RFS</li>
                        <li class="mb-2">Examples repo</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
    )
}
// {/* <>
//     <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center footer" style={{paddingRight:'0px',height:'8vh'}}>
//         <div className="container-fluid">
//             <a className="navbar-brand stack" href="/">Know About the Tech Stack</a>
//             <a className="navbar-brand part" href="/">Partwise Contributions</a>
//             <a className="navbar-brand algo" href="/">The Algorithms we used</a>
//         </div>
//         </nav>
//         <div className='footer' >
//             <div className="stack">Know about the stack
            
            
//             </div>
//             <div className="part"> partwise contributions</div>
//             <div className="algo">Know about the algorithms.</div>
//         </div>

//     </> */}
