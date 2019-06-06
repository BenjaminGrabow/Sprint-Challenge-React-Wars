import React from 'react';
import "./StarWars.css";
import StarWarsItem from "./StarWarsItem";
import uuid from 'uuid';

const StarWarsList = props => {
        return (
                <div className="star-container">
                        {props.starWarsState.map(val =>
                                <StarWarsItem
                                        name={val.name}
                                        gender={val.gender}
                                        birthday={val.birth_year}
                                        height={val.height}
                                        hairColor={val.hair_color}
                                        key={uuid()}
                                ></StarWarsItem>
                        )}
                </div>

        )
}

export default StarWarsList;