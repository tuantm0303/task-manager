import { useDispatch, useSelector } from 'react-redux';
import { deleteJob } from '../store/feature/jobReducer';
import ItemJob from './ItemJob';
import './ListJob.scss';

const List = ({ jobStatus }) => {
  const dispatch = useDispatch()
  const { jobs } = useSelector((state) => state.jobReducer);

  const handleDelete = (id) => {
    dispatch(deleteJob(id))
  }
  return (
    <div className="fjtekxvnvt_list">
      <h1 className="fdetbnjxio_col">{jobStatus}</h1>
      {jobs?.map((job, index) => {
        return (
          <ItemJob
            key={index}
            id={index}
            title={job?.title}
            desc={job?.desc}
            handleDelete={handleDelete}
          />
        )
      })}
    </div >
  );
};

export default List;
