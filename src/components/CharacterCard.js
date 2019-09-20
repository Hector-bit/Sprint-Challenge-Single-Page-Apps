import React from "react";
import CharacterList from "./CharacterList"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink
} from 'reactstrap';

// export default function CharacterCard() {
//   return (
//   <div className="Cast">
//     <span>todo: character</span>
//     <CharacterList></CharacterList>
//   </div>
//   )
// }


//my code 

const CharacterCard = props => {
  return (
      <div>
        <Card className="Card">
          <CardImg className="CardImg" top width="100%" src={props.image} alt="Character image"/>
          <CardBody>
            <CardText className="CardText">{props.name}</CardText>
            <CardText className="CardText">{props.status}</CardText>
            <CardText className="CardText">{props.location}</CardText>
            <CardText className="CardText">{props.species}</CardText>
          </CardBody>
        </Card>
      </div>
);
};


export default CharacterCard;