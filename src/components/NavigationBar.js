import React from "react";
import { connect } from "react-redux";
import { RequestSearchData} from "../redux/actions";
// import PropTypes from 'prop-types';



class NavigationBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {input :""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateInput(value){
    this.setState({input: value});
  }

  handleSubmit(event){
    this.props.RequestSearchData(this.state.input);
    this.setState({input: ""});
  }
  render(){
    return(
      <div className='bar'>
        <nav className="navbar navbar-expand-md fixed-top justify-content-center">
          <div className="search-box">
            <input onChange={e => this.updateInput(e.target.value)} className='nav-input' type="text" value={this.state.input} />
            <button className='nav-button' type="submit" onClick={this.handleSubmit}>Go</button>
          </div>
        </nav>
      </div>
    );
  }
}


export default connect(null, {RequestSearchData})(NavigationBar);