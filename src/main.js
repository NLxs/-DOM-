const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div);

const div3 = dom.create('<div id="parent"></div>');
dom.wrap(test, div3);

const nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(test, 'title', 'Hi I am Nikki');
const title = dom.attr(test, 'title')
console.log(`title: ${title}`);

dom.text(test, '你好, 这是新的内容!');

dom.style(test, {border: '1px solid red', color: 'pink'});

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue');
console.log(dom.class.has(test, 'blue'));

const fn = ()=> {
  console.log('点击了');
}

dom.on(test, 'click', fn);
dom.off(test, 'click', fn);

const testDiv = dom.find('#test')[0] // 获取第一个, 否者会返回一个数组
console.log(testDiv);
const testDiv3 = dom.find('#test3')[0]
console.log(dom.find('.red', testDiv3)[0]); // 获取testDiv中的.red标签

console.log(dom.parent(test));

let test5 = document.querySelector('#test5');
console.log(dom.parent(test5));

console.log(dom.siblings(dom.find('#s2')[0]));


console.log(dom.next(s2));
console.log(dom.previous(s2));

const t = dom.find('#travel')[0]; // find() 返回的是一个数组
dom.each(dom.children(t), (n)=> dom.style(n, 'color', 'red'))


const t2 = dom.find('#t2')[0]
console.log(dom.index(t2));


























