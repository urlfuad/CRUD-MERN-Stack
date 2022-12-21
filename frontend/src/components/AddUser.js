import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const navigate = useNavigate ();

  const saveUser = async(e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender
      })
      navigate ("/")
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">

        <form onSubmit={saveUser}>
          <div className="field">
            <label htmlFor="" className='label'> Name </label>
            <div className="control">
              <input type="text" className='input' placeholder='name'
              value={name} onChange={(e) => setName (e.target.value)} />
            </div>
          </div>

          <div className="field">
            <label htmlFor="" className='label'> Email </label>
            <div className="control">
              <input type="text" className='input' placeholder='email'
              value={email} onChange={(e) => setEmail (e.target.value)} />
            </div>
          </div>
          
          <div className="field">
            <label htmlFor="" className='label'> Gender </label>
            <div className="control">
              <div className="select is-fullwidth">
                <select value={gender} onChange={(e) => setGender (e.target.value)}>
                  <option value="Male"> Male </option>
                  <option value="Female"> Female </option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <button type='submit' className='button is-success'> Save </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default AddUser