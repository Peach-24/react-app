import React from 'react';
import salaryFormatter from './func-sandbox';

const CurrentRoster = (props) => {
  const updateCurrentSpend = (roster) => {
    let total = 0;
    for (const obj of roster) {
      total += obj.salary;
    }
    return total;
  };
  return (
    <header id='currentRoster' class='rosters'>
      <div id='team-info-box'>
        <h3>Current Roster:</h3>
        <p>
          Number of players: <strong>{props.roster.length}</strong>
        </p>
        <p>
          Spent so far:{' '}
          <strong>{salaryFormatter(updateCurrentSpend(props.roster))}</strong>
        </p>
        <p>
          Budget remaining:{' '}
          <strong>
            {salaryFormatter(150000000 - updateCurrentSpend(props.roster))}
          </strong>
        </p>
        <p id='budget-error'></p>
      </div>
      <ul>
        {props.roster.map((player) => {
          return (
            <li key={player.name} id='player-card'>
              <div className='player-block'>
                <div className='headshot'>
                  <img src={player.url} alt={player.name} />
                </div>
                <div className='player-info'>
                  <h2>{player.name}</h2>
                  <p>Position: {player.position}</p>
                  <p>Salary: {salaryFormatter(player.salary)}</p>
                </div>
                <div className='rating'>
                  <p className='rating'>{player.rating}</p>
                  <button>Remove</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default CurrentRoster;
