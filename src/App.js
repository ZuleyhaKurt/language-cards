import data from "./helper/data"
import Card from "./components/Card"
import reactsvg from "./asset/react.svg"


function App() {
  return (
    <div className="App w-100 h-100">
      <div className="text-center">
        <img src={reactsvg} alt="" width="200px" />
      </div>
      <div className="kutu container w-50 m-auto mt-3 p-2 h-75">
        <h1 className="text-center">Languages</h1>
        <div className="d-flex flex-wrap gap row">
          {data.map((item, index) => <Card {...item} key={index} />)}
        </div>
        
     </div>
    </div>
  );
}

export default App;
