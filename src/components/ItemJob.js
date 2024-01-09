import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import './ItemJob.scss';

const ItemJob = ({ title, desc, id, handleDelete }) => {
  return (
    <div className="wlgwnxkuca_item">
      <div className="cnnpomcvrg_title">{title}</div>
      <div className="idzbwkwnte_desc">{desc}</div>
      <div className="henmcposup_btn">
        <CiEdit className="bjvnitqkwa" />
        <MdDeleteOutline onClick={() => handleDelete(id)} className="bjvnitqkwa" />
      </div>
    </div>
  );
};

export default ItemJob;
