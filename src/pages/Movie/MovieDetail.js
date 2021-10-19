import React from 'react';
export default function MovieDetail({ details }) {
  return (
    <div>
      <h3>
        {details.slag.map((item) => {
          return <span>{item} |</span>;
        })}
      </h3>
      <div>
        <div>Year:{details.year}</div>
        <div>Director: {details.director}</div>
        <div>
          Season:{details.seasons} ({details.episodes}Epicodes)
        </div>
        <div>{details.description}</div>
        <button>Stream Now</button>
        <button>All Epicodes</button>
      </div>
    </div>
  );
}
