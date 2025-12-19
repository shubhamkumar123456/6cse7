// DataBase --> 

// commands -->
// 1) to view or show all data base -->  show dbs
// 2)create a new Database or use any existing Database --> use DatabaseName
// 3) create a collection  --> db.createCollection('collectionName')
// 4)insert Data  --> insert single Data --> db.collectionName.insertOne({key:value})
                //-->insert multiple Data --> db.collectionName.insertMany([{key:value}, {key:value}])

// delete a collection --> db.collectionName.drop()
// delete Database --> db.dropDatabase()

// update  Data-->
    // a) update Single data --> db.collectionName.updateOne({key, value}  ,{$set:{key: value}})  //first argument for finding the data second argument for updating any key value

    // b) update multiple Data -->db.collectionName.updateMany({key, value}  ,{$set:{key: value}})



    // filterProducts -->  gte , lte,  lt , gt, ne, eq
    // example --> db.collectionName.find( {price: {$gte:40000}})


            


let arr = [
    {name:"iphone",price:30000, rating:3.5,category:"smartphones"},
    {name:"samsung",price:40000, rating:1,category:"smartphones"},
    {name:"MI",price:35000, rating:3,category:"smartphones"},
    {name:"oppo",price:20000, rating:2.5,category:"smartphones"},
    {name:"realme",price:10000, rating:3.5,category:"smartphones"},
    {name:"Nokia",price:80000, rating:4.5,category:"smartphones"},
    {name:"Micromax",price:70000, rating:5,category:"smartphones"},
    
]