import { useCallback, useContext, useState } from 'react';
import CarItem from './car-item/CarItem.jsx';
import { cars as carsData } from './cars.data.js';
import CreateCarForm from './create-car-form/CreateCarForm.jsx';
import VideoPlayer from './Player.jsx';
import { AuthContext } from '../../../providers/AuthProvider.jsx';

const Home = () => {
  const [cars, setCars] = useState(carsData);

  const clearCars = useCallback(
    () => () => {
      setCars([]);
    },
    [cars]
  );

  const { user, setUser } = useContext(AuthContext);
  return (
    <div>
      <h1>Cars catalog</h1>{' '}
      {user ? (
        <>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => setUser(null)}>Logout</button>
        </>
      ) : (
        <button
          onClick={() =>
            setUser({
              name: 'Max',
            })
          }
        >
          Login
        </button>
      )}
      <VideoPlayer />
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  );
};

export default Home;
