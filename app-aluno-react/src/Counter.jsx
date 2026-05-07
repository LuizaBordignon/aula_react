import { useState, useEffect } from "react";

function Counter(){

    const[count, setCount] = useState(0);

    useEffect(() => {
        document.title=`+${count} Aura!`
    }, [count])
    return (
        <>
        <p>Você clicou bb {count} nextage vezes! </p>
        <button onClick={() => setCount(count+1)}>
            Contar +1
        </button>
        </>
    )
}

export default Counter