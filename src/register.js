export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="components/signup/signup">Signup</Link>
          </li>
          <li>
            <Link to="components/signin/signin">Signin</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="components/signup/signup" element={<CreateForm />} />
          <Route path="components/signin/signin" element={<SignInUser />} />
        </Routes>
      </div>
    </div>
  );
}
<div className="App">
  <form onSubmit={(e) => signup(e, name, password)}>
    <label>email</label>
    <input
      type="text"
      value={name}
      label="Username"
      onChange={(e) => setName(e.target.value)}
    ></input>

    <label>password</label>
    <input
      type="text"
      value={password}
      name="password"
      onChange={(e) => setPassword(e.target.value)}
    />
    <button className="btn btn-primary" type="submit">
      clicktosubmit
    </button>
  </form>
</div>;
<div>
  <div className="App">
    <form onSubmit={(e) => signin(e, username, password)}>
      <label>email</label>
      <input
        type="text"
        value={username}
        label="Username"
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label>password</label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        clicktosubmit
      </button>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </form>
  </div>
</div>;
