import { Button, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
import './App.scss';
import ListJob from "./components/ListJob";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
      <div className="camigbobhj_btn">
        <Button type="primary" onClick={showModal}>ADD JOB</Button>
        <Modal
          className="zrjfnchewm"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          closeIcon={null}
        >
          <div className="yiydsdrnq">
            <div className="sngsycqtd">
              <Input placeholder='Title' className='gulonzrnvp' />
            </div>
            <div className="sngsycqtd">
              <TextArea placeholder='Description' className='gulonzrnvp' />
            </div>
            <div className="bydbefjekd">
              <Button type="primary">SUBMIT</Button></div>
          </div>
        </Modal>
      </div>
      <div className="gtdkxicism">
        <ListJob jobStatus={"Work"} />
        <ListJob jobStatus={"Working"} />
        <ListJob jobStatus={"Done"} />
      </div>
    </div>
  );
}

export default App;
