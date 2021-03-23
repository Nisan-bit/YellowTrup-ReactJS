import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
const Signin = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5 mb-3">
                <div className="co;-md-6 offset-md-3 shadow-lg">
                    <form>
                        <div className="col-12 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" placeholder="password" />
                        </div>
                        <div className="col-6 mt-2 offset-md-2"><button className="btn btn-primary">Sign IN</button></div>
                    </form>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Signin
