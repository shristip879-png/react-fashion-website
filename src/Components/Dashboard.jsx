import { Link } from "react-router-dom";

const page = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #faf5ff 0%, #fff0f6 35%, #ffffff 100%)",
  padding: "40px 24px",
  color: "#111827",
  fontFamily: "system-ui, sans-serif",
};

const header = {
  maxWidth: "1080px",
  margin: "0 auto 36px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "20px",
};

const title = {
  margin: 0,
  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
  lineHeight: 1.05,
};

const subtitle = {
  marginTop: "18px",
  maxWidth: "560px",
  color: "#4b5563",
  fontSize: "1rem",
  lineHeight: 1.75,
};

const badge = {
  display: "inline-flex",
  padding: "12px 18px",
  borderRadius: "999px",
  background: "#f5d0fe",
  color: "#7c3aed",
  fontWeight: 700,
  fontSize: "0.92rem",
};

const sectionGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "24px",
  maxWidth: "1080px",
  margin: "0 auto",
};

const card = {
  padding: "28px",
  borderRadius: "32px",
  background: "rgba(255, 255, 255, 0.92)",
  boxShadow: "0 25px 60px rgba(15, 23, 42, 0.08)",
  border: "1px solid rgba(229, 231, 235, 0.85)",
};

const cardTitle = {
  margin: 0,
  marginBottom: "14px",
  fontSize: "1.35rem",
  fontWeight: 700,
};

const cardText = {
  margin: 0,
  color: "#4b5563",
  lineHeight: 1.8,
};

const featureList = {
  listStyle: "none",
  padding: 0,
  margin: "20px 0 0",
  display: "grid",
  gap: "14px",
};

const featureItem = {
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  color: "#374151",
  fontWeight: 600,
};

const featureIcon = {
  width: "10px",
  height: "10px",
  marginTop: "8px",
  borderRadius: "999px",
  background: "#f472b6",
};

const actionButton = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  marginTop: "18px",
  padding: "14px 20px",
  borderRadius: "18px",
  border: "none",
  background: "#7c3aed",
  color: "white",
  textDecoration: "none",
  fontWeight: 700,
};

const statsRow = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "18px",
  marginTop: "24px",
};

const statCard = {
  background: "#faf5ff",
  padding: "22px",
  borderRadius: "22px",
  textAlign: "center",
  minHeight: "140px",
};

const statValue = {
  fontSize: "2rem",
  margin: 0,
  color: "#7c3aed",
};

const statLabel = {
  margin: "10px 0 0",
  color: "#6b7280",
};

export default function Dashboard() {
  return (
    <div style={page}>
      <div style={header}>
        <div>
          <p style={badge}>Fashion Boutique Hub</p>
          <h1 style={title}>Your style story starts here.</h1>
          <p style={subtitle}>
            Explore curated collections, track your orders, and discover trending looks built just for your wardrobe.
            Welcome back to the fashion dashboard.
          </p>
          <Link to="/order" style={actionButton}>
            Browse latest collection
          </Link>
        </div>
      </div>

      <div style={sectionGrid}>
        <section style={card}>
          <h2 style={cardTitle}>Featured Collections</h2>
          <p style={cardText}>
            Seasonal edits, bridal essentials, and everyday elegance — all handpicked for a polished wardrobe.
          </p>
          <ul style={featureList}>
            <li style={featureItem}><span style={featureIcon} />Luxury winter essentials</li>
            <li style={featureItem}><span style={featureIcon} />Floral evening wear</li>
            <li style={featureItem}><span style={featureIcon} />Comfortable street style</li>
          </ul>
        </section>

        <section style={card}>
          <h2 style={cardTitle}>Your Fashion Journey</h2>
          <p style={cardText}>
            Discover outfit inspiration, exclusive launches, and styling tips tailored to your personal taste.
          </p>
          <ul style={featureList}>
            <li style={featureItem}><span style={featureIcon} />Daily style inspiration</li>
            <li style={featureItem}><span style={featureIcon} />New arrivals every week</li>
            <li style={featureItem}><span style={featureIcon} />Priority support access</li>
          </ul>
        </section>

        <section style={card}>
          <h2 style={cardTitle}>Order Summary</h2>
          <p style={cardText}>
            Keep track of your latest purchases and manage favorites effortlessly from the dashboard.
          </p>
          <div style={statsRow}>
            <div style={statCard}>
              <p style={statValue}>12</p>
              <p style={statLabel}>Items ordered</p>
            </div>
            <div style={statCard}>
              <p style={statValue}>3</p>
              <p style={statLabel}>Pending deliveries</p>
            </div>
            <div style={statCard}>
              <p style={statValue}>24</p>
              <p style={statLabel}>Saved favorites</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
