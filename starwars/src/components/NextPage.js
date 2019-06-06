import React from 'react';
import "./StarWars.css";


const NextPage = props => {
  return (
    <div>
      <button
        onClick={() => props.nextPage(props.pageNumber, props.url)}
      >
        Show Characters
            </button>
    </div>
  )
}

export default NextPage;
