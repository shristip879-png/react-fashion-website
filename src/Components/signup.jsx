import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "./supabase";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="signup-page">
      {/* Left Side */}
      <div className="left-panel">
        <div className="overlay">
          <h1>Elegance</h1>
          <p>Create your account and discover timeless fashion.</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-panel">
        <div className="signup-card">
          <h2>Create Account</h2>
          <p>Join our fashion community</p>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <button onClick={submit} disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <p className="signup-text">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}