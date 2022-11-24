
// import './App.css';
// // import Search from './components/Search';
// import Table from './components/Tables';


// function App() {
//   return (
//     <div className="App">
//     {/* <Search/> */}
//     <Table/>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import Profile from "./components/Profile/Profile";
// import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// function App() {
//   const [userstate, setUserState] = useState({});
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               userstate && userstate._id ? (
//                 <Profile
//                   setUserState={setUserState}
//                   username={userstate.fname}
//                 />
//               ) : (
//                 <Login setUserState={setUserState} />
//               )
//             }
//           ></Route>
//           <Route
//             path="/login"
//             element={<Login setUserState={setUserState} />}
//           ></Route>
//           <Route path="/signup" element={<Register />}></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;




import React from "react";
import "./App.css"
import {
  BrowserRouter, Routes,Route
  
} from "react-router-dom";
import FeaturedProducts from "./components/page/FeaturedProducts";
import Product from "./components/page/Product";
// import User from "./components/rend/User";
// import Home from "./components/rend/Home";

const App = () => {
  return (
    <BrowserRouter>
     <div>
      {/* <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/users'>User</Link>
        </li>
      </ul> */}
    <Routes>
      {/* <Route path="/" element={<Home/>} />
      <Route path="/users" element={<User/>} /> */}
<Route path="/" element={<FeaturedProducts />} />
<Route path="/" element={<Product />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
