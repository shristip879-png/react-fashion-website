import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "./supabase";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="left-panel">
        <div className="overlay">
          <h1>Elegance</h1>
          <p>Discover fashion that defines your style.</p>
        </div>
      </div>

      <div className="right-panel">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p>Login to continue shopping</p>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button onClick={submit}>
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <div className="extra-links">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <p className="signup-text">
            Don't have an account? <Link to="/signup">Create One</Link>
          </p>
        </div>
      </div>
    </div>
  );
}