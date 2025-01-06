import React from 'react';
import StudentCard from './StudentCard';

const StudentCards = (props) => {
  const {
    items,
    activeTab,
    handleIncrement,
    handleDecrement,
    setItemIndex,
    itemIndex,
  } = props;

  return items.map((item, index) => (
    <StudentCard
      key={`${item.name}-${index}`}
      activeTab={activeTab}
      index={index}
      item={item}
      handleIncrement={handleIncrement(index)}
      handleDecrement={handleDecrement(index)}
      onClick={() => {
        if (!item.completed) {
          setItemIndex(index);
        }
      }}
      isSelected={itemIndex === index}
    />
  ));
};

export default StudentCards;
