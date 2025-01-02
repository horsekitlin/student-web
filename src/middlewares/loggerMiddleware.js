export const loggerMiddleware = store => next => action => {
  if (action.payload !== undefined) {
    console.log('Action Payload:', action.type, action.payload);
  }
  return next(action);
};
