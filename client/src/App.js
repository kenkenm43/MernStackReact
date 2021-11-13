import NavbarComponent from "./components/NabarComponent";

function App() {
  return (
    <div className="container p-5">
      <NavbarComponent />
      <h1>MERN STACK | WORKSHOP</h1>
      <a className="btn btn-primary" href="/create">
        Write an article
      </a>
    </div>
  );
}

export default App;
