import { useState } from 'react';
import styles from './CreateCarForm.module.css';

const clearData = {
  price: '',
  name: '',
  image: '',
};

const CreateCarForm = ({ setCars }) => {
  const [data, setData] = useState({
    price: '',
    name: '',
    image: '',
  });

  const createCar = (e) => {
    e.preventDefault();

    setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);
    setData(clearData);
  };

  return (
    <form className={styles.form}>
      <input
        placeholder="Name"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            name: e.target.value,
          }))
        }
        value={data.name}
      />
      <input
        placeholder="Price"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            price: e.target.value,
          }))
        }
        value={data.price}
      />
      <input
        placeholder="image"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            image: e.target.value,
          }))
        }
        value={data.image}
      />

      <button className="btn" onClick={(e) => createCar(e)}>
        Create
      </button>
    </form>
  );
};

export default CreateCarForm;
