import React from "react";
import { shallow } from "enzyme";
import Header from "./header";

describe("Render the Header component", () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<Header/>)))
    it("should contain Header elements", () => {
        expect(wrapper.find(".header-text").text()).toContain(" Sales Tax ");
        expect(wrapper.find('img').length).toEqual(1);
    })
})
