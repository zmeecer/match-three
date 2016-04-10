import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';
import Area from './area';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Area />
      </div>
    );
  }
}

export default Home;
