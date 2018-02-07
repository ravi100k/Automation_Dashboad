import React from 'react';
import {dropdown,fetchList} from '../actions';
import {connect,dispatch} from 'react-redux';

class DashboardPage extends React.Component{

	onSelectChange=(e)=>{
            console.log(e.currentTarget.value);
            this.props.dropdown(e.currentTarget.value);
            console.log("action called");
	}

    onButtonClick = (e) =>{
        console.log("continue button")
        if(this.props.option!=0){
            this.props.fetchList(this.props.option);
            this.props.history.push(`/instance/${this.props.option}`);
        }

    }

	render(){

		return(
        <div className="box-layout">
          <div className="box-layout__box">
            <div className="box-layout__title">Welcome to Upgrade Testing</div>
            <div className="box_select">
            <div className="select_label">Server Type</div>
            <div>
            <select className="select_option" onChange={this.onSelectChange}>
            	<option value="0" defaultValue>Select an option</option>
            	<option value="Jira" >Jira</option>
            	<option value="Confluence">Confluence</option>
            	<option value="Devtrack">Devtrack</option>
            </select>
            </div>
            </div>
            <div className="box_select_button">
                <button  className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" disabled={this.props.option==0?true:false} onClick={this.onButtonClick}>
                  Continue
                </button>
            </div>
          </div>


        </div>
        )
	};

}

const mapStateToProps = ({option})=>{
    console.log("mapStateToProps",option.option)
    return option;
}

const mapDispatchToProps = (dispatch) => ({
  dropdown: (value) => dispatch(dropdown(value)),
  fetchList: (value) => dispatch(fetchList(value)),
});

export default connect(mapStateToProps,mapDispatchToProps)(DashboardPage);
