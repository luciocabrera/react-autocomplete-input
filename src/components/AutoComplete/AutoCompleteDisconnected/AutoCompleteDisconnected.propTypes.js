import PropTypes from 'prop-types';

export const autoCompleteDisconnectedPropTypes = {
  /** Specifies the array of items for the list */
  items: PropTypes.arrayOf(PropTypes.string.isRequired)
};
