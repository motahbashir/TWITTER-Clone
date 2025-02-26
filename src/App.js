
import './App.css';
import Sidebar from './Sidebar';
import './Sidebar.css'
import Feed from './Feed';
import Widgets from './Widgets';
import TweetBox from './TweetBox';
import Post from './Post';


function App() {
  return (
    <div className="App">
     
      <Sidebar/>

      
      <Feed/>
      
      <Widgets/>
      {/*widget*/}
     
      
    </div>
  );
}

export default App;
