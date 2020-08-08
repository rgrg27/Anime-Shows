import React from "react";
import { connect } from "react-redux";
import { isItemInStore } from "../redux/selectors";
import { addLikeItem } from "../redux/actions";



class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = {isItemLiked: isItemInStore(this.props.item.mal_id)};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    const itemId = this.props.item.mal_id;
    this.props.addLikeItem(itemId);
    this.setState({isItemLiked:!this.state.isItemLiked});
  }
  render(){
    const item = this.props.item;
    const className = this.state.isItemLiked? "card-btn-liked" : "card-btn-overlay";
    return (
            <div className='card' key={item.mal_id}>
              <div className="card-img" >
                <img className='card-img-top'src={item.image_url} 
                 alt='' />
                 <div className={className}>
                    <button className="btn" onClick={this.handleClick} 
                      disabled={this.state.isItemLiked}>
                      {this.state.isItemLiked ? "Liked" : "Like"}
                    </button>
                  </div>
              </div>              
              <div className='card-body'>
                <h5>
                  {item.title}
                </h5>
              </div>
            </div>
          );
  }
}

export default connect(null, {isItemInStore,addLikeItem})(Card);
