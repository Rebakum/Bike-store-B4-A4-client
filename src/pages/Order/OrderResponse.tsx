import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";

const OrderResponse = () => {
  const [searchParams] = useSearchParams();
  const invoice = searchParams.get("order_id");

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
          <Button className="w-full py-3 font-semibold text-white transition duration-300 rounded-lg">
            View My Orders
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderResponse;
