import { useEffect, useState } from "react";
import { FaSearch, FaShopify, FaShoppingCart } from "react-icons/fa";
import GlobalSearch from "../../components/main/GlobalSearch/GlobalSearch";
import { Link } from "react-router";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchValue(inputValue.trim());
    }, 500);

    return () => clearTimeout(timeout);
  }, [inputValue]);

  const query = searchValue
    ? new URLSearchParams({
        title: searchValue,
        limit: 10,
        page: 1,
        sellerId: undefined,
      }).toString()
    : null;

  // const { data, isLoading } = useSearchProductQuery(query ? query : null);
  let data,
    isLoading = false;

  return (
    <header className="bg-primary py-5">
      <nav className="container">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-4 text-3xl text-white">
            <FaShopify />
            <strong>Shopee</strong>
          </Link>
          <div className="flex items-center justify-between bg-white w-full p-1.5 rounded-sm relative">
            <input
              onChange={(e) => handleChange(e)}
              onFocus={(e) => handleChange(e)}
              className="w-full focus:outline-none px-1"
              type="text"
              placeholder="Search..."
            />
            <div className="bg-primary w-16 h-8 flex flex-col items-center justify-center rounded-sm text-white cursor-pointer">
              <FaSearch />
            </div>
            {isModalOpen && (
              <GlobalSearch
                isLoading={isLoading}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                data={data}
              />
            )}
          </div>
          <div className="text-white text-2xl">
            <FaShoppingCart />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
