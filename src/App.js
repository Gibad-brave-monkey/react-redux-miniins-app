import Likes from './Likes';
import Title from './TItle';
import Comments from './Comments';
import Spin from './Spin';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrap"> 
          <Spin/>
        <div className="card">
          <div className="card-image">
            < img src = "./normal_Oec53SLJfaY.jpeg"
            alt = "surfing" / >
            <Title/>
            <Likes/>
          </div>
          <Comments/>
        </div>
      </div>
    </div>
  );
}

export default App;
