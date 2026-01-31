import { useEffect, useState } from "react";
import "./loader.css";

const Loader = ({load}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // adjust timing

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="loader" className={load ? "show" : "hide"}>
      <div className="box"></div>
    </div>
  );
};

export default Loader;
