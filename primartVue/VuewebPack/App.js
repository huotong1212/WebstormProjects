
var App = {
    template:`<div>我是一个入口组件</div>`
};

// 声明，并导出
export var num1 = 2; //作为一整个对象key导出

//声明再导出
var num2 = 6;
export {num2};

export function add(x,y) {
    console.log(x+y)
}

//抛出App让main引用
export default App;
