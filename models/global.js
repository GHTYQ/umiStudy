export default {
  namespace: 'global',
  state: {
    qiniuToken: undefined,
    qiniuStartTime: new Date(),
  },
  effects: {},
  reducers: {
    saveData(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
