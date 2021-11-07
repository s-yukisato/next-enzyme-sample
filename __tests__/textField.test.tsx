import React from "react";
import { mount, ReactWrapper } from "enzyme";
import TextField from "../components/TextField";

describe("TextField", () => {
  let textFieldWrapper: ReactWrapper;
  beforeEach(() => {
    textFieldWrapper = mount(<TextField />);
  });

  afterEach(() => {
    textFieldWrapper.unmount();
  });

  it("Whether the text field changes", () => {
    const textField = textFieldWrapper.find("input");
    expect(textField.prop('value')).toEqual("test");
  
    textField.simulate("change", { target: { value: "Hello" } });
    textFieldWrapper.update();

    const result = textFieldWrapper.find(".text");
    expect(result.text()).toEqual("Hello")
  
  });
});

