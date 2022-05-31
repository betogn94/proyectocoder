import { Link } from "react-router-dom";

export const BuyButton =() => {
    return( 
        <>
            <Link to ="/">
                <button className="button-primary">Keep Buying</button>
            </Link>

            <Link to="/cart">
                <button className="button-primary">Go to Cart</button>
            </Link>
        </>
    )
};

