import React from 'react';
import { Item } from 'semantic-ui-react';

import plug from '../../img/image.png';

const BooksListItem = ({ book: { title, autor } }) => {
    return (
        <Item>
            <Item.Image src={plug} />
            <Item.Content>
                <Item.Header as='a'>{title}</Item.Header>
                <Item.Meta>
                    <span className='cinema'>{autor}</span>
                </Item.Meta>
                <Item.Description>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, modi. Aperiam voluptatibus porro voluptas quam sunt numquam! Hic quaerat sit, culpa ab pariatur, incidunt amet rem numquam, quod nam ipsam.
                </Item.Description>
            </Item.Content>
        </Item>
    );
}

export default BooksListItem;