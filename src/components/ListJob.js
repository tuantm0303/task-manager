import ItemJob from "./ItemJob";
import './ListJob.scss';

const List = ({ jobStatus }) => {
  const jobs = [
    {
      id: 1,
      title: 'Learn React',
      desc: 'I need learn React'
    },
    {
      id: 2,
      title: 'Learn Vue',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit ipsum voluptates iure consequatur esse eum voluptate officia dicta accusamus error beatae dolore quod neque, quo nesciunt cum nostrum consequuntur!'
    },
    {
      id: 3,
      title: 'Learn Angular',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ducimus neque placeat iure odio nesciunt! Pariatur consectetur aperiam recusandae sint sunt et tempora, nesciunt quisquam impedit voluptatibus porro doloremque enim!'
    },
  ];

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
    </div>
  );
};

export default List;
