export function HomeHero() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
      }}
    >
      <img
        src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
        alt="Fashion"
        style={{
          width: "80%",
          borderRadius: "20px",
        }}
      />

      <h1>Fashion Boutique</h1>

      <p>
        Elegant Sarees • Designer Dresses • Luxury Collection
      </p>

      <button
        style={{
          padding: "15px 30px",
          border: "none",
          borderRadius: "10px",
          background: "#e91e63",
          color: "white",
        }}
      >
        Shop Now
      </button>
    </div>
  );
}

export default HomeHero;