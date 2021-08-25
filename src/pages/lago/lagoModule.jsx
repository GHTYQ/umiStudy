import { history } from 'umi';
function lagoModule() {
  function click() {
    history.push('./logo');
  }
  return <button onClick={click}>JavaScript核心原理</button>;
}
export default lagoModule;
