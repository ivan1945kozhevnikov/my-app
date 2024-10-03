import { useState } from 'react';
import styles from './CreateCarForm.module.css';

const CreateCarForm = ({setCars}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  
  const createCar = (e) => {
    e.preventDefault();
    setCars((prev) => [...prev, { id: prev.length + 1, name, price, image }]);
  };

  return (
    <form>
      <input
        className={styles.form}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        className={styles.form}
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <input
        className={styles.form}
        placeholder="image"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />

      <button className="btn" onClick={(e) => createCar(e)}>
        Create
      </button>
    </form>
  );
};

export default CreateCarForm;
