import React from 'react'
import './Login.css'
import Input from '../components/basic/input'

const index = () => {
    return (
        <>
            <section className='loginSection'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='leftBox'>
                                <form>
                                    <h6>ADMIN</h6>
                                    <Input label={"Name"} type={"text"} onChange={() => {console.log("first")}}/>
                                    <Input label={"Password"} type={"password"} onChange={() => {console.log("first")}}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index