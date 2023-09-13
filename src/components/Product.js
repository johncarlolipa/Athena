import Link from "next/link";
import { useState, useEffect } from "react";
import Featured from "./home/FeaturedProducts";
import { getAllProductsFromServer } from "../../lib/utils";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const productsFromServer = await getAllProductsFromServer();
        console.log(productsFromServer)

        if (mounted) {
          setProducts(productsFromServer);
          setLoading(false);
        }
      } catch (error) {
        if (mounted) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => (mounted = false);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-20">
        <div className="md:col-span-2 p-4">
          <h1 className="text-black font-poppins text-6xl font-medium leading-normal">
            Featured Products
          </h1>
        </div>
        <div className="md:col-span-1 p-4 flex justify-between items-center">
          <span className="text-black font-poppins text-base font-normal leading-normal">
            New Product
          </span>
          <span className="text-gray-400 font-poppins text-base font-normal leading-normal">
            Best Seller
          </span>
          <span className="text-gray-400 font-poppins text-base font-normal leading-normal">
            Sale Products
          </span>
        </div>
      </div>
      <div className="">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-4 mt-10">
            {products.map((product, id) => (
              <div key={id} className="">
                <Featured product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
