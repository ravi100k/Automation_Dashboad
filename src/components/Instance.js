import axios from 'axios';
import React from 'react';
import {executeFile} from '../actions';
import { Link } from 'react-router-dom';
import {connect,dispatch} from 'react-redux';

import Output from './output';

class Instance extends React.Component{
	state = {
		show:false
	}
	componentDidMount(){

  }
	onHandelExecute = (data) => (event) =>{
		this.props.executeFile(data);
		this.setState({show:true})
	}

	render(){
		console.log(this.props.show);
		return(
			<div className="instance_body">
			    <h3 className="instance_title">Here are the list of {this.props.match.params.id} Project </h3>
			    <br/>
					<div className="card_instance" >
				    {this.props.list.list.map((data,index)=>
							<div className="demo-card-square mdl-card mdl-shadow--2dp" key={index}>
							<div className="mdl-card__title mdl-card--expand">
								<h2 className="mdl-card__title-text">{data}</h2>
							</div>
							<div className="mdl-card__supporting-text">
								Some Text Information
							</div>
							<div className="mdl-card__actions mdl-card--border">
								<button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.onHandelExecute(data)}>
									Execute
								</button>
							</div>
						</div>
					)}
				</div>
				{this.state.show ? <Output/> : null }
		 </div>
			)
	}
};

const mapStateToProps = (state)=>{
    return {
			list:state.list,
			data:state.data,
			show:state.data.load
			}
}

const mapDispatchToProps = (dispatch) => ({
  executeFile: (value) => dispatch(executeFile(value)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Instance);
