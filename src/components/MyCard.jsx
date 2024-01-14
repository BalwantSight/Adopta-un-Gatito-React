import React from "react";
import Card from "react-bootstrap/Card";
import Tags from "./Tags";
import Button from "./Button";

const MyCard = ({ img, nombre, info, race, color, button }) => {
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{info}</Card.Text>
        <Tags text={race} color={color} />
        <Button text={button} color={color} />
      </Card.Body>
    </Card>
  );
};

export default MyCard;
