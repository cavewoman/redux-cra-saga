import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './App.css';
import { showModal } from './actions/modalAction';

function App(props) {
  const {
    displayModal,
    handleShowModal,
  } = props;

  return (
    <div className="App">
      <button
        type="button"
        className="App__button"
        onClick={() => handleShowModal(!displayModal)}
      >
        Click for Magic
      </button>
      {displayModal && <div className="App__peekaboo">Peekaboo</div>}
    </div>
  );
}

App.propTypes = {
  displayModal: PropTypes.bool.isRequired,
  handleShowModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  displayModal: state.modal.display
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    handleShowModal: showModal,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
