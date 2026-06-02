import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Loader from "./components/Loader";

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return <Home />;

};

export default App;