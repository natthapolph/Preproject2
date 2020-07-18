import React from "react";
import auth from "../firebase";
import "../component/css/home.css";
const Home = ({ setSession }) => {
  const headleLogout = () => {
    auth.signOut().then((response) => {
      setSession({
        isLogin: false,
        currentUser: null,
        errorMessage: null,
      });
    });
  };

  return (
    <body>
      <nav>
        <div className="container">
          <div className="nav-c">
            <ul className="nav-f">
              <li>
                <div>
                  <img
                    width="20%"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/97/KU_Logo.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            {/* End --- Left nav*/}
            <ul className="nav-l">
              <li>
                <a href="#">
                  <i class="fa fa-address-card" aria-hidden="true"></i>Menu1
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-address-card" aria-hidden="true"></i>Menu2
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-address-card" aria-hidden="true"></i>Menu3
                </a>
              </li>
              <button type="button" onClick={headleLogout}>
                logout
              </button>
            </ul>
            {/* End --- Right nav*/}
          </div>
        </div>
      </nav>
      {/* End --- Bar*/}

      <section>
        <div className="section-c">
          <div className="sidebar-c">
            <ul>
              <li>
                <a href="#">
                  <i class="fa fa-address-card" aria-hidden="true">
                    {" "}
                    Profile
                  </i>
                </a>
              </li>
            </ul>
            {/* End ---section Left Half */}
            <ul>
              <li>
                <a href="#">
                  <i class="fa fa-address-card" aria-hidden="true"></i>Menu11
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-address-card" aria-hidden="true"></i>Menu22
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-address-card" aria-hidden="true"></i>Menu33
                </a>
              </li>
            </ul>
          </div>
          {/* End --- section Left*/}
          <div className="content-c">
            <div className="plant">
              <div className="plant-info">
                <div className="plant-L">ASDFF</div>
              </div>
            </div>
          </div>
          {/* End --- section center*/}
        </div>
      </section>
      {/* End --- Section*/}
    </body>
  );
};

export default Home;
