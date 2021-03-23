import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Signup = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5 mb-3">
                <div className="co;-md-6 offset-md-3 shadow-lg p-5">
                    <form>
                        <div className="col-12 md-3">
                            <label htmlFor="username">Name</label>
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-12 md-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="col-12 md-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" placeholder="password" />
                        </div>
                        <div className="col-12 md-3">
                            <label htmlFor="confirmusername">ConfirmPassword</label>
                            <input type="password" className="form-control" placeholder="Confirm Password" />
                        </div>
                        <div className="col-6 mt-2 offset-md-2">
                            <button className="btn btn-primary">Sign IN</button>
                        </div>
                    </form>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Signup