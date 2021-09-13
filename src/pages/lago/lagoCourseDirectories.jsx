import { useEffect } from 'react';
import { Menu, Layout } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { history } from 'umi';
import request from 'umi-request';
import styles from './lagoCourseDirectories.less';
import { useState } from 'react';
const { Header, Sider, Content } = Layout;

function LagoCourseDirectories() {
  const [item0, setItem0] = useState([]);
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [item3, setItem3] = useState([]);
  const [item4, setItem4] = useState([]);
  const [item5, setItem5] = useState([]);
  const [item6, setItem6] = useState([]);
  const [item7, setItem7] = useState([]);
  const selectSection = function (data, sectionTitle) {
    return data.filter(
      (item) =>
        item.labels.filter((label) => label.name === sectionTitle).length > 0,
    );
  };

  useEffect(() => {
    request
      .get('/api/repos/ghtyq/tblog/issues?labels=lagoJS')
      .then(function (res) {
        //筛选出开篇词
        const data = res?.reverse() || [];
        const data1 = selectSection(data, '开篇词');
        setItem0(data1);
        // setItem1(selectSection(data, '模块一'))
        // setItem2(selectSection(data, '模块二'))
        // setItem3(selectSection(data, '模块三'))
        // setItem4(selectSection(data, '模块四'))
        // setItem5(selectSection(data, '彩蛋'))
        // setItem6(selectSection(data, '结束语'))
      });
  }, []);

  // const hadnleDetail = () => {
  //   history.push('./lagoCourseDetail')
  // }

  return (
    <Layout className={styles.layout}>
      <Sider className={styles.sider} trigger={null} collapsible>
        <div className="logo" />
        <Menu theme="light" mode="inline">
          <SubMenu
            title={<span>111</span>}
            styles={{ background: 'gray' }}
            key="1"
          >
            {/* {item0.courseList.map((item) => (
                  <Menu.Item
                    // key={item.id}
                    // onClick={() => selectSection(item.id, value.sectionId)}
                  >
                    {item.title}
                  </Menu.Item>
                ))} */}
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className={styles.header}>
          {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: this.toggle,
        })} */}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}
export default LagoCourseDirectories;
