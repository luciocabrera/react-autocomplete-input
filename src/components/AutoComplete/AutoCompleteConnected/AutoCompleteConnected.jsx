// React
import { lazy, useCallback, useEffect, useState } from 'react';
// Proptypes
import { autoCompleteConnectedPropTypes } from './AutoCompleteConnected.propTypes';
// Hooks
import useDebounceValue from '../../../hooks/useDebounceValue';
// Styles
import { AutoCompleteStyled } from '../styles/AutoComplete.styled';

// Lazy
const AutoCompleteList = lazy(() =>
  import('../AutoCompleteList/AutoCompleteList')
);

const AutoCompleteConnected = ({ getFetchUrl }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState();
  const [showItems, setShowItems] = useState(false);
  // isFetching is a flag  that can be implemented in the future to show
  // a spinner when we are fetching the data
  // for the moment we just set it up
  // TODO: Implement spinner
  const [isFetching, setIsFetching] = useState(false);

  console.info('isFetching ', isFetching);

  const [value, setValue] = useState('');
  console.info('rendering CONNECTED', {
    value: value,
    filteredItems: filteredItems,
    activeItemIndex: activeItemIndex
  });
  const debouncedValue = useDebounceValue(value, 500);

  const getFilteredItemsFromApi = useCallback(
    async searchText => {
      const fetchUrl = getFetchUrl(searchText);
      const response = await fetch(fetchUrl);
      const data = await response.json();
      const newfilteredItems = data.map(el => el.word);

      setIsFetching(false);
      setFilteredItems(newfilteredItems);
    },
    [getFetchUrl]
  );

  useEffect(() => {
    if (debouncedValue) {
      setIsFetching(false);
      getFilteredItemsFromApi(debouncedValue);
    } else {
      setFilteredItems([]);
    }
  }, [debouncedValue, getFilteredItemsFromApi]);

  const onChange = event => {
    setValue(event.target.value);
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

  return (
    <AutoCompleteStyled id='auto-complete-connected'>
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

AutoCompleteConnected.propTypes = autoCompleteConnectedPropTypes;

export default AutoCompleteConnected;
