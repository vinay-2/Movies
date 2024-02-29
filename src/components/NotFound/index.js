import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="failureContainer" testid="not found">
    <h1 className="failure-header">Lost Your way ?</h1>
    <p className="failure-paragraph">
      we are sorry, the page you requested could not be found <br /> Please go
      back to the homepage.
    </p>
    <Link to="/">
      <button type="button" className="failure-btn">
        Go to Home
      </button>
    </Link>
  </div>
)

export default NotFound
