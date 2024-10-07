import { useParams } from 'react-router-dom';
import { withAuth } from '../../../HOC/withAuth';

const CarDetail = () => {
  const { id } = useParams();

  return <div>CarDetail {id}</div>;
};

export default withAuth(CarDetail);
