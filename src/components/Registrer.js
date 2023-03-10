import { useState } from "react"
import { Link } from "react-router-dom"

export default function Registrer({user, setUser}){
    const [complete, setComplete] = useState(false)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    const handleChange = (e) =>{
        const inputName = e.target.name
        const inputValue = e.target.value
        setUser((prev) => ({...prev, [inputName]: inputValue}))
    }
    const handleClick = () =>{
        user.password === user.checkpass ? setComplete(true) : console.log("passordene er ikke like!")
    }
    return(
        <>
        {complete ? <p>Bruker ble laget,<Link to="/">Logg inn</Link></p> : <form onSubmit={handleSubmit}>
            <label htmlFor="username">Lag et brukernavn:</label>
            <input id="username" name="username" placeholder="Nora Nordman" type="text" onChange={handleChange} />
            <label htmlFor="password">Lag et passord:</label>
            <input id="password" name="password" placeholder="****" type="password" onChange={handleChange} />
            <label htmlFor="checkpass">Bekreft passord:</label>
            <input id="checkpass" name="checkpass" placeholder="****" type="password" onChange={handleChange} />
            <button onClick={handleClick} type="submit">Registrer</button>
        </form>}
        </>
    )
}