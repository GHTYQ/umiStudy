import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  //umi默认编译node_modules下文件，带来一些收益的同时会额外占用编译时间
  nodeModulesTransform: {
    type: 'none',
  },
  //快速刷新
  fastRefresh: {},
  routes: routes,
});
