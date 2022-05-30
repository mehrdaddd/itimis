import React from "react";
import {mount} from "enzyme";
import AddProduct from './addProduct';
import { render, fireEvent } from '@testing-library/react'

describe("Render the AddProduct component", () => {
    let wrapper;
    beforeEach(() => (wrapper = mount(<AddProduct/>)))

    it("should contain Form elements", () => {
        expect(wrapper.find(".app-container").length).toEqual(1);
        expect(wrapper.find("h1").text()).toContain(" Add Product ");
        expect(wrapper.find('form').length).toEqual(1);
        expect(wrapper.find('input').length).toEqual(4);
        expect(wrapper.find('select').length).toEqual(1);
        expect(wrapper.find("button").length).toEqual(2);
       })

     it ('should input works correctly', () => {
         const {getByLabelText} = render(<AddProduct />)
         const productName = getByLabelText('productName');
         const number = getByLabelText('number');
         const imported = getByLabelText('imported');
         const price = getByLabelText('price');

         fireEvent.change(productName, { target: { value: 'book' } })
         expect(productName.value).toBe('book')

         fireEvent.change(number, { target: { value: "4"} })
         expect(number.value).toBe("4")

         fireEvent.change(number, { target: { value: "on"} })
         expect(imported.value).toBe("on")

         fireEvent.change(price, { target: { value: "100"} })
         expect(price.value).toBe("100")
     })
})
