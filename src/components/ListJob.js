import { useState } from 'react';
import ItemJob from './ItemJob';
import './ListJob.scss';

const List = ({ jobStatus }) => {
  const [jobs, setJobs] = useState(() => {
    const getLocalState = JSON.parse(localStorage.getItem('jobs'))
    return getLocalState || []
  })

  const handleDelete = (id) => {
    const newJobs = jobs.filter((_, index) => index !== id)
    setJobs(newJobs)
    localStorage.setItem('jobs', JSON.stringify(newJobs))
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
