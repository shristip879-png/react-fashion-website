 export function About() {
  const addToCart = (item) => {
    alert(`${item} added to cart ❤️`);
  };

  const products = [
    {
      name: "Designer Silk Saree",
      price: "₹8,999",
      date: "March 2025",
      image:
        "https://images.cbazaar.com/images/red-banarasi-silk-jacquard-saree-sasli1265150-u.jpg",
    },

    {
      name: "Luxury One Piece Dress",
      price: "₹5,499",
      date: "February 2025",
      image:
        "https://ae01.alicdn.com/kf/Saa55b931b75e4d35baba279c186da14bV/French-Designer-Korean-One-piece-Dress-Women-Sequin-Fairy-Party-Dress-Women-Spring-Elegant-Vintage-Retro.jpg",
    },

    {
      name: "Premium Evening Gown",
      price: "₹10,999",
      date: "January 2025",
      image:
        "https://i.pinimg.com/736x/6c/98/d3/6c98d353db179447119a8d95dd257501.jpg",
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>
        Designer Collection
      </h1>

      <div
        style={{
          display: "flex",
          gap: "25px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {products.map((item, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              background: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>{item.name}</h3>

              <p>
                Manufacture Date: {item.date}
              </p>

              <h2 style={{ color: "#e91e63" }}>
                {item.price}
              </h2>

              <button
                onClick={() =>
                  addToCart(item.name)
                }
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  borderRadius: "10px",
                  background: "#e91e63",
                  color: "white",
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;