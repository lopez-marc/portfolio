import hljs from 'highlight.js';
// import {hljs.initLineNumbersOnLoad} from 'highlightjs-line-numbers.js';
import 'highlight.js/styles/base16/dracula.css';



// const html = hljs.highlightAuto('console.log("Hello")').value


hljs.highlightAll();

hljs.initLineNumbersOnLoad();

// const highlightedCode = hljs.highlight('console.log("Hello")', {language: 'javascript'}).value

// document.querySelector('#app').innerHTML = highlightedCode

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((el) => {
    // hljs.highlightElement(el);
    hljs.lineNumbersBlock(el);
  });
});