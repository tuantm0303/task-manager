import { Button, Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../store/feature/jobReducer";
import './ModalForm.scss';

const ModalForm = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch()
  const [job, setJob] = useState({
    title: "",
    desc: ""
  })

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (data) => {
    dispatch(
      addJob({
        title: data.title,
        desc: data.desc,
      })
    )
    setJob('')
    setIsModalOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
      className="zrjfnchewm"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      closeIcon={null}
    >
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="yiydsdrnq">
          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: 'Please input your title!',
              },
            ]}
          >
            <div className="sngsycqtd">
              <Input
                placeholder='Title'
                className='gulonzrnvp'
                value={job.title}
                onChange={(e) => setJob({ ...job, title: e.target.value })}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="desc"
            rules={[
              {
                required: true,
                message: 'Please input your description!',
              },
            ]}
          >
            <div className="sngsycqtd">
              <TextArea
                placeholder='Description'
                className='gulonzrnvp'
                value={job.desc}
                onChange={(e) => setJob({ ...job, desc: e.target.value })}
              />
            </div>
          </Form.Item>

          <Form.Item>
            <div className="bydbefjekd">
              <Button
                type="primary"
                htmlType="submit"
              >
                SUBMIT
              </Button>
            </div>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalForm;
