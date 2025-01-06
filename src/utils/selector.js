import {createSelector} from '@reduxjs/toolkit';

const selectItems = (state) => state.student.items;

export const selectTotals = createSelector(
  [selectItems],
  (items) => {
    const unCompletedAmount = items.reduce((result, item) => {
      return item.completed ? result + 1 : result;
    }, 0);

    return {
      unCompletedAmount,
      totalAmount: items.length,
    };
  }
);