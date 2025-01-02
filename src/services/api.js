export const counterAPI = {
  recordIncrement: async (amount) => {
    // 模擬 API 調用
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: { amount, action: 'increment' } });
      }, 500);
    });
  },
  
  recordDecrement: async (amount) => {
    // 模擬 API 調用
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: { amount, action: 'decrement' } });
      }, 500);
    });
  }
};
