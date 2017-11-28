/**
 * Created by huipo on 2017/11/28.
 */
// 栈 后进先出LIFO
function Stack(){
    var items=[];
    //添加一个(或几个)新元素到栈顶。
    this.push=function(element){
        items.push(element);
    };
    //删除栈顶的元素
    this.pop=function(){
        return items.pop();
    };
    //返回栈顶的元素
    this.peek=function(){
        return items[items.length-1];
    };
    // 判断栈顶是否没有元素 没有元素=>true 有=>false
    this.isEmpty=function(){
        return items.length==0;
    };
    //返回栈里的元素个数
    this.size=function(){
        return items.length;
    };
    //移除栈里的所有元素=> 清空
    this.clear=function(){
        items=[];
    };
    this.print=function(){
        console.log(items.toString());
    };
}

var stack = new Stack();
//console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
//console.log(stack.peek());
stack.push(11);
//console.log(stack.size());
//stack.print();
//console.log(stack.isEmpty());
stack.push(15);
stack.pop();
stack.pop();
//stack.print();
//console.log(stack.peek());

// 十进制转二进制
function divideBy2(decNumber){
    var remStack=new Stack(),
        rem,// 余数字符串
        binaryString='';//二进制字符串
    while(decNumber>0){
        rem=Math.floor(decNumber%2);// 余数
        remStack.push(rem);
        decNumber=Math.floor(decNumber/2);//除数
    }
    while(!remStack.isEmpty()){
        binaryString+=remStack.pop().toString();
    }
    return binaryString;
}
//console.log(divideBy2(233));
//console.log(divideBy2(10));

function baseConverter(decNumber,base){
    var remStack=new Stack(),
        rem,
        baseString='',
        digits='0123456789ABCDEF';
    while(decNumber>0){
        rem=Math.floor(decNumber%base);
        remStack.push(rem);
        decNumber=Math.floor(decNumber/base);
    }
    while(!remStack.isEmpty()){
        baseString+=digits[remStack.pop()];
    }
    return baseString;
}
console.log(baseConverter(100345,2));
console.log(baseConverter(100345,8));
console.log(baseConverter(100345,16));