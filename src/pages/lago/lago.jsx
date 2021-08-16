import { Menu, Layout } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { history } from 'umi';
import styles from './lago.less';
import SubMenu from 'antd/lib/menu/SubMenu';
// import lala from './lala.html'
const { Header, Sider, Content, Footer } = Layout;
const logo =
  'https://s0.lgstatic.com/i/image/M00/8D/31/CgqCHl_6zVmAceMuAADwxLL_pbM709.png';

function Lago() {
  const [collapsed, setCollapsed] = useState(false);
  const titles = [
    {
      sectionName: '开篇词',
      courseLessons: [
        {
          theme: '开篇词 | 打好 JS 基石，走稳前端进阶之路',
        },
      ],
    },
    {
      sectionName: '模块一：基石篇',
      courseLessons: [
        {
          theme: '01 | 代码基本功测试（上）：JS 的数据类型你了解多少？',
        },
        {
          theme: '02 | 代码基本功测试（下）：如何实现一个深浅拷贝？',
        },
        {
          theme: '03 | 继承实现：探究 JS 常见的 6 种继承方式',
        },
        {
          theme: '04 | 继承进阶：如何实现 new、apply、call、bind 的底层逻辑？',
        },
        {
          theme: '05 | 函数那些事：JS 闭包难点剖析',
        },
        {
          theme: '06 | 进阶练习：带你一起实现 JSON.Stringify 方法',
        },
      ],
    },
    {
      sectionName: '模块二：深入数组篇',
      courseLessons: [
        {
          theme: '07 | 数组原理（上）：帮你梳理眼花缭乱的数组 API',
        },
        {
          theme: '08 | 数组原理（中）：如何理解 JS 的类数组？',
        },
        {
          theme: '09 | 数组原理（下）：实现数组扁平化的 6 种方式',
        },
        {
          theme: '10 | 数组排序（上）：如何用 JS 实现各种数组排序',
        },
        {
          theme: '11 | 数组排序（下）：sort 排序方法的实现原理',
        },
        {
          theme: '12 | 进阶练习：带你手写 JS 数组多个方法的底层实现',
        },
      ],
    },
    {
      sectionName: '模块三：异步编程篇',
      courseLessons: [
        {
          theme: '13 | 异步编程（上）：JS 异步编程都有哪些方案？',
        },
        {
          theme: '14 | 异步编程（中）：如何深入理解异步编程的核心 Promise？',
        },
        {
          theme:
            '15 | 异步编程（下）：如何理解 Generator、Async/await 等异步编程的语法糖？',
        },
        {
          theme: '16 | 进阶练习（上）：怎样轻松实现一个 EventEmitter？',
        },
        {
          theme: '16 | 进阶练习（上）：怎样轻松实现一个 EventEmitter？',
        },
      ],
    },
    {
      sectionName: '模块四：JS 引擎篇',
      courseLessons: [
        {
          theme: '模块四：JS 引擎篇',
        },
        {
          theme: '19 | 事件轮询：如何理解浏览器中的 EventLoop？',
        },
        {
          theme: '20 | 原理解析：JS 代码是如何被浏览器引擎编译、执行的？',
        },
        {
          theme: '21 | 引擎进阶（上）：探究宏任务 & 微任务的运行机制',
        },
        {
          theme: '21 | 引擎进阶（上）：探究宏任务 & 微任务的运行机制',
        },
      ],
    },
    {
      sectionName: '彩蛋',
      courseLessons: [
        {
          theme: '彩蛋 1 | 如何应对大厂面试官的灵魂拷问？',
        },
        {
          theme: '彩蛋 2 | 前端开发如何有针对性地学习算法？',
        },
      ],
    },
    {
      sectionName: '结束语',
      courseLessons: [
        {
          theme: '结束语 | 面向未来，我们该如何提升自己？',
        },
      ],
    },
  ];

  function changeTheme() {
    alert('changeTheme');
  }
  function jumpDetail() {
    history.push('./detail');
  }

  return (
    <Layout className={styles.page}>
      {/* 设置 trigger={null} 来隐藏默认设定。 */}
      {/* collapsed={collapsed} */}
      <Sider className={styles.sider} trigger={null} collapsible>
        <div className={styles.logo}>
          <div className={styles.listHeader}>
            <img className={styles.listTitleImg} src={logo} alt="" />
            <div className={styles.listDes}>
              <h1 className={styles.listTitle}>JavaScript 核心原理精讲</h1>
              <p>若离 | 前美团前端技术专家</p>
            </div>
          </div>
          <Menu
            className={styles.menu}
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            {titles.map((value) => (
              <SubMenu
                title={<span>{value.sectionName}</span>}
                styles={{ background: 'gray' }}
              >
                {value.courseLessons.map((values) => (
                  <Menu.Item>{values.theme}</Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff' }}>
          <MenuUnfoldOutlined />
        </Header>
        <Content className={styles.content}>
          {/* <view className={ styles.showView }>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </view> */}
          {/* <iframe
            srcDoc={ lala }
            style={{ width: '100%', border: '0px', height: '1100px' }}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            scrolling="auto"
          ></iframe> */}
        </Content>
        {/* <Footer>底部</Footer> */}
      </Layout>
    </Layout>
  );
}
export default Lago;
