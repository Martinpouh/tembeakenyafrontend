import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Login({ setCurrentPassenger }) {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(passenger => {
            setCurrentPassenger(passenger)
            history.push('/flights')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address
                <input type="email" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </label>
            <div id="emailHelp" className="form-text">Example: use email: martinchege2015@gmail.com password: 123 <br></br>NB: incase it takes time to login after pressing submit refresh the page .</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password
                <input type="password" name="password" value={password}
            onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"></input>
            </label>
        </div>
        {/* <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Login