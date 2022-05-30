import React from "react";
import { shallow } from "enzyme";
import Receipt from './receipt';

describe("Render the Receipt  component", () => {
    let wrapper;
    let props = {}
    props.payedProducts = [{
        taxSales: 15.2,
        totalCost: 100,
        products : [{
            productName: "",
            number: "1",
            price: "",
            taxRate: 10,
            imported: false,
        }]
    }]

    beforeEach(() => (wrapper = shallow(<Receipt  {...props} />)))
    it("should contain Receipt elements", () => {
        expect(wrapper.find(".app-container").length).toEqual(1);
        expect(wrapper.find("h1").text()).toContain(" Receipts ");
        expect(wrapper.find("Button").length).toEqual(1);
    })
})
