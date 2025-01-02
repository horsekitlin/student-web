export const apiMiddleware = store => next => async action => {
  // 模擬 API 請求的處理
  if (action.type.endsWith('/fulfilled')) {
    console.log('API Call Success:', {
      type: action.type,
      payload: action.payload,
      timestamp: new Date().toISOString()
    });
  }
  
  if (action.type.endsWith('/rejected')) {
    console.error('API Call Failed:', {
      type: action.type,
      error: action.error,
      timestamp: new Date().toISOString()
    });
  }

  return next(action);
};