//defineProperty用法
var Book={};
var name='';
Object.defineProperty(Book,'name',{
    set:function(val){
        name=val;
        console.log('你取了一个书名叫做：'+val);
    },
    get:function(){
        return '《'+name+'》';
    }
})
// Book.name='Vue权威指南';
// console.log(Book.name);
