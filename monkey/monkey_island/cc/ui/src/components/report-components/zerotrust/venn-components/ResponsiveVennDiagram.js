import React from 'react'
import PropTypes from 'prop-types'
import Dimensions from 'react-dimensions'
import VennDiagram from './VennDiagram'

const VENN_MIN_WIDTH = '300px';

class ResponsiveVennDiagram extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {pillarsGrades} = this.props;
    let childrenWidth = this.props.containerWidth, childrenHeight = this.props.containerHeight;

    if (childrenHeight === 0 || isNaN(childrenHeight)) {
      childrenHeight = childrenWidth;
    } else {
      childrenWidth = Math.min(childrenWidth, childrenHeight)
    }

    return (
      <div ref={this.divElement} style={{textAlign: 'center'}}>
        <VennDiagram style={{minWidth: VENN_MIN_WIDTH, minHeight: VENN_MIN_WIDTH}} pillarsGrades={pillarsGrades}/>
      </div>
    );
  }
}

ResponsiveVennDiagram.propTypes = {
  pillarsGrades: PropTypes.array
};

export default Dimensions()(ResponsiveVennDiagram);
