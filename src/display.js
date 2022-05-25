import { Component } from "react";
import { useAuth } from "./useAuth";

function Home() {
  const { signOutWithGoogle } = useAuth();

  return (
    <div>
      hello
      <button onClick={signOutWithGoogle}>sign out</button>
    </div>
  );
}

export default Home;
