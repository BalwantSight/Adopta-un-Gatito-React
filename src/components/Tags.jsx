import React from "react";
import Badge from "react-bootstrap/Badge";

const Tags = ({ text, color }) => {
  return (
    <h6>
      <Badge bg={color} className="custom-badge">
        {text}
      </Badge>
    </h6>
  );
};

export default Tags;
