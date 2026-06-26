import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabase";

const pageStyles = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top left, #fdf2f8 0%, #fff7ed 35%, #ffffff 100%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px 24px",
  color: "#111827",
  position: "relative",
  overflow: "hidden",
};

const glowDot = (top, left, size, color, opacity) => ({
  position: "absolute",
  width: size,
  height: size,
  borderRadius: "50%",
  background: color,
  opacity,
  top,
  left,
  filter: "blur(30px)",
  pointerEvents: "none",
});

const topStyles = {
  width: "min(1080px, 100%)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  marginBottom: "32px",
  position: "relative",
  zIndex: 1,
};

const tabsStyles = {
  display: "flex",
  gap: "10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.72)",
  boxShadow: "0 18px 50px rgba(15, 23, 42, 0.12)",
  backdropFilter: "blur(12px)",
};

const tabButton = (active) => ({
  border: "none",
  background: active ? "linear-gradient(135deg, #7c3aed, #ec4899)" : "transparent",
  color: active ? "#ffffff" : "#6b7280",
  padding: "14px 28px",
  borderRadius: "999px",
  fontWeight: 700,
  cursor: "pointer",
  transition: "all 0.25s ease",
  boxShadow: active ? "0 18px 35px rgba(124, 58, 237, 0.22)" : "none",
});

const cardStyles = {
  width: "min(1080px, 100%)",
  background: "rgba(255,255,255,0.9)",
  borderRadius: "36px",
  overflow: "hidden",
  boxShadow: "0 40px 120px rgba(15, 23, 42, 0.12)",
  display: "grid",
  gridTemplateColumns: "1.1fr 1fr",
  minHeight: "620px",
  position: "relative",
  zIndex: 1,
};

const leftPanelStyles = {
  background: "linear-gradient(180deg, #f5f3ff 0%, #fdf2f8 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "50px",
};

const rightPanelStyles = {
  background: "#ffffff",
  padding: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const infoBox = {
  width: "100%",
  maxWidth: "360px",
  borderRadius: "32px",
  background: "rgba(255,255,255,0.95)",
  padding: "32px",
  boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
};

const statItem = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  marginTop: "22px",
};

const statDot = {
  width: "14px",
  height: "14px",
  borderRadius: "50%",
  background: "#ec4899",
};

const formPanelStyles = {
  width: "100%",
  maxWidth: "420px",
};

const inputStyles = {
  width: "100%",
  border: "1px solid rgba(229, 231, 235, 0.9)",
  borderRadius: "16px",
  padding: "16px",
  marginBottom: "16px",
  fontSize: "1rem",
  outline: "none",
  color: "#111827",
  background: "#f8fafc",
};

const buttonStyles = {
  width: "100%",
  background: "linear-gradient(135deg, #7c3aed, #ec4899)",
  color: "#ffffff",
  border: "none",
  borderRadius: "16px",
  padding: "16px",
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 18px 30px rgba(124, 58, 237, 0.18)",
};

const loginHelp = {
  color: "#6b7280",
  marginTop: "20px",
  fontSize: "0.95rem",
  lineHeight: 1.75,
};

const errorStyles = {
  marginBottom: "16px",
  color: "#b91c1c",
  fontSize: "0.95rem",
};

export default function Auth() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [signName, setSignName] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const [signPassword, setSignPassword] = useState("");
  const [signError, setSignError] = useState("");
  const [signLoading, setSignLoading] = useState(false);

  const handleLogin = async () => {
    setLoginError("");
    setLoginLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });

    setLoginLoading(false);

    if (error) {
      setLoginError(error.message);
      return;
    }

    navigate("/dashboard");
  };

  const handleSignup = async () => {
    setSignError("");
    setSignLoading(true);

    const { error } = await supabase.auth.signUp({
      email: signEmail,
      password: signPassword,
      options: {
        data: {
          full_name: signName,
        },
      },
    });

    setSignLoading(false);

    if (error) {
      setSignError(error.message);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div style={pageStyles}>
      <div style={glowDot("10%", "8%", "220px", "#f472b6", 0.24)} />
      <div style={glowDot("75%", "80%", "180px", "#8b5cf6", 0.18)} />
      <div style={glowDot("65%", "15%", "120px", "#fb7185", 0.2)} />

      <div style={topStyles}>
        <div>
          <h1 style={{ margin: 0, fontSize: "clamp(2.4rem, 4vw, 3.6rem)", lineHeight: 1.02 }}>
            Login to your fashion dashboard.
          </h1>
          <p style={{ color: "#6b7280", marginTop: 14, maxWidth: 520, fontSize: "1rem", lineHeight: 1.75 }}>
            Sign in to browse style edits, manage orders, and enjoy exclusive fashion previews designed for your wardrobe.
          </p>
        </div>

        <div style={tabsStyles}>
          <button
            style={tabButton(activeTab === "login")}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            style={tabButton(activeTab === "signup")}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>
      </div>

      <div style={cardStyles}>
        <div style={leftPanelStyles}>
          <div style={infoBox}>
            <h2 style={{ margin: 0, fontSize: "1.85rem", color: "#4c1d95" }}>
              Discover premium style updates.
            </h2>
            <p style={{ marginTop: 18, color: "#57534e", lineHeight: 1.8 }}>
              Unlock curated collections, track your latest orders, and save your favorite looks in one beautiful space.
            </p>
            <div style={statItem}>
              <div style={statDot} />
              <span>New arrivals every week</span>
            </div>
            <div style={statItem}>
              <div style={statDot} />
              <span>Exclusive styling tips</span>
            </div>
            <div style={statItem}>
              <div style={statDot} />
              <span>Fast checkout and order tracking</span>
            </div>
          </div>
        </div>

        <div style={rightPanelStyles}>
          <div style={formPanelStyles}>
            {activeTab === "login" ? (
              <>
                <h3 style={{ marginBottom: 16, fontSize: "1.75rem" }}>
                  Welcome back
                </h3>
                <input
                  style={inputStyles}
                  type="email"
                  placeholder="Email Address"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                <input
                  style={inputStyles}
                  type="password"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                {loginError && <p style={errorStyles}>{loginError}</p>}
                <button style={buttonStyles} onClick={handleLogin} disabled={loginLoading}>
                  {loginLoading ? "Signing in..." : "Sign In"}
                </button>
                <p style={loginHelp}>
                  Use your email and password to access your dashboard, manage collections, and place orders.
                </p>
              </>
            ) : (
              <>
                <h3 style={{ marginBottom: 16, fontSize: "1.75rem" }}>
                  Create an account
                </h3>
                <input
                  style={inputStyles}
                  type="text"
                  placeholder="Full Name"
                  value={signName}
                  onChange={(e) => setSignName(e.target.value)}
                />
                <input
                  style={inputStyles}
                  type="email"
                  placeholder="Email Address"
                  value={signEmail}
                  onChange={(e) => setSignEmail(e.target.value)}
                />
                <input
                  style={inputStyles}
                  type="password"
                  placeholder="Password"
                  value={signPassword}
                  onChange={(e) => setSignPassword(e.target.value)}
                />
                {signError && <p style={errorStyles}>{signError}</p>}
                <button style={buttonStyles} onClick={handleSignup} disabled={signLoading}>
                  {signLoading ? "Creating account..." : "Create Account"}
                </button>
                <p style={loginHelp}>
                  Get instant access to curated fashion picks and your own personalized dashboard.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
