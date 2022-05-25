import { useAuth } from "../useAuth";

export function First(username, password) {
  const signup = useAuth();
  console.log("submitted");
  return signup(username, password);
}
