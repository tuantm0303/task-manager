import { Button } from "antd";
import './App.scss';
import ListJob from "./components/ListJob";

function App() {
  return (
    <div className="App">
      <Button type="primary">ADD JOB</Button>
      <div className="container">
        <ListJob />
        <ListJob />
        <ListJob />
      </div>
    </div>
  );
}

export default App;
