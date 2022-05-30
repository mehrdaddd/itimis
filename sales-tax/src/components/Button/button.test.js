import {shallow} from "enzyme";
import Button from "../Button/button";
import React from "react";

     it('shallow click call', () => {
         const mockCallBack = jest.fn();
         const button = shallow(<Button  type="reset" onClick={mockCallBack}></Button>);
         button.find("button").simulate('click');
         expect(mockCallBack.mock.calls.length).toEqual(1);
    });


