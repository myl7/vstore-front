import {AppBar, IconButton, Toolbar} from '@material-ui/core'
import {Home as HomeIcon} from '@material-ui/icons'
import {useHistory} from 'react-router-dom'

const Header = () => {
  const history = useHistory()

  const handleHomeClick = () => history.push('/')

  return (
    <AppBar position="static" component="header">
      <Toolbar>
        <IconButton color="inherit" edge="start" aria-label="home" onClick={handleHomeClick}>
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
