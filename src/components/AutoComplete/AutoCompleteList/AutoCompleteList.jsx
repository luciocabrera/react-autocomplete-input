// Proptypes
import { autoCompletListPropTypes } from './AutoCompleteList.propTypes';
// Styles
import { ListStyled, ItemStyled, SpanStyled } from './AutoCompleteList.styled';

const formatText = (text, targetText) => {
  if (!targetText) {
    return '';
  }
  const indexOfText = targetText.toLowerCase().indexOf(text.toLowerCase());

  if (indexOfText === -1) {
    return targetText;
  }
  const endIndexOfText = indexOfText + text.length;

  const formattedTextPrefix = targetText.slice(0, indexOfText);
  const formattedText = targetText.slice(indexOfText, endIndexOfText);
  const formattedTextSufix = targetText.slice(endIndexOfText);

  return (
    <>
      {formattedTextPrefix}
      <SpanStyled>{formattedText}</SpanStyled>
      {formattedTextSufix}
    </>
  );
};

const List = ({ activeItemIndex, onListClick, items, value }) => (
  <ListStyled list='auto-complete-list'>
    {items?.map((item, index) => {
      const isItemActive = index === activeItemIndex;
      return (
        <ItemStyled
          isItemActive={isItemActive}
          key={`auto-complete-item-${item}`}
          id={`auto-complete-item-${item}`}
          onClick={onListClick}
        >
          {formatText(value, item)}
        </ItemStyled>
      );
    })}
  </ListStyled>
);

const AutoCompleteList = ({ items, ...rest }) => {
  return items?.length > 0 ? <List items={items} {...rest} /> : null;
};

AutoCompleteList.propTypes = autoCompletListPropTypes;

AutoCompleteList.defaultProps = {
  activeItemIndex: 0,
  value: ''
};

export default AutoCompleteList;
