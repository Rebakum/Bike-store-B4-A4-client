import brand from "@/assets/images/logo/Bike_Shop_Logo.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TUser } from "@/types/types";
import { Menu, Search } from "lucide-react";
import { BiCartAdd } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { ProfileDropdown } from "./ProfileDropdown";

import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { verifyToken } from "@/utils/verifyToken";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

const menuList = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "ALL PRODUCTS", link: "/bikes" },
  { id: 3, name: "SERVICES", link: "/services" },
  { id: 4, name: "ABOUT", link: "/about" },
  { id: 5, name: "BLOGS", link: "/blogs" },
  { id: 6, name: "CONTACT", link: "/contact" },
];

const Navbar = () => {
  const token = useAppSelector(selectCurrentToken);
  const cartData = useAppSelector((state: RootState) => state.cart);
  const [showSearch, setShowSearch] = useState(false);
  const [header, setHeader] = useState(false);
  const location = useLocation();

  const isUser = token ? verifyToken(token) : null;

  useEffect(() => {
    const scrollHeader = () => {
      setHeader(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);

  const CartIcon = (
    <Link
      to="/cart"
      className="relative p-2 transition-all duration-300 hover:scale-105"
    >
      <BiCartAdd
        className={header ? "w-7 h-7 text-white" : "w-7 h-7 text-black"}
      />
      <span className="absolute px-2 py-1 text-xs text-white bg-orange-500 rounded-full -top-2 -right-2">
        {cartData?.items?.length}
      </span>
    </Link>
  );

  return (
    <div>
      <section
        className={`fixed top-0 z-50 w-full py-4 px-4 lg:px-10 transition-all duration-300 ${
          header ? "bgDark text-white shadow-sm" : "bg-white"
        }`}
      >
        <div className="container flex items-center justify-between mx-auto">
          {/* Left Side */}
          <div className="flex items-center justify-between gap-5">
            {/* Logo */}
            <Link to="/">
              <img
                className={header ? "h-12" : "w-40 rounded-sm"}
                src={brand}
                alt="Bike Shop Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <ul className="flex gap-4 font-semibold ">
                {menuList.map((item) => (
                  <li key={item.id} className="relative group">
                    <Link to={item.link}>
                      <span
                        className={`cursor-pointer transition-all duration-300 hover:text-orange-500 ${
                          item.link === location.pathname
                            ? "text-orange-500"
                            : ""
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Side */}
          <div className="items-center hidden gap-6 lg:flex">
            {/* Search */}
            {!showSearch && (
              <button onClick={() => setShowSearch(true)}>
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            )}
            {showSearch && <SearchInput onClose={() => setShowSearch(false)} />}

            {/* Cart */}
            {CartIcon}

            {/* Profile/Login */}
            {isUser ? (
              <ProfileDropdown user={isUser as TUser} />
            ) : (
              <Link to="/login">
                <Button className="h-10 text-lg font-medium text-black capitalize bg-white border-2 shadow-none hover:shadow-md hover:text-white">
                  Log in
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Navbar */}
          <div className="flex items-center gap-6 lg:hidden">
            {!showSearch && (
              <button onClick={() => setShowSearch(true)}>
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            )}
            {showSearch && <SearchInput onClose={() => setShowSearch(false)} />}
            {CartIcon}
            {isUser ? (
              <ProfileDropdown user={isUser as TUser} />
            ) : (
              <Link to="/login">
                <Button
                  variant="outline"
                  className="font-semibold text-orange-500"
                >
                  Log in
                </Button>
              </Link>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  className={`text-3xl ${
                    header
                      ? "text-white hover:bg-white hover:text-black"
                      : "bg-transparent text-black hover:text-white"
                  }`}
                >
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <img className="w-40" src={brand} alt="Bike Shop Logo" />
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 mt-6">
                  <ul className="flex flex-col gap-6 font-semibold ">
                    {menuList.map((item) => (
                      <li key={item.id}>
                        <Link to={item.link}>
                          <span
                            className={`cursor-pointer hover:text-orange-500 transition-all duration-300 ${
                              item.link === location.pathname
                                ? "text-orange-500"
                                : ""
                            }`}
                          >
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
