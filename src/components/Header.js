import {AppBar, Button, IconButton, Toolbar} from '@material-ui/core'
import {Home as HomeIcon} from '@material-ui/icons'
import {useHistory} from 'react-router-dom'

const Header = () => {
  const history = useHistory()

  const handleClick = path => () => history.push(path)

  return (
    <AppBar position="static" component="header">
      <Toolbar>
        <IconButton color="inherit" edge="start" aria-label="home" onClick={handleClick('/')}>
          <HomeIcon />
        </IconButton>
        <Button variant="outlined" onClick={handleClick('/videos/add')}>Upload</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
