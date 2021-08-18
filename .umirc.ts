import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  //umi默认编译node_modules下文件，带来一些收益的同时会额外占用编译时间
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {}, //快速刷新
  /**
   * 路由配置
   */
  routes: routes,
  /**
   * 部署到gh-page配置
   */
  outputPath: 'build', //umi打包路径修改，因为gh-page默认是发布build文件夹下内容，而umi默认的打包目录是dist
  publicPath: 'https://ghtyq.github.io/',
  history: { type: 'hash' },
});
