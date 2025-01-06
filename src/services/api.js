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
