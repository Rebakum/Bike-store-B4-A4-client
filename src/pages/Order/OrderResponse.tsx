import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const OrderResponse = () => {
  const [searchParams] = useSearchParams();
  const invoice = searchParams.get("order_id");
  const navigate = useNavigate();

  useEffect(() => {
    if (invoice) {
      const timeout = setTimeout(() => {
        navigate("/user/dashboard/viewOrders");
      }, 3000); // 3 seconds

      return () => clearTimeout(timeout);
    }
  }, [invoice, navigate]);

  return (
    <div className="flex items-center justify-center min-h-[75vh] p-6">
      <div className="w-full max-w-md p-6 text-center bg-white shadow-lg rounded-xl md:p-10">
        <h1 className="mb-4 text-2xl font-extrabold text-gray-800 md:text-3xl">
          Order Created!
        </h1>
        <p className="mb-6 text-gray-600">Your transaction ID is:</p>
        <div className="px-6 py-3 mb-6 font-mono text-lg text-black bg-gray-100 rounded-lg shadow-inner">
          {invoice || "N/A"}
        </div>

        <Link to="/user/dashboard/viewOrders">
          <Button className="w-full py-3 font-semibold text-white transition duration-300 rounded-lg bg-gradient-to-r from-[#ff8a05] via-[#ff5478] to-[#ff00c6]">
            Go to Orders
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderResponse;
