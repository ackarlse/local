export default function Loginn(){
    const handleSubmit = (e) =>{
        e.preventDefault() 
    }
    const handleChange = (e) =>{
        console.log(e.target.value)
    }
    const handleClick = () =>{
        console.log("Du gjorde noe!")
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Brukernavn:</label>
            <input id="username" type="text" placeholder="Nora Nordman.." onChange={handleChange}></input>
            <label htmlFor="password">Passord:</label>
            <input id="password" type="password" placeholder="*******" onChange={handleChange}></input>
            <button type="submit" onClick={handleClick}>Logg inn</button>
        </form>
    )
}