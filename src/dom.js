window.dom = {
  create(string) { // 创建新节点
    const container = document.createElement('template'); // template标签,可以容纳任何标签
    container.innerHTML = string.trim(); // 去掉字符串两边的元素
    console.log(container);
    return container.content.firstChild;
  },
  after(node, node2) { // 创建弟弟
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  before(node, node2) { // 创建哥哥
    node.parentNode.insertBefore(node2, node);
  },
  append(parent, node) { // 创建儿子
    parent.appendChild(node)
  },
  wrap(node, parent) { // 创建父元素
    dom.before(node, parent);
    dom.append(parent, node);
  },
  remove(node) { // 删除节点
    node.parentNode.removeChild(node)
    return node
  },
  empty(node) { // 删除后代
    // const {childNodes} = node;
    // 同上 const childeNodes = node.childNodes
    const array = [];
    let x = node.firstChild;
    while(x) {
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
    return array;
  },
  attr(node, name, value) { // 读写属性
    if(arguments.length === 3) { // 参数数量
      node.setAttribute(name, value);
    } else if(arguments.length === 2) {
      return node.getAttribute(name);
    }
  },
  text(node, string) { // 读写文本内容
    if(arguments.length === 2) { 
      if('innerText' in node){
        node.innerText = string;
      } else {
        node.textContent = string;
      }
    } else if(arguments.length === 1) {
      if('innerText' in node) {
        return node.innerText
      } else {
        return node.textContent
      }
    }
  },
  html(node, string) { //读写html
    if(arguments.length === 2) {
      node.innerHTML = string
    } else if(arguments.length === 1) {
      return node.innerHTML
    }
  },
  style(node, name, value) { // 读写样式
    if(arguments.length === 3) {
      // dom.style(div, 'color', 'red')
      node.style[name] = value;
    } else if(arguments.length === 2) {
      if(typeof name === 'string') {
        // div.style(div, 'color')
        return node.style[name];
      } else if(name instanceof Object) {
        // dom.style(div, {color: '1px solid red'})
        const object = name;
        for(let key in object) {
          node.style[key] = object[key]
        }
      }
    }
  },
  class: {
    add(node, className) {
      node.classList.add(className)
    },
    remove(node, className){
      node.classList.remove(className)
    },
    has(node, className) {
      return node.classList.contains(className)
    }
  },
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn)
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn)
  },
  find(selector, scope) {
    return (document || scope).querySelectorAll(selector)
  },
  parent(node) {
    return node.parentNode
  },
  children(node) {
    return node.children
  },
  siblings(node) {
    return Array.from(node.parentNode.children)
    .filter(n=>n!==node)
  },
  next(node) {
    let x = node.nextSibling
    while(x && x.nodeType === 3) {
      x = x.nextSibling
    }
    return x
  },
  previous(node) {
    let x = node.previousSibling
    while(x && x.nodeType === 3) {
      x = x.previousSibling
    }
    return x
  },
  each(nodeList, fn) {
    for(let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i])
    }
  },
  index(node) {
    const list = dom.children(node.parentNode)
    let i;
    for(i = 0; i < list.length; i++) {
      if(list[i] === node) {
        break;
      }
    }
    return i
  }
};







