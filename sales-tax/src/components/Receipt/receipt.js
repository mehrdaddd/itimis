import React from 'react';
import Button from "../Button/button";

const Receipt = props =>
    <div className="app-container">
        <h1> Receipts </h1>
        <div className="flexbox">
            {props.payedProducts && props.payedProducts.map((receipt, key) =>
                <div key={key} className="margin padding" style={{backgroundColor: "#afdfdf", width:"max-content"}}>
                    <h3> Receipt {key+1} </h3>
                    <p id="sales-tax" className="margin"> Sales Tax: {receipt.taxSales} € </p>
                    <p id="total-cost" className="margin"> Total Cost: {receipt.totalCost} € </p>
                    <div id="products-details" className="flexbox receipt-product-details" >
                        {receipt.products.map((product, key) =>  <p  className="margin-03" key={key} > {product.number} {product.imported ? "imported" : ''} {product.productName} {product.priceWithTax} € </p>) }
                    </div>
                </div>)}
        </div>
        {props.payedProducts.length !== 0 && <Button type="reset" onClick={props.ResetReceipts}> Reset the Receipt </Button> }
    </div>

export default Receipt;

