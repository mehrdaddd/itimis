import React, {useState} from 'react';
import AddProduct from "./components/AddProduct/addProduct";
import Basket from "./components/Basket/basket";
import Receipt from "./components/Receipt/receipt";
import './App.css';

// todo salesTax write the text in variable

function App() {
    const [products, setProducts] = useState([]);
    const [payedProducts, setPayedProducts] = useState([]);

    const AddToBasket = data => {
        let taxCost = data.number * parseFloat(data.price) * (data.imported ? 5 + parseFloat(data.taxRate) : parseFloat(data.taxRate)) / 100;
        data.taxCost = roundUp(taxCost);
        data.priceWithTax = roundUp(data.number * parseFloat(data.price) + data.taxCost);
        setProducts([...products, data]);
    }

    const ResetBasket = () => setProducts([])
    const ResetReceipts = () => setPayedProducts([])

     const Purchase = () => {
        let taxSales = roundUp(products.reduce((sum, product) => sum + parseFloat(product.taxCost), 0));
        let totalCost = products.reduce((sum, product) => sum + product.priceWithTax, 0);
        let receipt = {
            products,
            taxSales,
            totalCost
        }
        setPayedProducts([...payedProducts, receipt]);
        ResetBasket();
    }

    return (
        <div className="app">
            <AddProduct addBasket={AddToBasket}/>
            <Basket products={products} ResetBasket={ResetBasket} Purchase={Purchase} payedProducts={payedProducts}/>
            <Receipt payedProducts={payedProducts} ResetReceipts={ResetReceipts}/>
        </div>
    );
}

const roundUp = n => parseFloat((Math.ceil(n * 20) / 20).toFixed(2));

export {roundUp}
export default App;
