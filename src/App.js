import React, { useState, useEffect } from "react";
import Pages from './pages';
import "./style.css";

function App() {
  const [user, setUser] = useState(null);
  useState(() => {
    fetch ('https://gitconnected.com/v1/portfolio/arpartch')
    .then(res => res.join())
    .then(user => {
      setUser(user);
    });
  }, []);
if (!user) {
  return <div />;
}

  return <Pages user={user} />;


}

export default App;