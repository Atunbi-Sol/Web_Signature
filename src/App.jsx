import toast, { Toaster } from "react-hot-toast";
import Signature from "./pages/Signature";
function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Signature />
    </>
  );
}

export default App;
