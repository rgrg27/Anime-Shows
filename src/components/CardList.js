import React from "react";
import { connect } from "react-redux";
import { RequestInitialData } from "../redux/actions";
import Card from "./Card";
import LoadMore from "./LoadMore";




class CardList extends React.Component{
  componentDidMount(){
    this.props.RequestInitialData(this.props.query);
  }
  render(){
    const items = this.props.items;
    const cards = items.map(item => {
        return (
          <Card item={item} key={item.mal_id}/>
        );
      });
    return(
      <div>
        <div className='row'>{cards}</div>
        <LoadMore />
      </div>
    );
  }
}

function mapStateToProps(state){
    return {items: state.items, query: state.query};
}


export default connect(mapStateToProps, {RequestInitialData})(CardList);