import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import usePersist from '../../hooks/usePersist'
import '../../styles/login.css'

import bugImage from '../../images/bugBudLand.png';

const Login = () => {
  const userRef = useRef()
  const errRef = useRef()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [persist, setPersist] = usePersist()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [login, { isLoading }] = useLoginMutation()
   


  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [username, password])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { accessToken } = await login({ username, password }).unwrap()
      dispatch(setCredentials({ accessToken }))
      setUsername('')
      setPassword('')
      navigate('/dashboard')
    } catch (err) {
      if (!err.status) {
        setErrMsg('No Server Response');
      } else if (err.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg(err.data?.message);
      }
      errRef.current.focus();
    }
  }

  const handleUserInput = (e) => setUsername(e.target.value)
  const handlePwdInput = (e) => setPassword(e.target.value)
  const handleToggle = () => setPersist(prev => !prev)

  const errClass = errMsg ? "login-errmsg" : "login-offscreen"

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="login-container">
      <section className="login-public">
            <div className="header__image">
              <img src={bugImage} alt="" />
            </div>
        <main className="login-main">
          <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>
            
          <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-form-group">
                <label htmlFor="username" className="login-form-label">Username:</label>
                <input
                  className="login-form__input"
                  type="text"
                  id="username"
                  ref={userRef}
                  value={username}
                  onChange={handleUserInput}
                  autoComplete="off"
                  required
                />
              </div>

              <div className="login-form-group">
                <label htmlFor="password" className="login-form-label">Password:</label>
                <input
                  className="login-form__input"
                  type="password"
                  id="password"
                  onChange={handlePwdInput}
                  value={password}
                  required
                />
              </div>

              <button className="login-form__submit-button">Sign In</button>

              <div className="login-form-group">
                <label htmlFor="persist" className="login-form__persist">
                  <input
                    type="checkbox"
                    className="login-form__checkbox"
                    id="persist"
                    onChange={handleToggle}
                    checked={persist}
                  />
                  Trust This Device
                </label>
              </div>
            </form>
          </div>
        </main>
        <footer>
          <Link to="/">Back to Home</Link>
        </footer>
      </section>
    </div>
  )
}

export default Login
