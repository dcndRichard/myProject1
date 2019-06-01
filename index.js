function fun(x){
    return ()=>{
        console.log(x)
    }
}
var haveing = fun('coding');
haveing();

var arr =['dog','cat','hen']
var arr2 = ()=>{
    var holder=[];
    arr.forEach((item)=>{
        holder.push(item.split(""));
    })
    return holder;
}
console.log(arr2())