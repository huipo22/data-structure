//链表 链表的元素在内存中并不是连续存放的。每个元素由一个 存储元素本身的节点 和 一个指向下一个元素的引用

function LinkedList(){
    var Node=function(element){
        this.element=element;
        this.next=null;
    }
    var length=0;
    var head=null; //列表中的第一个节点
    //列表尾部添加一项
    this.append=function(element){
        var node= new Node(element),
            current;
        if(head===null){
            head=node;
        }else{
            current=head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        length++;
    }
    //列表的特定位置插入一项
    this.insert=function(position,element){
        if(position>=0 && position<=length){
            var node=new Node(element),
                current=head,
                previous,
                index=0;
            if(position===0){
                node.next=current;
                head=node;
            }else{
                while(index++ <position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
            }
            length++;
            return true;
        }else{
            return false;
        }
    }
    // 列表的特定位置移除一项
    this.removeAt=function(position){
        if(position>-1 && position<length){
            var current=head,
                previous,//当前元素的前一个引用
                index=0;
            if(position===0){
                head=current.next
            }else{
                while(index++ <position){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
            }
            length--;
            return current.element;
        }else{
            return null;
        }
    }
    // 列表中移除一项
    this.remove=function(element){
        var index=this.indexOf(element);
        return this.removeAt(index);
    }
    // 返回元素在列表中的索引
    this.indexOf=function(element){
        var current=head,
            index=-1;
        while(current){
            if(element===current.element){
                return index;
            }
            index++;
            current=current.next;
        }
        return -1;
    }
    // 是否为空
    this.isEmpty=function(){
        return length===0;
    }
    // 返回链表中的元素个数
    this.size=function(){
        return length;
    }
    // 输出元素的值
    this.toString=function(){
        var current=head,
            string='';
        while(current){
            string+=","+current.element;
            current=current.next;
        }
        return string.slice(1);
    }
    this.print=function(){

    }
    this.getHead=function(){
        return head;
    }
}

var list=new LinkedList();
list.append(15);
list.append(10);
list.insert(1,90);
console.log(list.toString());

//双向链表
function DoublyLinkedList(){
    var Node=function(element){
        this.element=element;
        this.next=null;
        this.prev=null;
    }
    var length=0;
    var head=null;
    var tail=null;
    this.insert=function(position,element){
        if(position>=0 && position<=length){
            var node=new Node(element),
                current=head,
                previous,
                index=0;
            if(position===0){
                if(!head){
                    head=node;
                    tail=node;
                }else{
                    node.next=current;
                    current.prev=node;
                }
            }else if(position===length){
                current=tail;
                current.next=node;
                node.prev=current;
                tail=node;
            }else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
                current.prev=node;
                node.prev=previous;
            }
            length++;
            return true;
        }else{
            return false;
        }
    }
}