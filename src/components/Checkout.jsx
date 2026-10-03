import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Data/useCart";

const getPrice = (price) => Number.parseFloat(String(price).replace(/[^0-9.]/g, "")) || 0;

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const subtotal = cartItems.reduce((total, item) => total + getPrice(item.price) * item.quantity, 0);
  const orderReference = `SC-${cartItems.map((item) => item.id).join("-")}-${Math.round(subtotal * 100)}`;
  const qrData = `SEVENT CARE PAYMENT\nOrder: ${orderReference}\nAmount: $${subtotal.toFixed(2)}`;
  const qrCodeUrl = `/images/qr.png`;

  if (cartItems.length === 0) {
    return (
      <main className="flex flex-1 items-center justify-center bg-slate-50 px-4 py-16">
        <div className="max-w-md text-center font-medium">
          <h1 className="font-serif text-3xl font-semibold text-stone-800">មិនមានការបង់ប្រាក់</h1>
          <p className="mt-3 text-stone-500">ដាក់ឥវ៉ាន់ចូលកន្រ្ទកដើម្បីទូទាត់ប្រាក់</p>
          <Link to="/Products1" className="mt-6 inline-block rounded-lg bg-stone-800 px-5 py-3 text-sm font-medium text-white hover:bg-stone-900">Continue shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-slate-50 px-4 py-10 sm:px-6 lg:px-10 font-medium">
      <div className="mx-auto max-w-4xl">
        <Link to="/cart" className="text-sm text-stone-600 transition hover:text-stone-900">← ត្រឡប់ក្រោយ</Link>
        <div className="mt-5 grid overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm lg:grid-cols-[1fr_0.9fr]">
          <section className="p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">កន្លែងទូទាត់ប្រាក់</p>
            <h1 className="mt-3 font-serif text-3xl font-semibold text-stone-800">ទូទាត់ប្រាក់ជាមួយ <span className="text-2xl">Pay Way</span></h1>
            <p className="mt-3 text-sm leading-6 text-stone-600">សូមធ្វើការស្កេនQR codeរួចធ្វើការបង់ប្រាក់រួចជាការស្រេច។</p>

            <div className="mt-7 divide-y divide-stone-100 rounded-lg border border-stone-200">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 p-4 text-sm">
                  <div><p className="font-medium text-stone-800">{item.name}</p><p className="mt-1 text-stone-500">ចំនួន: {item.quantity}</p></div>
                  <span className="font-medium text-stone-700">${(getPrice(item.price) * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex items-center justify-between p-4 font-semibold text-stone-800"><span>សរុប</span><span>${subtotal.toFixed(2)}</span></div>
            </div>
          </section>

          <aside className="flex flex-col items-center bg-stone-100 p-6 text-center sm:p-8">
            {paymentConfirmed ? (
              <div
                className="flex h-full flex-col items-center justify-center"
                onClick={(event) => {
                  if (event.target.closest('a[href="/Products1"]')) clearCart();
                }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-2xl text-white">✓</div>
                <h2 className="mt-5 font-serif text-2xl font-semibold text-stone-800">ការបង់ប្រាក់ទទួលបានជោគជ័យ</h2>
                <p className="mt-2 text-sm leading-6 text-stone-600">សូមអរគុណ!ទំនិញរបស់អ្នកនឹងត្រូវបានរៀបចំដឹកជញ្ជូនឆាប់ៗ</p>
                <Link to="/Products1" className="mt-6 rounded-lg bg-stone-800 px-5 py-3 text-sm font-medium text-white hover:bg-stone-900">បន្តទៅមុខ</Link>
              </div>
            ) : (
              <>
                <p className="text-sm font-semibold text-stone-700">កម៉្មុង {orderReference}</p>
                <img src={qrCodeUrl} alt={`QR code to pay $${subtotal.toFixed(2)} for order ${orderReference}`} className="mt-5 h-64 w-64 rounded-xl bg-white p-3 shadow-sm" />
                <p className="mt-5 text-2xl font-bold text-stone-800">${subtotal.toFixed(2)}</p>
                <p className="mt-2 text-xs leading-5 text-stone-500">សូមធ្វើការបង់ទឹកប្រាក់ដើម្បីបញ្ចប់ការទូទាត់ទំនិញ</p>
                <button type="button" onClick={() => setPaymentConfirmed(true)} className="mt-6 w-full rounded-lg bg-stone-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-900">បញ្ចប់ការទូទាត់ប្រាក់</button>
              </>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
