import React from 'react';
import NavigationBar from "./components/NavigationBar";
import CardList from "./components/CardList";
import './styles.css';


class HomePage extends React.Component{
  render() {  
      return (
        <div className='container'>
          <NavigationBar/>
          <CardList/>
        </div>
      );
    }
  
}

export default HomePage;