import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollButton from "./Components/ScrollButton/ScrollButton";

import DomainDetails from "./Pages/DomainDetails/DomainDetails";
import Landing from "./Pages/Landing/Landing";
import Contribute from "./Pages/Contribute/Contribute";

import React from "react";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/:id" element={<DomainDetails />} />
        </Routes>
      </Router>
      <ScrollButton />
    </div>
  );
}

export default App;
