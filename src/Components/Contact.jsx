export function Contact() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
      }}
    >
      <img
        src="https://s3-alpha.figma.com/hub/file/2817737123/c0f7119d-2e9c-41b7-90c4-03f2caed91bf-cover.png"
        alt="Contact"
        style={{
          width: "70%",
          borderRadius: "20px",
        }}
      />

      <h1>Contact Us</h1>

      <p>Email: fashionboutique@gmail.com</p>

      <p>Phone: +91 9876543210</p>

      <p>Mumbai, India</p>

      <button
        onClick={() =>
          window.open(
            "https://www.instagram.com",
            "_blank"
          )
        }
        style={{
          padding: "15px 30px",
          border: "none",
          borderRadius: "10px",
          background: "#e91e63",
          color: "white",
          cursor: "pointer",
        }}
      >
        Follow on Instagram
      </button>
    </div>
  );
}

export default Contact;