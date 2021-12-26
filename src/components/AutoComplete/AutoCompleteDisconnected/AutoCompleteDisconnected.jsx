// React
import { lazy, useState } from 'react';
// Proptypes
import { autoCompleteDisconnectedPropTypes } from './AutoCompleteDisconnected.propTypes';
// Styles
import { AutoCompleteStyled } from '../styles/AutoComplete.styled';
// Lazy
const AutoCompleteList = lazy(() =>
  import('../AutoCompleteList/AutoCompleteList')
);

const AutoCompleteDisconnected = ({ items }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState();
  const [showItems, setShowItems] = useState(false);
  const [value, setValue] = useState('');

  const onChange = event => {
    const newValue = event.target.value;

    const newfilteredItems = items?.filter(
      item => item.toLowerCase().indexOf(newValue.toLowerCase()) > -1
    );

    setValue(newValue);
    setFilteredItems(newfilteredItems);
    setActiveItemIndex(0);
    setShowItems(true);
  };

  const onClick = event => {
    const newValue = event.target.innerText;

    setValue(newValue);
    setFilteredItems([]);
    setActiveItemIndex(0);
    setShowItems(false);
  };

  const onKeyDown = event => {
    const newValue = filteredItems[activeItemIndex];

    switch (event.keyCode) {
      // enter
      case 13:
        setValue(newValue);
        setActiveItemIndex(0);
        setShowItems(false);
        return;
      // up arrow
      case 38:
        if (activeItemIndex !== 0) setActiveItemIndex(activeItemIndex - 1);
        return;
      // down arrow
      case 40:
        if (activeItemIndex - 1 < filteredItems.length)
          setActiveItemIndex(activeItemIndex + 1);
        return;
      default:
        return;
    }
  };
  console.info('rendering DISCONNECTED ', {
    value: value,
    filteredItems: filteredItems,
    activeItemIndex: activeItemIndex
  });

  return (
    <AutoCompleteStyled id='auto-complete-disconnected'>
      <input
        id='auto-complete-input'
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
      />
      {showItems && value && (
        <AutoCompleteList
          activeItemIndex={activeItemIndex}
          onListClick={onClick}
          items={filteredItems}
          value={value}
        />
      )}
    </AutoCompleteStyled>
  );
};

AutoCompleteDisconnected.propTypes = autoCompleteDisconnectedPropTypes;

export default AutoCompleteDisconnected;
