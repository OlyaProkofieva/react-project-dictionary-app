import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <p>
            Coded by Olha Prokofieva and open-sourced on{" "}
            <a
              href="https://github.com/OlyaProkofieva/react-project-weather-app"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
