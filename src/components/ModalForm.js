import { Button, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const ModalForm = ({ isModalOpen, setIsModalOpen }) => {
  const [job, setJob] = useState({
    title: "",
    desc: ""
  })
  const [jobs, setJobs] = useState([])

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = () => {
    setJobs((prev) => {
      const newJob = { ...job }
      const newJobs = [...prev, newJob]

      localStorage.setItem('jobs', JSON.stringify(newJobs))
      return newJobs
    })
  };


  return (
    <Modal
      className="zrjfnchewm"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      closeIcon={null}
    >
      <div className="yiydsdrnq">
        <div className="sngsycqtd">
          <Input placeholder='Title'
            className='gulonzrnvp'
            value={job.title}
            onChange={(e) => setJob({ ...job, title: e.target.value })}
          />
        </div>
        <div className="sngsycqtd">
          <TextArea placeholder='Description'
            className='gulonzrnvp'
            value={job.desc}
            onChange={(e) => setJob({ ...job, desc: e.target.value })}
          />
        </div>
        <div className="bydbefjekd">
          <Button type="primary" onClick={() => handleSubmit()}>SUBMIT</Button></div>
      </div>
    </Modal>
  );
};

export default ModalForm;
