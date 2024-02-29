import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route key={uuidv4()} {...props} />
}

export default ProtectedRoute
