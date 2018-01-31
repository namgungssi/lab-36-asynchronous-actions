import React from 'react';
import {connect} from 'react-redux';
import UniformItem from './Uniform-Item';



class UniformList extends React.Component {
  render() {

    const uniforms = this.props.uniforms;

    return (
      <div id="kanban">
        {
            uniforms.map((uiform, i) =>
            <UniformItem handleDelete={this.props.handleDelete}
              handleUpdate={this.props.handleUpdate}
              key={i} uniform={uniform}
            />)
        }
      </div>
    )
  }
}



export default UniformList;
