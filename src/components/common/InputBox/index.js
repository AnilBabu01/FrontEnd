import React from "react";
const Index = ({
  type = "text",
  placeholder = "",
  title = "",
  className = "",
  ...props
}) => {
  return (
    <div>
      <p className="label">{title}</p>
      <input
        type={type}
        placeholder={placeholder}
        className={`defaultStyles ${className}`}
        {...props}
      />
    </div>
  );
};

export default Index;
