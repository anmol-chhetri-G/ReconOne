import { useState } from "react";

function App(){

const [dark, setDark] = useState(false);
return (
  <div className={dark ? 'bg-black text-white' : 'bg-white text-black'} style={{ minHeight: "100vh",padding: "20px"}}>
    <button onClick={() => setDark(!dark)}>
  Toggle {dark ? "Light" : "Dark"} Mode

    </button>

  </div>

)

}

export default App;