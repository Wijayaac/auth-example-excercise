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
import Root from "./pages/Root";

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
                <Root />
              </Authenticated>
            }>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
