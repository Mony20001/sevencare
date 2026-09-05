import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
function App() {
  const photos = [
    { src: './src/images/white.png', alt: 'White' },
    { src: './src/images/pink.png', alt: 'Pink' },
    { src: './src/images/yellow.png', alt: 'Yellow' },
    { src: './src/images/green.png', alt: 'Green' },
  ];
  const products = [
    {
      dis: '-16%',
      img: './src/images/image.png',
      name: 'Madagascar Centella Ampoule',
      type: 'Serum',
      des: 'កាត់បន្ថយមុន ពង្រឹងរបាំងការពារស្បែក ផ្តល់សំណើម សម្រួល និងកាត់បន្ថយការរលាក',
      price: '$15.00'
    },
    {
      dis: '-16%',
      img: './src/images/image.png',
      name: 'Madagascar Centella Ampoule',
      type: 'Serum',
      des: 'កាត់បន្ថយមុន ពង្រឹងរបាំងការពារស្បែក ផ្តល់សំណើម សម្រួល និងកាត់បន្ថយការរលាក',
      price: '$25.00'
    },
    {
      dis: '-16%',
      img: './src/images/image.png',
      name: 'Madagascar Centella Ampoule',
      type: 'Serum',
      des: 'កាត់បន្ថយមុន ពង្រឹងរបាំងការពារស្បែក ផ្តល់សំណើម សម្រួល និងកាត់បន្ថយការរលាក',
      price: '$25.00'
    },
    {
      dis: '-16%',
      img: './src/images/image.png',
      name: 'Madagascar Centella Ampoule',
      type: 'Serum',
      des: 'កាត់បន្ថយមុន ពង្រឹងរបាំងការពារស្បែក ផ្តល់សំណើម សម្រួល និងកាត់បន្ថយការរលាក',
      price: '$25.00'
    },
    {
      dis: '-16%',
      img: './src/images/image.png',
      name: 'Madagascar Centella Ampoule',
      type: 'Serum',
      des: 'កាត់បន្ថយមុន ពង្រឹងរបាំងការពារស្បែក ផ្តល់សំណើម សម្រួល និងកាត់បន្ថយការរលាក',
      price: '$25.00'
    },
    {
      dis: '-16%',
      img: './src/images/image.png',
      name: 'Madagascar Centella Ampoule',
      type: 'Serum',
      des: 'កាត់បន្ថយមុន ពង្រឹងរបាំងការពារស្បែក ផ្តល់សំណើម សម្រួល និងកាត់បន្ថយការរលាក',
      price: '$25.00'
    },
    {
      dis: '-16%',
      img: './src/images/image.png',
      name: 'Madagascar Centella Ampoule',
      type: 'Serum',
      des: 'កាត់បន្ថយមុន ពង្រឹងរបាំងការពារស្បែក ផ្តល់សំណើម សម្រួល និងកាត់បន្ថយការរលាក',
      price: '$25.00'
    },
    {
      dis: '-16%',
      img: './src/images/image.png',
      name: 'Madagascar Centella Ampoule',
      type: 'Serum',
      des: 'កាត់បន្ថយមុន ពង្រឹងរបាំងការពារស្បែក ផ្តល់សំណើម សម្រួល និងកាត់បន្ថយការរលាក',
      price: '$25.00'
    },
  ];
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <nav className="hidden md:flex items-center space-x-8 text-sm text-stone-700 font-medium">
            <a href="#home" className="hover:text-stone-900 transition">ផ្ទះ</a>
            <a href="#menu" className="hover:text-stone-900 transition">ម៉ឺនុយ</a>
            <a href="#contact" className="hover:text-stone-900 transition">ទំនាក់ទំនង</a>
            <a href="#about" className="hover:text-stone-900 transition">អំពី</a>
          </nav>
          <div className="text-2xl font-serif font-semibold tracking-wider text-[#2C2A29]">
            SEVENT⁷ CARE
          </div>
          <div className="flex items-center space-x-5 text-stone-700">
            <button aria-label="Search" className="hover:text-stone-900 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button aria-label="User Account" className="hidden sm:block hover:text-stone-900 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button aria-label="Cart" className="relative hover:text-stone-900 transition flex items-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-amber-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                2
              </span>
            </button>
          </div>
        </div>
      </header>
      <div className="flex items-start gap-8 ml-10">
        <div className="h-[500px] w-[500px] bg-[#FAF7F2]/90 rounded-full overflow-hidden flex justify-center items-center shrink-0 mt-15">
          <img className="h-full object-cover" src="./src/images/hero.png" alt="Beauty" />
        </div>
        <div className="w-[500px] h-[500px] overflow-hidden relative shrink-0 ml-50">
          <div className="flex w-[400%] h-full animate-slide">
            {photos.map((photo) => (
              <img key={photo.alt} className='w-[100%] h-full object-cover' src={photo.src} alt={photo.alt} />
            ))}
          </div>
        </div>
      </div>
      <h2 className='text-2xl pt-25 pl-5 font-serif font-semibold tracking-wider text-[#2C2A29]' >🧼 Cleanser</h2>
      <div className='min-h-auto  mt-13 ml-5 grid grid-cols-4 gap-2' >
        {products.map((product) => (
          <div class="w-[350px] h-[400px] mt-5 bg-white rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.03)] transition-all duration-300 ease-in-out flex flex-col border border-[#f0ede9] hover:-translate-y-[5px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] cursor-pointer">
            <div className='h-[250px] bg-[#f7f5f2] font-medium'>
              <div className='h-6 w-16 bg-red-500 absolute mt-2 ml-2'>
                <p className='text-white pl-3'>{product.dis}</p>
              </div>
              <img className='h-full w-[80%] object-cover pl-15' src={product.img} alt="" />
              <p className=' text-stone-700 pl-3 pt-2 text-lg'>{product.name}</p>
              <p className=' text-stone-700 pl-3'>{product.type}</p>
              <p className=' text-stone-700 pl-3 text-sm'>{product.des}</p>
              <p className=' text-stone-700 pl-3 text-lg pt-2'>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;