import Likes from './Likes';
import Title from './TItle';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            < img src = "./normal_Oec53SLJfaY.jpeg"
            alt = "surfing" / >
            <Title/>
            <Likes/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
