import React from 'react'

export default function PatientLogin() {
    const handleSubmit=()=>{

    }
    return (
        <>
        <div className='mt-3'>
        {/* <h2>Login to iNotebook</h2> */}
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Aadhaar Number</label>
            {/* value={credentials.email} */}
            <input type="email" className="form-control" id="email"  onChange={onchange} name ="email" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your Aadhaar number with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            {/* value={credentials.password} */}
            <input type="password" className="form-control"  onChange={onchange} id="password" name="password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div> 
    </>
    )
}
