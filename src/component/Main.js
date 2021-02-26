import React, { Component } from "react";

import Card from "react-bootstrap/Card";

import CardColumns from "react-bootstrap/CardColumns";

import "./ownStyle.css";

import data from "./data/Critical.json";


const newdata = data.map((data) => {
  return (
    <div>
      <Card key={data.os}>
        <Card.Body>
          <Card.Title>os</Card.Title>
          <Card.Text>{data.os.value}</Card.Text>
        </Card.Body>
      </Card>
      <Card key={data.ClientName}>
        <Card.Body>
          <Card.Title>ClientName</Card.Title>
          <Card.Text>{data.ClientName.value}</Card.Text>
        </Card.Body>
      </Card>
      <Card key={data.LastUpdated}>
        <Card.Body>
          <Card.Title>LastUpdated</Card.Title>
          <Card.Text>{data.LastUpdated.value}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
});

export default class Main extends Component {
  render() {
    return <CardColumns className=" m-3 p-3 owncard "> {newdata} </CardColumns>;
  }
}
