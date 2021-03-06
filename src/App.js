import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import {MuiThemeProvider} from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
//Components
import Navbar from './components/Navbar'
//Pages
import home from './pages/home'
import addpost from './pages/addpost'
import signup from './pages/signup'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e64a19',
    },
    secondary: {
      main: '#e64a19',
    }
  }
})

class App extends Component {
  render(){
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <Router>
      <Navbar/>
        <div className="container">
        <Switch>
        <Route exact path='/' component={home}/>
        <Route exact path='/addpost' component={addpost}/>
        <Route exact path='/signup' component={signup}/>
        </Switch>
        </div>   
      </Router>
    </div>
    </MuiThemeProvider>
  );}
}

export default App;
