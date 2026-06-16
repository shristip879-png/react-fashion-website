// OrderPage.jsx
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Add product
  async function addProduct() {
    const { error } = await supabase.from("Products").insert([
      { Name: name, Description: description, Price: price },
    ]);

    if (error) {
      alert("❌ Error adding product: " + error.message);
    } else {
      alert("✨ Product added successfully!");
      setName("");
      setDescription("");
      setPrice("");
      fetchProducts();
    }
  }

  // Fetch products
  async function fetchProducts() {
    const { data, error } = await supabase.from("Products").select("*");
    if (error) {
      console.error(error);
    } else {
      setProducts(data || []);
    }
  }

  // Delete product
  async function deleteProduct(id) {
    await supabase.from("Products").delete().eq("id", id);
    fetchProducts();
  }

  // Add to cart (local state)
  function addToCart(product) {
    setCart((prev) => [...prev, product]);
    alert(`🛍️ ${product.Name} added to cart!`);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navigation Bar */}
      <nav
        style={{
          backgroundColor: "#222",
          padding: "15px",
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </Link>

        <Link to="/order" style={{ color: "white", textDecoration: "none" }}>
          Order
        </Link>
      </nav>

      <div style={{ padding: "30px" }}>
        <h1 style={{ color: "#ff4081" }}>✨ Fashion Boutique ✨</h1>

        {/* Product Form */}
        <div
          style={{
            background: "#fff0f6",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "30px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            maxWidth: "400px",
          }}
        >
          <h2>Add New Product</h2>

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
          />

          <button
            onClick={addProduct}
            style={{
              backgroundColor: "#ff4081",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            ➕ Add Product
          </button>
        </div>

        {/* Product List */}
        <h2>🛍️ Our Fashion Products</h2>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                width: "250px",
                background: "#fff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: "#ff4081" }}>{p.Name}</h3>
              <p>{p.Description}</p>
              <h4>₹{p.Price}</h4>

              <button
                onClick={() => addToCart(p)}
                style={{
                  backgroundColor: "#ff4081",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                🛒 Add to Cart
              </button>

              <button
                onClick={() => deleteProduct(p.id)}
                style={{
                  backgroundColor: "#444",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div style={{ marginTop: "40px" }}>
          <h2>🛒 Your Cart</h2>

          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cart.map((item, index) => (
              <p key={index}>
                {item.Name} — ₹{item.Price}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}