import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Home from "../pages/index";

describe("Home page", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('renders h1 correctly', () => {
    expect(wrapper.find("h1").text()).toEqual("Welcome to Next.js!");
  });

  it('一つ目の見出しがあるか', () => {
    expect(wrapper.find("h2").first().text()).toEqual("Documentation →");
  })
});
