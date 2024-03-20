import toast, { Toaster } from "react-hot-toast";
import Signature from "./pages/Signature";
import ReactCamera from "./pages/ReactCamera";
function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Signature />
      <ReactCamera />
    </>
  );
}

export default App;
