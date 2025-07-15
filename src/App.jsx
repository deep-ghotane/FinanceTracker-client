import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import DefaultLayout from "./components/layout/DefaultLayout";

function App() {
  return (
    <>
      {/* define the route */}

      <div className="wrapper">
        <Routes>
          <Route path="*" element={<DefaultLayout />}>
            {/* public page */}
            <Route path="" element={<Login />} />
            {/* login */}
            <Route path="login" element={<Login />} />
            {/* signup */}
            <Route path="signup" element={<Signup />} />

            {/* private page */}
            {/* dashboard */}
            <Route path="dashboard" element={<Dashboard />} />
            {/* transaction */}
            <Route path="transaction" element={<Transaction />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
