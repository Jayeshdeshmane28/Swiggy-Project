import { useCart } from '../utils/CartContext';
import { DISH_URL } from '../Contants/Config';
import { Link } from 'react-router';

const DELIVERY_FEE = 49;
const TAX_RATE = 0.05;

const Cart = () => {
  const { cartItems, restaurantName, addToCart, decreaseQuantity, removeFromCart, clearCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt="Empty Cart"
          className="w-52 mb-6"
        />
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">You can go to home page to view more restaurants</p>
        <Link
          to="/"
          className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          SEE RESTAURANTS NEAR YOU
        </Link>
      </div>
    );
  }

  const taxes = Math.round(totalPrice * TAX_RATE);
  const grandTotal = totalPrice + DELIVERY_FEE + taxes;

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-1">My Cart</h1>
      <p className="text-gray-500 mb-6 text-sm">{restaurantName}</p>

      {/* Item list */}
      <div className="bg-white rounded-xl shadow-sm border divide-y mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 px-4 py-4">
            {/* Veg / Non-veg indicator */}
            <div className="shrink-0">
              {item.isVeg ? (
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="6" stroke="#007A4D" strokeWidth="2" fill="white"/>
                  <circle cx="12" cy="12" r="5" fill="#007A4D"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="6" stroke="#D80027" strokeWidth="2" fill="white"/>
                  <path d="M12 8 L16 15 H8 Z" fill="#D80027" stroke="#D80027" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
                </svg>
              )}
            </div>

            {/* Image */}
            {item.imgUrl && (
              <img
                src={DISH_URL + item.imgUrl}
                alt={item.title}
                className="w-16 h-16 rounded-lg object-cover shrink-0"
              />
            )}

            {/* Name + price */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate">{item.title}</p>
              <p className="text-gray-500 text-sm">₹{item.price} × {item.quantity}</p>
            </div>

            {/* Qty controls */}
            <div className="flex items-center border border-green-600 rounded-lg overflow-hidden shrink-0">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="text-green-600 font-bold px-3 py-1 hover:bg-gray-100 transition text-lg"
              >
                −
              </button>
              <span className="text-green-600 font-bold px-3">{item.quantity}</span>
              <button
                onClick={() => addToCart(item, restaurantName)}
                className="text-green-600 font-bold px-3 py-1 hover:bg-gray-100 transition text-lg"
              >
                +
              </button>
            </div>

            {/* Item total */}
            <p className="font-semibold w-16 text-right shrink-0">₹{item.price * item.quantity}</p>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-gray-400 hover:text-red-500 transition shrink-0 ml-1"
              title="Remove item"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Bill summary */}
      <div className="bg-white rounded-xl shadow-sm border px-6 py-5 mb-6">
        <h2 className="font-bold text-lg mb-4">Bill Details</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Item Total</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>₹{DELIVERY_FEE}</span>
          </div>
          <div className="flex justify-between">
            <span>GST & Restaurant Charges</span>
            <span>₹{taxes}</span>
          </div>
          <div className="border-t pt-3 flex justify-between font-bold text-base text-black">
            <span>To Pay</span>
            <span>₹{grandTotal}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={clearCart}
          className="flex-1 border border-orange-500 text-orange-500 font-semibold py-3 rounded-lg hover:bg-orange-50 transition"
        >
          Clear Cart
        </button>
        <button
          className="flex-1 bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Proceed to Payment · ₹{grandTotal}
        </button>
      </div>
    </div>
  );
};

export default Cart;
