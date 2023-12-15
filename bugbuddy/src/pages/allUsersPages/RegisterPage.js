import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from "@fortawesome/free-solid-svg-icons";
import '../../styles/registerPage.css'

const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [validUsername, setValidUsername] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [roles, setRoles] = useState(["Employee"]);
  const [registrationError, setRegistrationError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onUsernameChanged = e => {
    setUsername(e.target.value);
    const isValid = USER_REGEX.test(e.target.value);
    console.log(`Username: ${e.target.value}, Valid: ${isValid}`);
    setValidUsername(isValid);
  };
  
  const onPasswordChanged = e => {
    setPassword(e.target.value);
    const isValid = PWD_REGEX.test(e.target.value);
    console.log(`Password: ${e.target.value}, Valid: ${isValid}`);
    setValidPassword(isValid);
  };

  const onRolesChanged = e => {
    const values = Array.from(
      e.target.selectedOptions,
      option => option.value
    );
    setRoles(values);
  };

  const canSave = [roles.length, validUsername, validPassword].every(condition => {
    console.log(`Condition: ${condition}`);
    return Boolean(condition);
  }) && !isLoading;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (canSave) {
      try {
        const response = await fetch('http://localhost:4000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password, roles }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Registration failed:', errorData);

          if (errorData.message === 'All fields are required') {
            console.log('Missing fields:', errorData.fields);
            setRegistrationError('All fields are required. Please fill in all the fields.');
          } else {
            setRegistrationError('Registration failed. Please try again later.');
          }

          return;
        }

        console.log('Registration successful');
        setUsername('');
        setPassword('');
        setRoles([]);
      } catch (error) {
        console.error('Unexpected error during registration:', error);
        setRegistrationError('Unexpected error during registration. Please try again later.');
      }
    }
  };

  const usernameClass = validUsername ? 'valid' : 'invalid';
  const passwordClass = validPassword ? 'valid' : 'invalid';

  return (
    <div className="Rpage">
      <h2>RegisterPage</h2>
      {registrationError && <p className="errmsg">{registrationError}</p>}
      <form onSubmit={handleSubmit}>
        {/* ... (existing form inputs) */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={onUsernameChanged}
            required
            className={usernameClass}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onPasswordChanged}
            required
            className={passwordClass}
          />
        </div>
        <div>
          <label htmlFor="roles">Role:</label>
          <select
            id="roles"
            name="roles"
            multiple={true}
            size="3"
            value={roles}
            onChange={onRolesChanged}
          >
            <option value="Developer">Developer</option>
            <option value="Quality Assurance">Quality Assurance</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <button type="submit" disabled={!canSave}>
          Register <FontAwesomeIcon icon={faSave} />
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
