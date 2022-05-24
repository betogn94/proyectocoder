import ItemCount from "./ItemCount";
import { useState } from "react";
import InputCount from "./InputCount";

function Intercambiar(item) {
    let items = item.children;
    const [count, setCount] = useState(true);

    //console.log(items)

    function countModified() {
        setCount(false)
        console.log(count)
    }

    return(
        <>
        {
            count === true ?
                <ItemCount items={items} countModified={countModified}/>
            :
                <InputCount/>
        }
        </>
    )
};

export default Intercambiar;