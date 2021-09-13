import { useState } from 'react';
import { useEffect } from 'react';
import request from 'umi-request';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import styles from './lagoCourseDetail.less';

function LagoCourseDetail() {
  const [data, setData] = useState('');

  /**
   * 为代码块显示添加行号
   * @param {String} code MD的代码内容
   */
  function beforNumber(code) {
    if (!code.trim()) {
      return code;
    }
    const list = code.split('\n');
    const spanList = ['<span aria-hidden="true" line-row>'];
    list.forEach(() => {
      spanList.push('<span></span>');
    });
    spanList.push('</span>');
    list.push(spanList.join(''));
    return list.join('\n');
  }

  marked.setOptions({
    renderer: new marked.Renderer(),
    langPrefix: 'hljs ',
    gfm: true, //启动类似Github样式的Markdown,填写true或者false
    pedantic: false, //只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
    sanitize: false, //原始输出，忽略HTML标签，默认为false。 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
    tables: true, //支持Github形式的表格，必须打开gfm选项
    breaks: false, //支持Github换行符，必须打开gfm选项，填写true或者false
    smartLists: true, //优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
    smartypants: false,
    highlight(code) {
      return beforNumber(hljs.highlightAuto(code).value);
    },
  });

  useEffect(() => {
    request
      .get('/api/repos/ghtyq/tblog/issues?labels=开篇词')
      .then(function (res) {
        '';
        setData(res[0].body || []);
        // console.log(res[0].body);
      });
  }, []);
  console.log('data', data);
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: marked(data) }}
    ></div>
    // <div>sha</div>
  );
}
export default LagoCourseDetail;
