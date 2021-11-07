import { shallow } from "enzyme";
import React from "react";
import Home from "../pages/index";


test("test", () => {
  const component = shallow(<Home />);

  expect(component.find("h1").text()).toEqual("Welcome to Next.js!");

  expect(component.find("h2").first().text()).toEqual('Documentation →');
});
