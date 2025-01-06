import React from 'react';
import StudentCard from './StudentCard';

const StudentCards = (props) => {
  const {
    items,
    dispatch,
    handleIncrement,
    handleDecrement,
  } = props;

  return items.map((item, index) => (
    <StudentCard
      key={`${item.name}-${index}`}
      index={index}
      item={item}
      handleIncrement={handleIncrement(dispatch, index)}
      handleDecrement={handleDecrement(dispatch, index)}
    />
  ));
};

export default StudentCards;
