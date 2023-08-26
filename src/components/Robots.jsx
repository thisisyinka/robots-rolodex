import React, { useEffect, useState } from 'react';
import Search from './Search';

const Robots = () => {
  const [robots, setRobots] = useState([]);
  const [value, setValue] = useState('');
  const [filteredRobots, setFilteredRobots] = useState(robots);

  const handleOnChange = (e) => setValue(e.target.value.toLowerCase());

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  useEffect(() => {
    const newFilteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(value),
    );
    setFilteredRobots(newFilteredRobots);
  }, [robots, value]);

  return (
    <div className='robots-wrapper'>
      <Search onChange={handleOnChange} />
      <div className='card-list'>
        {filteredRobots.map((filteredRobot) => {
          const { name, email, id, website } = filteredRobot;
          return (
            <div key={id} className='card-container'>
              <img
                src={`https://robohash.org/${id}?&size=180x180`}
                alt={`monster ${name}`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
              <p>{website}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Robots;
