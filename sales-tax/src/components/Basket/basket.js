import React from 'react';

const Basket = props =>
    <div className="app-container">
        <h1> Baskets </h1>
        {props.products && props.products.length !== 0 &&
        <div id="current-basket-container">
            <p> Current Basket </p>
            <div className="margin flexbox"> {props.products.map((item, key) => <ProductDetails item={item} key={key}/>)} </div>
        </div>
        }

        {props.payedProducts && props.payedProducts.map((basket, key) =>
            <div key={key} id="saved-basket-container">
                <p> Basket {key + 1} </p>
                <div className="margin flexbox"> {basket && basket.products.map((item, key) => <ProductDetails item={item} key={key}/>)} </div>
            </div>
        )}

        {props.products.length !== 0 && <button onClick={props.Purchase}> Purchase the current Basket </button>}
        {props.products.length !== 0 &&    <button type="reset" onClick={props.ResetBasket}> Reset the current Basket </button>}

    </div>

const ProductDetails = (props, key) =>
    <span key={key} className="basket-productDetails padding">
                   <p id="item-number" className="margin-03"> Item Number: {props.item.number} </p>
                   <p id="item-productName"  className="margin-03"> Name: {props.item.productName} </p>
                   <p id="item-price" className="margin-03"> Price without tax: {props.item.price} € </p>
    </span>

export default Basket;
export {ProductDetails};