import "./Nav.css";

function Nav() {
  return (
    <div className="x">
      <div className="heading">
        <h1 className="h1">AWS DynamoDB services </h1>
      </div>
      <div className="my-items">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="/insert">
              Insert a Record
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/fetch">
              Get a Record
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/update">
              Update
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="delete">
              Delete Record
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
