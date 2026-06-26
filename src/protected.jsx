// src/protected.jsx

import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./components/supabase";

export default function Protected({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
      setLoading(false);
    };

    checkUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
