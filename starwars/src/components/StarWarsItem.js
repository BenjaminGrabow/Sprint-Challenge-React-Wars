import React from 'react';
import "./StarWars.css";

const StarWarsItem = props => {
        return (
                <div>
                        <ul className="starwars-list">
                                <h1>{props.name}</h1>
                                <li>{`Gender:${props.gender}`}</li>
                                <li>{`Birth year:${props.birthday}`}</li>
                                <li>{`Height:${props.height}`}</li>
                                <li>{`Hair color:${props.hairColor}`}</li>
                        </ul>
                </div>
        )
}

export default StarWarsItem;