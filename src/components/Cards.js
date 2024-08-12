import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ jobs }) => {
  return (
    <>
      {jobs.map(job => (
        <div className="card-jobs" key={job.id}>
          <div className="titlebar font-face-futur-LT">
            <span>{job.location}</span>
            <p>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAYAAAB7u5a2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG9SURBVHgBtVRNLwNRFL13ZiqUVi3EfFjQXyDWfoUVIiGRECtddMMGkVghrAiJxi+QSNjYWPITbKqSlu5a08F00XlOE5N02gnTJ87mvXPPfedN7r3ziP4RTH+AZRkZISjDzH1CiKvPTzdbqVTefF0lSViWvkikHMM4BdqPdTIWiyVrtdqNn6OQNHghJDjXSqTMUwDMjRDJbiUadWkaj/euMSuZJm3XmSkX4BQRhmHM4/AeajsCeo8L1rGijyLLLBrYXheLr2c/mo+Omks4sAJpUAjvllm9BN+C8RTkIkx2SqXXU4qAgPn3BOQ6kpirMD1ynI/DKkAREai5EMoshxRK097HC4Xopj7ap6USluS6vSmSQMBcUbyTsCRVVZ5MUz/XdX2MukDgD7Vtp5BIJB5R42FQF1Owr2k9y54nxhGbQcmmBwb6heO8P0QxjzyKpmk2+7GL7Rimp4CLtz3Pq2KaVhGLQ7vEFB1ImfuwLGsRrd9sXtKuNRpetlwu70ubN5FOpwfrdfcO24k2qVoqvQz5ROptyefzb3hqn3/Lk34VVZVynVFxHsghSdh27TGZTOLrGWXgZzT0Ag3daM35AnEfkspzq2NBAAAAAElFTkSuQmCC" alt="share icon" />
            </p>
          </div>
          <div className="card-dis font-face-futur-md-bt">
            <h1>{job.title}</h1>
            <p>{job.experience} | {job.nos}</p>
          </div>
          <div className="card-bottom-bar">
          <a href={`/job/${job._id}`}>
              <button className="font-face-futur-md-bt button-style" style={{cursor:"pointer",fontSize:"18px"}} >Apply Now</button>
            </a>
            <span className="font-face-futur-LT">{job.post}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
