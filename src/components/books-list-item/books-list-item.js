import { Button, Item } from 'semantic-ui-react';
import React from "react";

import plug from "../../img/image.png";

const BooksListItem = ({ book: { id, title, autor }, onAddedToCart }) => {
  return (
    <Item>
      <Item.Image src={plug} />
      <Item.Content>
        <Item.Header as="a">{title}</Item.Header>
        <Item.Meta>
          <span className="cinema">{autor}</span>
        </Item.Meta>
        <Item.Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, modi.
          Aperiam voluptatibus porro voluptas quam sunt numquam! Hic quaerat
          sit, culpa ab pariatur, incidunt amet rem numquam, quod nam ipsam.
        </Item.Description>
        <Item.Extra>
          <Button primary floated="right" onClick = {() => onAddedToCart(id)}>
            Add to cart
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default BooksListItem;
