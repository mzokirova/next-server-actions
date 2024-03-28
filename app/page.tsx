import { addProductToDatabase } from "./actions/serverAction";
import AddProductButton from "./components/AddProductButton";
import { Product } from "./typings";


export default async function Home() {
  const res = await
    fetch('https://6605b19ed92166b2e3c29ceb.mockapi.io/products',
      {
        cache: 'no-cache',
        next: {
          tags: ["products"]
        }

      })
  const products: Product[] = await res.json();



  return (
    <main className="">
      <h1 className="text-center font-semibold">Products Warehouse</h1>
      <AddProductButton/>
      <form action={addProductToDatabase} className="flex flex-col gap-5 max-w-xl mx-auto p-5">

        <input name="product" className="border border-gray-300
        p-2 rounded-md"
          placeholder="Enter Product Name" />
        <input name="price" className="border border-gray-300
        p-2 rounded-md"
          placeholder="Enter Price Name"
        />
        <button className="border bg-blue-500 text-white hover:bg-blue-600 ">Add Product</button>
      </form>

      <h2 className="font-bold p-5">List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p>{product.product}</p>
            <p>${product.price}</p>
          </div>
        ))}

      </div>

    </main>
  );
}
