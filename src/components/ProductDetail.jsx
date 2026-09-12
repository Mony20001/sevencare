import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from "../Data/Products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ស្វែងរក product តាម id ពី URL
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold">រកមិនឃើញផលិតផលនេះទេ!</h2>
        <button 
          onClick={() => navigate(-1)} 
          className="mt-4 px-4 py-2 bg-stone-800 text-white rounded-lg"
        >
          ត្រឡប់ក្រោយ
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-md border border-stone-200">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 text-sm text-stone-500 hover:text-stone-800 transition-colors"
      >
        ← ត្រឡប់ក្រោយ
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-[#f7f5f2] p-6 rounded-xl flex items-center justify-center">
          <img src={product.img} alt={product.name} className="max-h-[300px] object-contain" />
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">{product.type}</span>
          <h1 className="text-2xl font-bold text-stone-800">{product.name}</h1>
          <p className="text-stone-600 leading-relaxed text-sm">{product.des}</p>
          <div className="text-2xl font-bold text-stone-900 mt-2">{product.price}</div>
          
          <button className="mt-4 w-full py-3 bg-stone-800 text-white font-medium rounded-xl hover:bg-stone-900 transition-colors">
            ថែមចូលកន្ត្រក
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;