import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { TokenContext } from "../context/index"; // Update the path to where TokenContext is defined

function ProtectedRouter({ children }) {
  const { token } = useContext(TokenContext);

  // If token doesn't exist, redirect to login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If token exists, render the child components
  return children;
}

// Add PropTypes validation
ProtectedRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRouter;
