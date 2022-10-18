import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Authenticated from "./pages/Authenticated";

function App() {
  return (
    <BrowserRouter>
      <Toaster reverseOrder={false} position={"top-center"} />
      <div className='page-wrap'>
        <Routes>
          <Route
            path='/'
            element={
              <Authenticated>
                <Dashboard />
              </Authenticated>
            }
          />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
