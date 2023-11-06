import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className=" max-w-6xl mx-auto scroll-smooth">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
