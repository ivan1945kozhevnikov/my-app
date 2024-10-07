import { useState } from 'react';
import styles from '../Home.module.css';
import Price from './Price';

const CarItem = ({ car }) => {
  const [ count, setCount ] = useState(0);
  return (
    <div key={car.id} className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${car.image})`,
        }}
      />
      <div className={styles.info}>
        <h2>{car.name}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
        <Price price={car.price} />
        <button>Read more</button>
      </div>
    </div>
  );
};

export default CarItem;
