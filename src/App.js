import './App.css';
import List from "./components/List";

function App() {

    const items = [
        {
            text: "This is text 1"
        },
        {
            text: "This is text 2"
        }
    ]
  return (
    <div className="App">
      <List items={items} />
    </div>
  );
}

export default App;
