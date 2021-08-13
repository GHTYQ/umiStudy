import { Menu, Layout } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import { history } from 'umi'
import styles from './lago.less'
import lala from './lala.html'



const { Header, Sider, Content, Footer } = Layout;

function Lago() {
  const [collapsed, setCollapsed] = useState(false)
  function changeTheme() {
    alert('changeTheme')
  }
  function jumpDetail() {
    history.push('./detail')
  }
  function toggle() {
    setCollapsed(!collapsed)
  }
  return (
    <Layout className={ styles.page}>
      {/* 设置 trigger={null} 来隐藏默认设定。 */}
      <Sider trigger={null} collapsible collapsed={collapsed} style={{background:'#fff'}}>
        <div className={styles.logo}>
          <h1 className={ styles.listTitle }>拉钩教育</h1>
          <Menu mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
              第一章
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              第二章
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              第三章
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Header onClick={toggle} style={{ background: '#fff' }} >
          <MenuUnfoldOutlined/>
        </Header>
        <Content className={ styles.content }>
          {/* <view className={ styles.showView }>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </view> */}
          <iframe
            srcDoc={ lala }
            style={{ width: '100%', border: '0px', height: '1100px' }}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            scrolling="auto"
          ></iframe>
        </Content>
        <Footer>底部</Footer>
      </Layout>
    </Layout>

  )
}
export default Lago
