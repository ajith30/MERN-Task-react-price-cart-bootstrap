import "./App.css";
import Card from "./Card";
import data from "./Data"


function App() {
  return (
    // Here we have used <> </> --> React Fragment tag to wrap the child elements.
    <>
    <div className="py-5">
      <div className="container">
        <div className="row">
          <Card model={data.free} />
          <Card model={data.plus} />
          <Card model={data.pro} />
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
