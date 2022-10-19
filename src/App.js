import './index.css';
import Tasks from './components/Tasks'
import Header from './components/Header'
function App() {
  return (
    <div className="container">
      {/* <h1>Hello friend! Charu Here</h1> */}
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
