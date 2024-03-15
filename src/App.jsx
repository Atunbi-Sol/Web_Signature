import { useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import toast from "react-hot-toast";

function App() {
  const [sign, setSign] = useState();
  const [url, setUrl] = useState();
  const [isDisplay, setIsDisplay] = useState(false);

  const handleClear = () => {
    if (!sign.isEmpty()) {
      sign.clear();
      toast.success("content successfully cleared");
    }
    return;
  };
  const handleGenerate = () => {
    if (sign.isEmpty()) {
      toast.error("please sign on the plain space and Upload");
      return;
    }
    setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
    setIsDisplay(true);
  };
  const handleUpload = () => {
    toast.success("uploaded successfuly");
    sign.clear();
    setIsDisplay(false);
  };

  console.log("the sign", sign);
  console.log("the url", url);
  return (
    <div className="main-body">
      <p>Upload Signature</p>
      <div className="sig-container">
        <SignatureCanvas canvasProps={{ width: 450, height: 200, className: "sigCanvas" }} ref={(data) => setSign(data)} />
      </div>
      <div className="sig-btn">
        <button className="but-btn" onClick={handleClear}>
          {" "}
          Clear
        </button>
        <button className="but-btn" onClick={handleGenerate}>
          Save
        </button>
      </div>

      {isDisplay && url.length > 0 && (
        <div className="display">
          <img src={url} alt="sig" className="sig-image" />
          <button className="but-btn" type="button" onClick={handleUpload}>
            Upload
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
