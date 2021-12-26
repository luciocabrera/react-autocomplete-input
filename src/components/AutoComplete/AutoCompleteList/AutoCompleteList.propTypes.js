import PropTypes from 'prop-types';

export const autoCompletListPropTypes = {
  /** Specifies the array of items for the list */
  items: PropTypes.arrayOf(PropTypes.string.isRequired),
  /** Specifies the method to be fired whe clicking in an item */
  onListClick: PropTypes.func.isRequired,
  /** Specifies the index of the active item in the list */
  activeItemIndex: PropTypes.number,
  /** Specifies the value to match the substring in the items */
  value: PropTypes.string
};
