import { Button } from 'antd';
import { useState } from 'react';
import './App.scss';
import ListJob from "./components/ListJob";
import ModalForm from './components/ModalForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <div className="camigbobhj_btn">
        <Button type="primary" onClick={showModal}>ADD JOB</Button>
        <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
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
