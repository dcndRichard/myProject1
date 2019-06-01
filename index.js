function fun(x){
    return ()=>{
        console.log(x)
    }
}
var haveing = fun('coding');
haveing();