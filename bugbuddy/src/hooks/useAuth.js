import { useSelector } from 'react-redux';
import { selectCurrentToken } from "../features/auth/authSlice";
import { jwtDecode } from 'jwt-decode';

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let id = '';
  let username = '';
  let roles = [];
  let status = "Employee";
  let isManager = false;
  let isQualityAssurance = false;
  let isDeveloper = false;
  let isAdmin = false;

  if (token) {
    const decoded = jwtDecode(token);
    id = decoded.UserInfo.id;
    username = decoded.UserInfo.username;
    roles = decoded.UserInfo.roles;

    isManager = roles.includes('Manager');
    isQualityAssurance = roles.includes('Quality Assurance');
    isDeveloper = roles.includes('Developer');
    isAdmin = roles.includes('Admin');

    if (isManager) status = "Manager";
    if (isQualityAssurance) status = "Quality Assurance";
    if (isDeveloper) status = "Developer";
  }

  return { id, username, roles, status, isManager, isQualityAssurance, isDeveloper, isAdmin };
};

export default useAuth;
