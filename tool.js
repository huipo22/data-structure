//反转字符串
var str='abcdef';
var newStr=str.split('').reverse().join('');
// console.log(newStr);

//数组去重
Array.prototype.unique=function(){
    var res=[];
    var json={};
    for(var i=0;i<this.length;i++){
        if(!json[this[i]]){
            res.push(this[i]);
            json[this[i]]=1;
        }
    }
    console.log(json);
    return res;
}
var arr=[1,1,2,34,32,12,43,21,2,1];
//console.log(arr.unique());

//查找字符串中出现次数最多的字符
String.prototype.findMaxDuplicateChar=function(){
    if(this.length===1){
        return str;
    }
    var charObj={};
    for(var i=0;i<this.length;i++){
        if(!charObj[this.charAt(i)]){
            charObj[this.charAt(i)]=1;
        }else{
            charObj[this.charAt(i)]+=1;
        }
    }
    // console.log(charObj);
    var maxChar='';
        maxValue=1;
    for(var k in charObj){
        if(charObj[k]>=maxValue){
            maxChar=k;
            maxValue=charObj[k];
        }
    }
    return maxChar+':'+maxValue;
}

// console.log('aabbcccddessddaadsa'.findMaxDuplicateChar());

//判断回文字符串
function palindrome(str){
    var re=/[\W]/g;
    var lowRegStr=str.toLowerCase().replace(re,'');
    if(lowRegStr.length===0){
        return true;
    }
    if(lowRegStr[0]!=lowRegStr[lowRegStr.length-1]){
        return false;
    }
    return palindrome(lowRegStr.slice(1,lowRegStr.length-1));
}
// console.log(palindrome('abcdcba'));

//生成指定长度的随机字符串
function randomString(n){
    var str='abcdefghigklmnopqrstuvwxyz0123456789';
    var tmp='';
    for(var i=0;i<n;i++){
        tmp+=str.charAt(Math.round(Math.random()*str.length));
    }
    return tmp;
}
// console.log(randomString(8));

//十六进制颜色值的随机生成
function randomColor(){
    var arrHex=['0','1','2','3','4','5','6','7','8','9','10','a','b','c','d','e','f'];
    var colorHex='#';
    for(var i=0;i<6;i++){
        colorHex+=arrHex[Math.floor(Math.random()*16)]
    }
    return colorHex;
}
// console.log(randomColor())
//冒泡排序
Array.prototype.bubbleSort=function(){
    for(var i=0;i<this.length-1;i++){
        for(var j=0;j<this.length-1-i;j++){
            if(this[j]>this[j+1]){
                var tmp=this[j];
                this[j]=this[j+1];
                this[j+1]=tmp;
            }
        }
    }
    return this;
}
// console.log([1,2,3,5,6,3,1213,3431,12,1,2,3].bubbleSort())

//快速排序
function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    var pivotIndex=Math.floor(arr.length/2);
    var pivot=arr.splice(pivotIndex,1)[0]; //找基准，并把基准从原数组删除
    var left=[],
        right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot,quickSort(right));
}
// console.log(quickSort([85,23,43,10,35]));

//插入排序
function insertSort(arr){
    var len=arr.length;
    for(var i=1;i<len;i++){
        var tmp=arr[i];
        var j=i-1;
        // console.log(j);
        while(j>=0&&arr[j]>tmp){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=tmp;
    }
    return arr;
}
console.log(insertSort([2,3,1,45,2,12,34232,1,21,23]))