import React from 'react';

import {connect} from 'react-redux';

import CostumeItem from './Costume-Item';

class CostumeList extends React.Component {

  render() {

    const costumes = this.props.costumes;

    return (
      <div id="kanban">
        {
            costumes.map((costume, i) =>
            <CostumeItem handleDelete={this.props.handleDelete}
              handleUpdate={this.props.handleUpdate}
              key={i} costume={costume}
            />)
        }
      </div>
    )
  }
}

export default CostumeList;
