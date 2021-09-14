// 首页
import { useEffect, useState } from 'react';
import request from 'umi-request';
import { history } from 'umi';
import styles from './index.less';
import { Card, Avatar, Empty } from 'antd';

const { Meta } = Card;

function Index() {
  const [moduleState, setModuleState] = useState({ key: 'article' });
  // 如果有新增tab 可在这里面增加维护
  const [tabList, setTabList] = useState([
    {
      key: 'article',
      tab: '文章',
    },
    {
      key: 'course',
      tab: '课程',
    },
  ]);

  // 文章列表
  const [list, setList] = useState([]);

  // 个人信息
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    request
      .get('/api/repos/ghtyq/tblog/issues?labels=lagojs')
      .then(function (res) {
        setList(res);
        const newTabList = tabList.map((item) => {
          if (item.key === 'article') {
            item.tab = item.tab + '(' + res.length + ')';
          }
          return item;
        });
        setTabList(newTabList);
      });
    request.get('/api/users/ghtyq').then(function (res) {
      setUserInfo(res);
    });
  }, []);

  // tab切换
  const onTabChange = (key) => {
    setModuleState({ key: key });
  };

  // cell点击 进入详情
  function handleCell(number) {
    history.push('./mdDetail?number=' + number);
  }

  // 控制tab对应的控件
  const contentList = {
    article: (
      <div>
        {list.length > 0 ? (
          list.map((item) => (
            <div
              className={styles.cell}
              key={item.id}
              onClick={() => handleCell(item.number)}
            >
              <div className={styles.cell_title}>{item.title}</div>
              <br />
              <div className={styles.cell_labels}>
                {(item.labels || []).map((label) => (
                  <div
                    className={styles.cell_labels_item}
                    key={label.id}
                    style={{ background: '#' + label.color }}
                  >
                    {label.name}
                  </div>
                ))}
              </div>
              <br />
              <div className={styles.cell_desc}>
                {item.body.slice(item.title.length + 2, 200) + '....'}
              </div>
              <br />
              <div className={styles.cell_updateTime}>
                {'更新时间：' + item.updated_at.slice(0, 10)}
              </div>
              <div className={styles.cell_line}></div>
              <br />
            </div>
          ))
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
        )}
      </div>
    ),
    course: <div>ncie</div>,
  };

  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <Card
          cover={
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
          }
        >
          <Meta
            avatar={<Avatar src={userInfo.avatar_url} />}
            title={userInfo.name}
            description={userInfo.bio}
          />
        </Card>
      </div>
      <div className={styles.right}>
        <Card
          style={{ width: '100%' }}
          tabList={tabList}
          activeTabKey={moduleState.key}
          onTabChange={(key) => onTabChange(key)}
        >
          {contentList[moduleState.key]}
        </Card>
      </div>
    </div>
  );
}
export default Index;
