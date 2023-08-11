//first we import a http module
const http = require('http');

// define port number 
const PORT = 3000;

//Define host name 
const hostname = 'localhost';


// sample data 
const jsonData={ "products": [
    {
        "id": 1,
        "name": "Almond Toe Court Shoes, Patent Black",
        "category": "Womens Footwear",
        "price": 99.00,
        "stock": 5
    },
    {
        "id": 2,
        "name": "Suede Shoes, Blue",
        "category": "Womens Footwear",
        "price": 42.00,
        "stock": 4
    },
    {
        "id": 3,
        "name": "Leather Driver Saddle Loafers, Tan",
        "category": "Mens Footwear",
        "price": 34.00,
        "stock": 12
    },
    {
        "id": 4,
        "name": "Flip Flops, Red",
        "category": "Mens Footwear",
        "price": 19.00,
        "stock": 6
    },
    {
        "id": 5,
        "name": "Flip Flops, Blue",
        "category": "Mens Footwear",
        "price": 19.00,
        "stock": 0
    },
    {
        "id": 6,
        "name": "Gold Button Cardigan, Black",
        "category": "Womens Casualwear",
        "price": 167.00,
        "stock": 6
    },
    {
        "id": 7,
        "name": "Cotton Shorts, Medium Red",
        "category": "Womens Casualwear",
        "price": 30.00,
        "stock": 5
    },
    {
        "id": 8,
        "name": "Fine Stripe Short Sleeve￼Shirt, Grey",
        "category": "Mens Casualwear",
        "price": 49.99,
        "stock": 9
    },
    {
        "id": 9,
        "name": "Fine Stripe Short Sleeve￼Shirt, Green",
        "category": "Mens Casualwear",
        "price": 49.99,
        "offer": 39.99,
        "stock": 9
    },
    {
        "id": 10,
        "name": "Sharkskin Waistcoat, Charcoal",
        "category": "Mens Formalwear",
        "price": 75.00,
        "stock": 2
    },
    {
        "id": 11,
        "name": "Lightweight Patch Pocket￼Blazer, Deer",
        "category": "Mens Formalwear",
        "price": 175.50,
        "stock": 1
    },
    {
        "id": 12,
        "name": "Bird Print Dress, Black",
        "category": "Womens Formalwear",
        "price": 270.00,
        "stock": 10
    },
    {
        "id": 13,
        "name": "Mid Twist Cut-Out Dress, Pink",
        "category": "Womens Formalwear",
        "price": 540.00,
        "stock": 5
    }
    ]
}


//create instance 
const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.statusCode=200;
        res.setHeader('content','text/plain');
        res.end("Welcome to Men & Women Dummy Data");
    }else if(req.url=='/men'){
        res.statusCode=200;
        res.setHeader('content','application/json');
        res.end(JSON.stringify(jsonData));
    }else if(req.url=='/women'){
        res.statusCode=200;
        res.setHeader('content','application/json');
        res.end(JSON.stringify(jsonData));
    }else{
        res.statusCode=500;
        res.setHeader('content','text/plain');
        res.end('page not found')
    }
    res.end();
})

//server running at port no.
server.listen(PORT,()=>{
    console.log(`server running at ${hostname} : ${PORT}`);
})