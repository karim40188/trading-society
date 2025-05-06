import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Redirect() {
  const [searchParams] = useSearchParams();
  const token = decodeURIComponent(searchParams.get("token")); // Safely decode the token
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      // Store the token in local storage
      localStorage.setItem("token", token);
      navigate("/home");
    } else {
      // Redirect to login if no token is found
      navigate("/login");
    }
  }, [token, navigate]);

  return <div>Loading...</div>; // Add better UI for a smooth user experience
}
