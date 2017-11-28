//队列 先进先出 FIFO
function Queue(){
    var items=[];
    //队列尾部添加一个(或多个) 新的项
    this.enqueue=function(element){
        items.push(element);
    };
    // 移除队列的第一个项
    this.dequeue=function(){
        return items.shift();
    };
    //返回队列的第一个元素
    this.front=function(){
        return items[0];
    };
    this.isEmpty=function(){
        return items.length==0;
    };
    this.clear=function(){
        items=[];
    };
    this.size=function(){
        return items.length;
    };
    this.print=function(){
        console.log(items.toString());
    };
}

var queue=new Queue();
queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');
queue.dequeue();
// queue.print();
//queue.isEmpty();
//console.log(queue.size());


//优先队列
function PriorityQueue(){
    var items=[];
    function QueueElement(element,priority){
        this.element=element;
        this.priority=priority;
    }
    this.enqueue=function(element,priority){
        var queueElement=new QueueElement(element,priority);
        if(this.isEmpty()){
            items.push(queueElement);
        }else{
            var added=false;
            for(var i=0;i<items.length;i++){
                if(queueElement.priority<items[i].priority){
                    items.splice(i,0,queueElement);
                    added=true;
                    break;
                }
            }
            if(!added){
                items.push(queueElement);
            }
        }
    }
    // 移除队列的第一个项
    this.dequeue=function(){
        return items.shift();
    };
    //返回队列的第一个元素
    this.front=function(){
        return items[0];
    };
    this.isEmpty=function(){
        return items.length==0;
    };
    this.clear=function(){
        items=[];
    };
    this.size=function(){
        return items.length;
    };
    this.print=function(){
        console.log(items);
    };
}

var priorityQueue=new PriorityQueue();
priorityQueue.enqueue('John',2);
priorityQueue.enqueue('jack',1);
//priorityQueue.print();

//击鼓传花
function hotPotato(nameList,num){
    var queue=new Queue();
    for(var i=0;i<nameList.length;i++){
        queue.enqueue(nameList[i]);
    }
    var eliminated='';
    while(queue.size()>1){
        for(var i=0;i<num;i++){
            queue.enqueue(queue.dequeue())
        }
        eliminated=queue.dequeue();
        console.log(eliminated+'在击鼓传花游戏中被淘汰。');
    }
    return queue.dequeue();
}
var names=['john','jack','camila','ingrid','carl'];
var winner=hotPotato(names,10);
console.log('胜利者:'+winner);