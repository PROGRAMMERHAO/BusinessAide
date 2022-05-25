import { useAuth } from "./useAuth";

function PageLogin() {
  const { signInWithGoogle } = useAuth();

  return (
    <>
      <h1>Login</h1>
      <form></form>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  );
}

export default PageLogin;
