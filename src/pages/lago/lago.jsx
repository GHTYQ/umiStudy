import { Menu, Layout } from 'antd';
import { useState } from 'react';
import request from 'umi-request';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import styles from './lago.less';

const { Header, Sider, Content, Footer } = Layout;
const logo =
  'https://s0.lgstatic.com/i/image/M00/8D/31/CgqCHl_6zVmAceMuAADwxLL_pbM709.png';

function Lago(props) {
  console.log('上个页面传过来的参数', props);
  const { courseInfo } = props.location;

  //标题列表
  const [list, setList] = useState([]);
  //具体展示某一章节
  const [courseDetail, setCourseDetail] = useState({});
  //设置默认选中第几章节
  const [selectKey, setSelectKey] = useState([]);
  //设置代码高亮 | 加载数据(DOM更新之后调用)
  useEffect(() => {
    document.querySelectorAll('pre').forEach((block) => {
      try {
        hljs.highlightBlock(block);
      } catch (e) {
        console.log(e);
      }
    });
    request.get('/api/lago/courseList/' + courseInfo.tag).then(function (res) {
      setList(res.data);
      console.log(res.data);
      const section = res.data[0];
      const course = section.courseList[0];
      setCourseDetail(course);
      setSelectKey([String(course.id)]);
    });
  }, []);
  //选择章节
  function selectSection(itemId, sectionId) {
    const section = list.filter(
      (section) => section.sectionId === sectionId,
    )[0];
    const course = section.courseList.filter((item) => item.id === itemId)[0];
    setCourseDetail(course);
    setSelectKey([String(itemId)]);
  }
  return (
    <Layout className={styles.page}>
      {/* 设置 trigger={null} 来隐藏默认设定。 */}
      {/* collapsed={collapsed} */}
      <Sider className={styles.sider} trigger={null} collapsible width={384}>
        <div className={styles.logo}>
          <div className={styles.listHeader}>
            <img
              className={styles.listTitleImg}
              src={courseInfo.cover}
              alt=""
            />
            <div className={styles.listDes}>
              <h1 className={styles.listTitle}>{courseInfo.title}</h1>
              <p>{courseInfo.author}</p>
            </div>
          </div>
          <Menu
            className={styles.menu}
            mode="inline"
            selectedKeys={selectKey}
            defaultOpenKeys={['0']}
          >
            {list.map((value) => (
              <SubMenu
                title={<span>{value.sectionName}</span>}
                styles={{ background: 'gray' }}
                key={value.sectionId}
              >
                {value.courseList.map((item) => (
                  <Menu.Item
                    key={item.id}
                    onClick={() => selectSection(item.id, value.sectionId)}
                  >
                    {item.theme}
                  </Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Header style={{ background: 'white' }}>
          {/* <MenuUnfoldOutlined /> */}
          <h1 style={{ textAlign: 'center' }}>{courseDetail.theme}</h1>
        </Header>
        <Content
          style={{
            background: 'white',
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <div
            className={styles.showContent}
            style={{ padding: '0 200px' }}
            dangerouslySetInnerHTML={{ __html: courseDetail.content }}
          ></div>
        </Content>
      </Layout>
    </Layout>
  );
}
export default Lago;
