import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="inner">
            <div className="logo">
              <div className="icon-logo" />
            </div>
            <button className="theme-btn">
              <FaSun />
              <FaMoon />
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="inner">
            <h1>This is a site with the ability to change the subject</h1>
            <h2 className="light">Dark</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate enim, fuga qui eos iure omnis unde. Et quod iure velit
              quasi, libero sapiente esse nulla? Qui eaque odit laborum
              doloremque.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <div class="container">
          <div className="inner">
            <div class="powered">
              Powered by
              <a href="https://github.com/labCap" target="_blank">
                labCap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
