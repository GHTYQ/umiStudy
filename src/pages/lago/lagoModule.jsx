import { history } from 'umi';
import { Row, Col, Divider, Card } from 'antd';
import styles from './lagoModule.less';

function lagoModule() {
  function handleClick(item) {
    console.log('打印', item);
    history.push({
      pathname: './logo',
      courseInfo: item,
    });
  }
  const list = [
    {
      title: 'JavaScript 核心原理精讲',
      desc: '夯实 JavaScript 基本功，跨越前端进阶门槛',
      author: '若离 前美团前端技术专家',
      cover:
        'https://s0.lgstatic.com/i/image/M00/8D/31/CgqCHl_6zVmAceMuAADwxLL_pbM709.png',
      tag: 'js',
    },
    {
      title: '深入浅出搞定 React',
      desc: '掌握 React 知识链路和底层逻辑',
      author: '修言 高级前端工程师',
      cover:
        'https://s0.lgstatic.com/i/image/M00/5D/09/Ciqc1F-D0-OAZTxlAABYS9gye8s357.png',
      tag: 'react',
    },
    {
      title: 'Flutter快学快用24讲',
      desc: '手把手带你打造一个Flutter实战应用',
      author: '清弦 高级前端开发工程师，跨端平台研发团',
      cover:
        'https://s0.lgstatic.com/i/image/M00/5B/A5/CgqCHl9_zreAJNqUAADuMWEj8nA344.png',
      tag: 'flutter',
    },
    {
      title: 'iOS开发进阶',
      desc: '从工程化入手，提高iOS开发效率',
      author: '林永坚 移动端技术负责人',
      cover:
        'https://s0.lgstatic.com/i/image6/M01/09/52/CioPOWA16KiAH2BSAAEycc5XNq8434.png',
      tag: 'ios',
    },
  ];
  return (
    <div className={styles.page}>
      <Divider orientation="left">拉钩教育</Divider>
      <Row gutter={[10, 10]}>
        {list.map((item) => (
          <Col span={6}>
            <Card className={styles.card} hoverable bordered>
              <div
                className={styles.cardBody}
                onClick={() => handleClick(item)}
              >
                <img className={styles.cardImg} src={item.cover}></img>
                <div className={styles.cardContent}>
                  <p className={styles.cardTitle}>{item.title}</p>
                  <p>
                    {item.desc} <br />
                    {item.author}
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default lagoModule;
