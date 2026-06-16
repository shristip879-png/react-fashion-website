import { Link } from "react-router-dom";
 function Navbar() {
  return (
    <nav
      style={{
        background: "#111827",
        padding: "20px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white" }}>
        Fashion Boutique
      </h2>

      <div>
        <Link to="/">
          <button
            style={{
              marginRight: "15px",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Home
          </button>
        </Link>

        <Link to="/about">
          <button
            style={{
              marginRight: "15px",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Collection
          </button>
        </Link>

        <Link to="/contact">
          <button
            style={{
              marginRight: "15px",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Contact
          </button>
        </Link>

        <Link to="/order">
          <button
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              background: "#e91e63",
              color: "white",
            }}
          >
            Order
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;