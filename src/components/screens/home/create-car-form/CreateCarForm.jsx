import styles from './CreateCarForm.module.css';
import { useForm } from 'react-hook-form';

const CreateCarForm = ({ setCars }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    made: 'onChange',
  });

  const createCar = ({ data }) => {
    console.log(data);

    setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input
        {...register('name', { required: 'Name is required!' })}
        placeholder="Name"
      />
      {errors?.name?.message && (
        <p
          style={{
            color: 'red',
          }}
        >
          Name is required
        </p>
      )}
      <input {...register('price', { required: true })} placeholder="Price" />
      <input {...register('image', { required: true })} placeholder="image" />

      <button className="btn">Create</button>
    </form>
  );
};

export default CreateCarForm;
