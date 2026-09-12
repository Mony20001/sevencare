import { products } from "../Data/Products";
import { useNavigate } from 'react-router-dom';
const Products1 = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => navigate(`/product/${product.id}`)}
          className="group w-full bg-white rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.03)] transition-all duration-300 ease-in-out flex flex-col border border-[#f0ede9] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] cursor-pointer"
        >
          <div className="relative aspect-square bg-[#f7f5f2] flex items-center justify-center p-6 overflow-hidden">
            {product.dis && (
              <span className="absolute top-3 left-3 z-10 h-6 px-2 bg-red-500 text-white text-xs font-semibold flex items-center justify-center rounded-md">
                {product.dis}
              </span>
            )}
            <img
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              src={product.img}
              alt={product.name}
              loading="lazy"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow justify-between">
            <div>
              <p className="text-stone-400 text-xs font-semibold uppercase tracking-wider">
                {product.type}
              </p>
              <h3 className="text-stone-800 font-semibold text-base mt-1 line-clamp-1">
                {product.name}
              </h3>
              <p className="text-stone-500 text-xs mt-1 line-clamp-2 leading-relaxed">
                {product.des}
              </p>
            </div>
            <p className="text-red-700 font-bold text-lg mt-3">
              {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products1;