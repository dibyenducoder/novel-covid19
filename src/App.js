import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Country from './components/Country';
import India from './components/India';
import Statistics from './components/Statistics';
import Error from './components/Error';
import Navigation from './components/Navigation';
import About from './components/About'; 
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop';
class App extends Component {

  state = {
    sideDrawerOpen :false 
  }
  HamburgerToggleClickHandler = () =>
  {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  BackDropClickHandler = () =>
  {
    this.setState({sideDrawerOpen:false});
  };
  render() {

    //let sideDrawer ; 
    let backDrop ; 

    if(this.state.sideDrawerOpen)
    {
      // sideDrawer = <SideDrawer /> ;
      backDrop = <BackDrop click={this.BackDropClickHandler} /> 
    }
    return (  
       <BrowserRouter>
        <div className="App" style={{height:"100vh"}}>
          <Navigation HamburgerClickHandler={this.HamburgerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen}/> ;
         {backDrop}
            <Switch>
                 
             {/* <Route exact path='/' component={Country}/></Route> */}
             {/* <Route exact path='/' component={Home}></Route> */}
             {/* <Route exact path='/map' component={India}/></Route> */}
             {/* <Route exact path='/stat' component={Statistics}/></Route> */}
             <Route exact path='/' component={Country}></Route> 
             <Route  path='/map' component={India}></Route> 
             <Route  path='/stat' component={Statistics}></Route> 
             <Route  path='/about' component={About}></Route> 
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;