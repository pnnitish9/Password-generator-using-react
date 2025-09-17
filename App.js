import { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

function PasswordGenerator(){
    const [password, setPassword] = useState("");
    const [length, setLenght] = useState(5);
    const [numberChanged, setNumberChanged] = useState(false);
    const [charChanged, setCharChanged] = useState(false);
    const [changepass, setChangepass] = useState("");

    const genPassword = useCallback(()=>{
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specials = "~!@#$%^&*()_+-";
        if(numberChanged){
            str += numbers;
        }
        if(charChanged){
            str += specials;
        }
        
        let pass = "";
        // Ensure at least one number and one special char if required
        if (numberChanged) pass += numbers[Math.floor(Math.random() * numbers.length)];
        if (charChanged) pass += specials[Math.floor(Math.random() * specials.length)];

        for(let i=pass.length; i<length; i++){
            pass += str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass);
    },[length,numberChanged,charChanged,changepass]);
    useEffect(()=>{
        genPassword();
    },[genPassword]);

    return(
        <div className="box">
            <h1>{password}</h1>
            <div>
                <input type="range" min={5} max={25} onChange={(e)=>setLenght(e.target.value)}/>
                <label>Length({length}) </label>
                <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setNumberChanged(!numberChanged)}/>
                <label>Number</label>
                <input type="checkbox" defaultChecked={charChanged} onChange={()=>setCharChanged(!charChanged)}/>
                <label>Character</label>
            </div>
            <button onClick={()=>setChangepass(changepass)}>Change</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);