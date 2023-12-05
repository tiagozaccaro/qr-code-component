//Images/////
import QRCodeImage from "../../assets/image-qr-code.png";

//Style/////
import "./Home.scss";

export default function Home() {
  return (
    <main className="main-container">
      <img src={QRCodeImage} alt="qr-code" className="main-container_qr-code" />

      <section className="main-container_promotional-section">
        <h1 className="promotional-section_title">
          Improve your front-end <br />
          skills by building projects
        </h1>

        <p className="promotional-section_promotional-text">
          Scan the QR code to visit Frontend <br />
          Mentor and take your coding skills to <br />
          the next level
        </p>
      </section>
    </main>
  );
}
