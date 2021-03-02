import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css'

export const CardList = props => {
    // In first usage to transfer props this method works
    // <div className='card-list'>
    //      {props.children}
    // </div>
    return (
        <div className='card-list'>
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} /> 
            ))}
        </div>
    )
}