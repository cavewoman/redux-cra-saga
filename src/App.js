import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'ramda';

import './App.css';
import { showModal } from './actions/modalAction';
import { fetchRandomMagicCard } from './actions/magicAction';

function App(props) {
  const {
    displayModal,
    handleShowModal,
    handleFetchRandomMagicCard,
    card,
    error,
  } = props;

  return (
    <div className="App">
      <button
        type="button"
        className="App__button"
        onClick={() => handleShowModal(!displayModal)}
      >
        Click for Peekaboo
      </button>
      {displayModal && <div className="App__peekaboo">Peekaboo</div>}
      <button
        type="button"
        className="App__button"
        onClick={handleFetchRandomMagicCard}
      >
        Show me magic
      </button>
      {!isEmpty(card) && (
        <img src={card.image_uris.small} />
      )}
    </div>
  );
}

App.propTypes = {
  displayModal: PropTypes.bool.isRequired,
  handleShowModal: PropTypes.func.isRequired,
  handleFetchRandomMagicCard: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
  error: PropTypes.any.isRequired,
}

const mapStateToProps = state => ({
  displayModal: state.modal.display,
  card: state.magic.card,
  error: state.magic.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    handleShowModal: showModal,
    handleFetchRandomMagicCard: fetchRandomMagicCard,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
