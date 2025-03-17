import { createContext } from "react";
import { products } from "../assets/assets";

const ShopContext = createContext()

const ShopCOntextProvider = (props) => {
    const currecy = '$'
    const delivery_fee = 10
    const value = {
        products, currecy, delivery_fee
    }
    return (
        <ShopContext.Provider value={value}>
            {props.childern}
        </ShopContext.Provider>
    )
}