import ProductButton from "./product";


async function productList(){
    let response = await fetch("https://dummyjson.com/products?limits=100");
    let data = await response.json();
    return data.products
}

export default async function Product (){
    let products = await productList();
    console.log(products)
    return(
       <div>
                  <h1>Product List 2</h1>

                  {
                    products.map((item)=>
                    <div key={item.id}>
                     <h1>{item.title}</h1>
                     
                    <ProductButton price={item.price} />
                     </div>

                        
                    )
                  }
       </div>
    )
}