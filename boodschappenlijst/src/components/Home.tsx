import styles from './Home.module.css'
import React, {useState} from "react";

interface Item {
    naam: string,
    winkel: string,
    dringendheid: string,
    notitie: string
}

function Home() {
    
    const [cartList, setCartList] = useState<Item[]>([]);
    const [product, setProduct]= useState("");
    const [shop, setShop] = useState("");
    const [urgency, setUrgency] = useState("niet urgent");
    const [note, setNote] = useState("")
    
    const addProduct : React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        let cartItem : Item = {naam: product, winkel: shop, dringendheid: urgency, notitie: note}
        setCartList([...cartList, cartItem]);
        setProduct("");
        setShop("");
        setUrgency("niet urgent");
        setNote("")
    }
    
    return (
        <>
            <form className={styles.form} onSubmit={addProduct}>
                <label htmlFor="product">Productnaam:</label>
                <input type="text" id="product" onChange={(e) => setProduct(e.target.value)}/>
                <label htmlFor="shop">Winkel:</label>
                <input type="text" id="shop" onChange={(e) => setShop(e.target.value)}/>
                <select onChange={(e) => setUrgency(e.target.value)} value={urgency}>
                    <option value="urgent">urgent</option>
                    <option value="notUrgent">niet urgent</option>
                </select>
                <label htmlFor="note">Notitie:</label>
                <textarea name="note" id="note" onChange={(e) => setNote(e.target.value)}></textarea>
              <input type='submit' value="toevoegen"/>
            </form>

            <div style={{display: "grid", gridTemplateColumns: "300px 100px"}}>
                {cartList.map((item) => (
                    <React.Fragment key={item.naam}>
                        <span>{item.naam}</span>
                        <span>{item.winkel}</span>
                        <span>{item.dringendheid}</span>
                        <span>{item.notitie}</span>

                    </React.Fragment>))}
            </div>

        </>
    )
}

export default Home;