import React from 'react';
import "./StarWars.css";

const StarWarsItem = props => {
        return (
                <div>
                        <ul className="starwars-list">
                                <h1>{props.name}</h1>
                                <li>{props.gender}</li>
                                <li>{props.birthday}</li>
                                <li>{props.height}</li>
                                <li>{props.hairColor}</li>
                        </ul>
                </div>
        )
}

export default StarWarsItem;