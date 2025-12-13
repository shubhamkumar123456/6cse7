// Q) reverse the string  
// let text = "hello how are you"     // you are how hello
// let arr = text.split(' ')// [ 'hello', 'how', 'are', 'you' ]
// arr.reverse()  //[ 'you', 'are', 'how', 'hello' ]
// // console.log(arr)
// let ans = arr.join(' ');
// console.log(ans)




// Q) find the name of the product whose price is between 30 to 50 thousand including 30 and 50

let productsList = [
    {name:"Iphone", price:70000, rating:3.5},
    {name:"MI", price:30000, rating:4.5},
    {name:"X-box", price:50000, rating:5},
    {name:"Realme", price:15000, rating:2},
    {name:"oppo", price:45000, rating:3.5},
    {name:"Samsung", price:90000, rating:4.8},
    {name:"Nokia", price:1000, rating:5},
]

for(let i=0; i<productsList.length; i++){
    // console.log(i)
    // console.log(productsList[i])
    // console.log(productsList[i].price)
    //   i=0 1
            // 70000 >=30000 && 70000 <= 50000
    if(productsList[i].price >=30000 && productsList[i].price <=50000){
        console.log(productsList[i].name)
    }
}


// Mi , x-box, oppo