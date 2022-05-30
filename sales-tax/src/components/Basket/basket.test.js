import React from "react";
import {shallow} from "enzyme";
import Basket, {ProductDetails} from "./basket";

let item = {
    productName: "",
    number: "1",
    price: "",
    taxRate: 10,
    imported: false,
}
let products =[item]

describe("Render the Basket component", () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<Basket products={products} />)))
    it("should contain Basket elements", () => {
        expect(wrapper.find(".app-container").length).toEqual(1);
        expect(wrapper.find("h1").text()).toContain(" Baskets ");
        expect(wrapper.find("button").length).toEqual(2);
    })
})

describe("Render the ProductDetails component", () => {
    let container;
    beforeEach(() => (container = shallow(<ProductDetails item={item}/>)))
    it("should contain ProductDetails elements", () => {
        expect(container.find("p").length).toEqual(3);
        expect(container.find({id: "item-number"}).text()).toContain(" Item Number: 1 ");
        expect(container.find({id: "item-productName"}).text()).toContain(" Name: ");
        expect(container.find({id: "item-price"}).text()).toContain(" Price without tax: ");
    })
})
