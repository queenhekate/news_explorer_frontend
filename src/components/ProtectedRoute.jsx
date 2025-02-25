import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";

function ProtectedRoute({
  children,
  anonymous = false,
  // isLoggedIn,
  // isLoggedInLoading,
}) {
  const {currentUser} = useContext(CurrentUserContext);
  const location = useLocation();
  const from = location.state?.from || "/";

  if (currentUser === null) return null;
  const isLoggedIn = !!currentUser; 
  
  // if (isLoggedInLoading) return null;
  //const { isLoggedIn } = useContext(AppContext);

  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }
  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/saved-news" state={{ from: location }} />;
  }
  return children;
}

export default ProtectedRoute;
