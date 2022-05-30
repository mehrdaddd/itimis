import React from "react";
import { shallow} from 'enzyme';
import App from './App';
import {roundUp} from "./App";

describe('Render App component', () => {
    const wrapper = shallow(<App />);

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })

    it('Should contain App elements', () => {
        expect(wrapper.find('AddProduct').length).toEqual(1);
        expect(wrapper.find('Basket').length).toEqual(1);
        expect(wrapper.find('Receipt').length).toEqual(1);
    });

    it('Should round up the number', () => {
        let input = [5.549, 5.545, 5.542];
        let output=  [5.55,5.55, 5.55]   ;
       input.forEach((n, k) => (
            expect(roundUp(n)).toBe(output[k])
    ));
    });
});