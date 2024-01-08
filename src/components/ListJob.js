import ItemJob from './ItemJob';
import './ListJob.scss';

const List = ({ jobStatus }) => {
  const jobs = JSON.parse(localStorage.getItem('jobs'))

  return (
    <div className="fjtekxvnvt_list">
      <h1 className="fdetbnjxio_col">{jobStatus}</h1>
      {jobs?.map((job, index) => {
        return (
          <ItemJob
            key={index}
            title={job?.title}
            desc={job?.desc}
          />
        )
      })}
    </div >
  );
};

export default List;
