import "./App.css";

import qrCode from "./images/qr_img.png";

function App() {
    return (
        <div className="App">
            <div className="qr-image">
                <img src={qrCode} alt="QR Code" />
            </div>
            <div className="content">
                <h1>Improve your front-end skills by building projects</h1>
                <p>
                    Scan the qr code to visit my website and find more
                    information about me and my career.
                </p>
            </div>
        </div>
    );
}

export default App;
