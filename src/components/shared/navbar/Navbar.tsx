import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import { BiCartAdd } from "react-icons/bi";

import { Link, useLocation } from "react-router-dom";
import { ProfileDropdown } from "./ProfileDropdown";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TUser } from "@/types/types";

// brand fro logo
import brand from "@/assets/images/logo/Bike_Shop_Logo.png";
//

import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { verifyToken } from "@/utils/verifyToken";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

const menuList = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "All PRODUCTS", link: "/bikes" },
  { id: 3, name: "SERVICES", link: "/services" },
  { id: 4, name: "ABOUT", link: "/about" },
  { id: 5, name: "BLOGS", link: "/blogs" },
  { id: 5, name: "CONTACT", link: "/contact" },
];

//
const Navbar = () => {
  const token = useAppSelector(selectCurrentToken);
  const [showSearch, setShowSearch] = useState(false);

  const cartData = useAppSelector((state: RootState) => state.cart);
  const location = useLocation();
  //
  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  // console.log(cartData,"cartData")
  const isUser = token ? verifyToken(token) : null;
  const CartIcon = (
    <Link
      to="/cart"
      className="relative p-2 text-lg transition-all duration-300 hover:scale-105"
    >
      <BiCartAdd className={header ? "w-8 h-8 text-white" : "text-black"} />

      <span className="absolute px-2 py-1 text-xs text-white bg-[#8E1616] rounded-full -top-2 -right-2">
        {cartData?.items?.length}
      </span>
    </Link>
  );

  //

  return (
    <div>
      <section
        className={
          header
            ? " fixed top-0 z-50 shadow-sm py-4 bgDark text-white w-full px-4 lg:px-10"
            : " shadow-sm bg-white py-4 px-4 lg:px-10"
        }
      >
        <div className="container flex items-center justify-between px-4 mx-auto lg:px-0">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <Link to={"/"}>
              <div className="text-3xl font-bold text-white capitalize ">
                <img
                  className={header ? " h-12" : "w-56 rounded-sm"}
                  src={brand}
                  alt="bike shop brand"
                />
              </div>
            </Link>
          </div>

          {/* Middle - Navigation Links */}
          <nav className="items-center hidden gap-6 lg:flex">
            <ul className="flex gap-6 text-base font-bold">
              {menuList.map((item) => (
                <li className="relative group" key={item.id}>
                  <Link to={item.link}>
                    <span
                      className={`cursor-pointer hover:text-[#8E1616] transition-all duration-300 ${
                        item.link === location.pathname ? "text-[#8E1616]" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#8E1616] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
            {/* Search icon */}
            <div className="flex items-center gap-4">
              {!showSearch && (
                <button onClick={() => setShowSearch(true)}>
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
              )}
            </div>
            {/* Overlay search bar */}
            {showSearch && <SearchInput onClose={() => setShowSearch(false)} />}
          </nav>

          {/* Right Side - Cart & Login/Profile */}
          <div className="items-center hidden gap-6 lg:flex">
            {/* Cart */}
            {CartIcon}
            {/* Profile/Login Button with dianamic add user data form data base*/}
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

          {/* Mobile Navbar - Drawer */}
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-5 ">
                    <Search />
                    {/* Cart */}
                    {CartIcon}

                    {/* Login/Profile */}
                    {isUser ? (
                      <ProfileDropdown user={isUser as TUser} />
                    ) : (
                      <Link to="/login">
                        <Button
                          variant="outline"
                          className="font-semibold text-[#8E1616]"
                        >
                          Log in
                        </Button>
                      </Link>
                    )}
                  </div>
                  <Button
                    className={
                      header
                        ? "hover:bg-white hover:text-black text-white text-xl"
                        : "bg-transparent text-black hover:text-white  text-xl"
                    }
                    size="icon"
                  >
                    <Menu className="size-4" />
                  </Button>
                </div>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <img
                        className="w-56 "
                        src={brand}
                        alt="bike shop brand"
                      />
                    </div>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Menu List */}
                <div className="flex flex-col gap-4 mt-6 mb-6">
                  <ul className="flex flex-col gap-6 font-semibold">
                    {menuList.map((item) => (
                      <li className="relative group" key={item?.id}>
                        <Link to={item.link}>
                          <span
                            className={`cursor-pointer hover:[#8E1616] transition-all duration-300 ${
                              item.link === location.pathname
                                ? "text-[#8E1616]"
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
