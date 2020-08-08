import { connect } from "react-redux";
import React from 'react';
import {RequestMoreData} from "../redux/actions";


export function LoadMore(props){
	return(
	 <div>
        <button className="btn btn-outline-warning" 
        	onClick={()=>props.RequestMoreData(props.query,props.page)}>          
            Load More
        </button>
      </div>
      );
}

function mapStateToProps(state){
  return {page: state.page, query: state.query};
}

export default connect(mapStateToProps, {RequestMoreData})(LoadMore);
// export default LoadMore;