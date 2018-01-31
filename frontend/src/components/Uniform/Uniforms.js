import React from 'react';
import {connect} from 'react-redux';
import UniformCreate from './Uniform-Create';
import UniformList from './Uniform-List';
import store from '../../appState/store';
import * as actions from './actions';



class Uniforms extends React.Component {

  constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.handleInitialize();
	}

  render() {
		return (
			<div id="uniformWrapper">
				<UniformCreate handler={this.props.handleAddUniform}/>
				<UniformList
				 uniforms={this.props.uniforms}
				 handleDelete={this.props.handleDeleteCostume}
				 handleUpdate={this.props.handleUpdateCostume}
				 />
			</div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		uniform: state.uniforms
	}
};

const mapDispatchToProps = (dispatch, getState) => ({
	handleInitialize: uniform => dispatch(actions.costumeInitialize(uniform)),
	handleAddUniform: uniform => dispatch(actions.createUniform(uniform)),
	handleUpdateUniform: uniform => dispatch(actions.updateUniform(uniform)),
	handleDeleteUniform: uniform => dispatch(actions.deleteUniform(uniform))
});

export default connect(mapStateToProps,mapDispatchToProps)(Uniforms);
