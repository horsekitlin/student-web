import {createSelector} from '@reduxjs/toolkit';

const student = (state) => state.student;

export const selectTotals = createSelector(
  [student],
  (student) => {
    const unCompletedAmount = student.items.reduce((result, item) => {
      return item.completed ? result + 1 : result;
    }, 0);

    return {
      studnetItems: student.items,
      isLoading: student.isLoading,
      unCompletedAmount,
      totalAmount: student.items.length,
    };
  }
);