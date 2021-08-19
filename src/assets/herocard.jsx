import React from 'react';
import Scores from './scores';

function Card(props){
    return (
        props.heroes.map((hero =>{
            return(
            <div className="information">
                <h2 className="information_header">{hero.name}</h2>
                <img src={hero.imgSrc} className="information_picture" alt='superhero'/>
                <p className="information_universe"><b>Вселенная</b>: {hero.universe}</p>
                <p className="information_alter-ego"><b>Альтерэго</b>: {hero.alterEgo}</p>
                <p className="information_sort-of-activity"><b>Род деятельности</b>: {hero.sortOfActivity}</p>
                <p className="information_friends"><b>Друзья</b>: {hero.friends}</p>
                <p className="information_superpower"><b>Суперсилы</b>: {hero.superpower}</p>
                <p className="information_details"><b>Подробнее</b>: {hero.details}</p>
                <Scores></Scores>
            </div>
            
            )
        })
    )
)}

export default Card;