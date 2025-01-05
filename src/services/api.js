export const studentAPI = {
  getList: async () => {
    const url = 'https://5c2dd5d9b8051f0014cd47ed.mockapi.io/students';
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Fetch error: ', error);
      });
  },
};
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
