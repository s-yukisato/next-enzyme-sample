import React from "react";

const TextField = () => {
  const [text, setText] = React.useState("test");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p className="text">{text}</p>
    </div>
  );
};

export default TextField;
