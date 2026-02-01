import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Body from './components/Body'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const container = document.getElementById("spark-container");

        const createSpark = (x, y) => {
          const spark = document.createElement("span");
          spark.className = "spark";

          spark.style.left = `${x}px`;
          spark.style.top = `${y}px`;

          container.appendChild(spark);
          spark.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
          const colors = ["#03fac0", "#00ffd5", "#7fffd4"];
          spark.style.background = colors[Math.floor(Math.random() * colors.length)];

          setTimeout(() => {
            spark.remove();
          }, 1000);
        };

        let lastTime = 0;
        const handleMouseMove = (e) => {
          const now = Date.now();
          if (now - lastTime > 0) {
            createSpark(e.clientX, e.clientY);
            lastTime = now;
          }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
  }, []);

  return (
    <div className='bg-zinc-950'>
      <div id="spark-container"></div>
      <Loader />
      <Navbar />
      <Body />
    </div>
  )
}

export default App