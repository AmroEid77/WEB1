import React from "react";
import "./NavbarSingleVideo.css";

const NavbarSingleVideo = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-expand-xs bg-body-tertiary">
      <div className="container">

        <div className="d-flex">
          <button
            type="button"
            className="btn btn-primary "
            title="updates"
            style={{ width: "2.5rem", height: "2.5rem" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="currentColor"
              className="bi my-bi bi-megaphone-fill"
              viewBox="0 0 16 16"

            >
              <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
            </svg>
          </button>
        </div>

        <div className="d-flex order-lg-2">
          <ul className="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">

            <li className="nav-item chat">
              <button
                className="btn chat"
                title="chats"
                style={{
                  backgroundColor: "#EEF0F2",
                  width: "2.5rem",
                  height: "2.5rem",
                  marginRight: 3.5,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#62666C"
                  className="bi my-bi bi-chat-left-text-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                </svg>
              </button>
            </li>

            <li className="nav-item settings">
              <button
                className="btn settings"
                title="settings"
                style={{
                  backgroundColor: "#EEF0F2",
                  width: "2.5rem",
                  height: "2.5rem",
                  marginRight: 3.5,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#62666C"
                  className="bi my-bi bi-gear-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
              </button>
            </li>

            <li className="nav-item notifications">
              <button
                className="btn notifications"
                title="notifications"
                style={{
                  backgroundColor: "#EEF0F2",
                  width: "2.5rem",
                  height: "2.5rem",
                  marginRight: 3.5,
                  position: "relative",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#62666C"
                  className="bi my-bi my-bi bi-bell-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
                <span className="badge">&bull;</span>
              </button>
            </li>

            <li className="nav-item pfp">
              <button
                className="btn pfp"
                style={{
                  backgroundColor: "#EEF0F2",
                  width: 40,
                  height: 40,
                  padding: 0,
                  marginRight: 3.5,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src="https://www.annahar.com/ContentFiles/160065Image1-1180x677_d.jpg?version=1907003%D8%B1%D8%A7%D8%A8%D8%B7"
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </button>
            </li>
          </ul>

          <button
            className="navbar-toggler shadow-none border-0 icon-md btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ height: "2.5rem", width: "2.5rem", padding: 0 }}
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>

        <div
          className="collapse navbar-collapse pt-1 text-center"
          id="navbarSupportedContent"
        >

          <form className="search-form mx-lg-2">
          <svg
              className=" fs-4 searchIcon"
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
              <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
            </svg>
            <input
              placeholder="Search"
              type="search"
              className="input-search-nav"
            />
          </form>

          <ul className="navbar-nav ms-auto ">
            <li className="nav-item dropdown demo mx-lg-2">
              <a className="nav-link dropdown-toggle" href="#1" role="button">
                Demo
              </a>
            </li>

            <li className="nav-item dropdown pages mx-lg-2">
              <a className="nav-link dropdown-toggle" href="#2" role="button">
                Pages
              </a>
            </li>

            <li className="nav-item dropdown account mx-lg-2">
              <a className="nav-link dropdown-toggle" href="#3" role="button">
                Account
              </a>
            </li>

            <li className="nav-item network mx-lg-2">
              <a className="nav-link" href="#4">
                My Network
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSingleVideo;
