import useProductsContext from "../../hooks/useProductsContext";

const Header = () => {
  const { cart, onCartOpen } = useProductsContext();

  return (
    <header className="bg-accent-200 w-full">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-4">
        <p className="text-3xl font-extrabold text-primary">FakeStore</p>
        <div className="relative">
          <button
            className="hover:bg-accent-50 rounded-xl p-4 transition-colors hover:cursor-pointer"
            onClick={onCartOpen}
          >
            <img src="/shopping-cart.svg" alt="cart icon" />
            {cart.length > 0 && (
              <div className="bg-danger absolute right-1 top-2 flex min-h-4 min-w-4 items-center justify-center rounded-full">
                <p className="text-sm">{cart.length}</p>
              </div>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
