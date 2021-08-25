import { history } from 'umi';

function Index() {
  function click() {
    history.push('./lagoModule');
  }
  return <button onClick={click}>拉钩教育11</button>;
}
export default Index;
