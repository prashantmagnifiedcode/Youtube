
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./componentchat/join";
import Chat from "./componentchat/chat"




function App() {




  return (


    <Router>

      
      <Route path="/chat" component={Chat} />

    </Router>

  );
}

export default App;
