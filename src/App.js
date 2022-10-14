import data from "./helper/data"
import Card from "./components/Card"
import reactsvg from "./asset/react.svg"


function App() {
  return (
    <div className="App">
      <div className="head">
        <img src={reactsvg} alt="" width="200px" />
      </div>
      <div className="container">
        <h1 className="header">Languages</h1>
        <div className="box">
          {data.map((item, index) => <Card {...item} key={index} />)}
        </div>
        
     </div>
    </div>
  );
}

export default App;
