import { useEffect, useState } from 'react';
import request from 'umi-request';
import { history } from 'umi';
import styles from './index.less';
import { Card, Avatar } from 'antd';
import { data } from 'browserslist';

const { Meta } = Card;

function Index() {
  const [moduleState, setModuleState] = useState({ key: 'article' });
  const tabList = [
    {
      key: 'article',
      tab: '文章（10）',
    },
    {
      key: 'course',
      tab: '课程（3）',
    },
  ];
  const [list, setList] = useState([]);
  useEffect(() => {
    request
      .get('/api/repos/ghtyq/tblog/issues?labels=lagojs')
      .then(function (res) {
        setList(res);
        // console.log(res);
      });
  }, []);

  const contentList = {
    article: <div>123</div>,
    course: <div>ncie</div>,
  };

  // console.log('data',list);
  const onTabChange = (key) => {
    console.log(key);
    setModuleState({ key: key });
  };

  // function click() {
  //   history.push('./LagoCourseDirectories');
  // }
  console.log('state', moduleState.key);
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <Card
          cover={
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
          }
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="TaylorTian"
            description="前端开发小白"
          />
        </Card>
        ,
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
