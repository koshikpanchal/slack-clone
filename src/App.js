import React from "react";
import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Chat from "./component/Chat";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import { useStateValue } from "./component/StateProvider";

function App() {
  //const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <React.Fragment>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/room/:roomId" element={<Chat />} />
              <Route path="/" element={<h1>Welcome Screen</h1>} />
            </Routes>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
