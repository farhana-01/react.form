import React, { useEffect, useState } from "react"

const Conteact = () => {
    const[userDitals , setUserDitals] = useState({Email: "", password:""});

   
    const [userEmailErr , setUserEmailErr] = useState(false)
    const [userPasswordErr , setUserPasswordErr] = useState(false)

    const signInHendler = (e) => {
        e.preventDefolt();
        if(userDitals.Email === ""){
           setUserEmailErr(true)
        }
        if(userDitals.password === "") {
            setUserPasswordErr(true);
        }
    }

    useEffect(() =>{
        if(userEmail !== ""){
            setUserEmailErr(false);
        }
        if(userPassword !== "") {
            userPasswordErr(false);
        }
    },[userEmail , userPassword])

    return (
        <div>
            <div>
                <main className="form-signin w-25 mt-5 pt- m-auto">
                    <form>
                         <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                         <div className="form-floating" onSubmit={signInHendler} >
                             <input type="email"
                            //  style={{ border: "4px solid red" }}
                             className="form-control" id="floatingInput" required value={userEmail} placeholder="name@example.com" onChange={(e) => { setUserDitals({Email:e.target.value});  />
                            <label htmlFor="floatingInput">Email address</label>
                            {userEmailErr && <span className="text-danger">please enter your email</span>}
                         </div>
                         <div className="form-floating">
                             <input type="password"
                            //  style={{ border: "4px solid red" }}
                             className="form-control" id="floatingPassword" required value={userPassword} placeholder="Password" onChange={(e) => { setUserDitals({ email:'' password:e.target.value}) setUserPassword(e.target.value); }} />
                              <label htmlFor="floatingPassword">Password</label>
                             {userPasswordErr && <span className="text-danger">please enter your password</span>}
                         </div>
                          <div className="checkbox mb-3">
                             <label>
                                 <input type="checkbox" value="remember-me" /> Remember me
                             </label>
                         </div>
                         <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                         <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
                     </form>
                </main>
            </div>
        </div>
    )
}

export default Conteact
