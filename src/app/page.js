import Image from "next/image";



export default function Home() {
  // const [product, setProduct]= useState([])

  // useEffect(()=>{
  //     const FetchData = async ()=>{
  //          const res = await fetch("https://dummyjson.com/products?limits=10")
  //          const data = await res.json()
  //          setProduct(data.products)
  //          console.log(data);

  //     }

  //     FetchData()
  // },[])

  return (
    
    <div>
      {/* <img
        src="./image1.jpeg"
        alt="image 1"
        style={{ width: "100%", height: "auto" }}
      />
      <img
        src="./image3.jpg"
        alt="image 3"
        style={{ width: "100%", height: "auto" }}
      /> */}

      <Image
        src="/image3.jpg"
        alt="image 3"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
        sizes="100vw"
        quality={50}
      />

      {/* {
    product.map((item)=>{
      return( 
      <div key={item.id}>
      <h1> {item.title} </h1>
      <img src={item.thumbnail} alt="" />
      </div>
      
      )
    })
   } */}
    </div>
  );
}
