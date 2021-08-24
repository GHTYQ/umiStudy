import styles from './index.less';
import { history } from 'umi';

function Index() {
  function click() {
    history.push('./lagoModule');
  }
  return <button onClick={click}>拉钩教育</button>;
}
export default Index;
