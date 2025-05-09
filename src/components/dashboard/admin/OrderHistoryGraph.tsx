import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { OrderProductDetails } from "@/pages/OrderProductDetails";
import {
  useAllOrdersQuery,
  useVerifyOrderMutation,
} from "@/redux/features/order/orderApi";

import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "sonner";
const OrderHistoryGraph = () => {
  const { data, isLoading } = useAllOrdersQuery(undefined);
  const [verifyOrder] = useVerifyOrderMutation();

  const dataLength = data?.data?.length;
  const handleVerify = async (orderId: string) => {
    const toastId = toast.loading("verifying...");
    const res = await verifyOrder({ order_id: orderId });
    if (res?.data) {
      toast.success("Order verified successfully.", { id: toastId });
    } else {
      toast.error("Failed to verify order.", { id: toastId });
    }
  };
  if (isLoading) return <Loading />;
  console.log(data, "all order");
  return (
    <div className="relative py-4 overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex gap-4 py-6 ">
        <div className="mt-1 text-3xl">
          <FaHistory />
        </div>
        <h1 className="text-3xl font-bold ">Order History</h1>
      </div>
      {/* data table */}
      <div className="">
        <table className="w-full text-sm text-center text-gray-500 rtl:text-right ">
          <thead className="text-xs uppercase bg-black text-gray-50 ">
            <tr>
              <th scope="col" className="px-3 py-3">
                Id
              </th>
              <th scope="col" className="px-3 py-3">
                user Email
              </th>
              <th scope="col" className="px-3 py-3">
                Total Price
              </th>
              <th scope="col" className="px-3 py-3">
                Transaction Id
              </th>

              <th scope="col" className="px-3 py-3">
                Status
              </th>

              <th scope="col" className="px-3 py-3">
                Action
              </th>
              <th scope="col" className="px-3 py-3">
                Details
              </th>
            </tr>
          </thead>
          {(dataLength as number) > 0 && (
            <tbody>
              {data?.data?.slice(0, 5).map((item) => (
                <tr
                  key={item?._id}
                  className="border-b border-gray-200 odd:bg-white even:bg-gray-50 0"
                >
                  <td className="px-3 py-4">{item?._id}</td>
                  <td className="px-3 py-4">{item?.user?.email}</td>
                  <td className="px-3 py-4">{item?.totalPrice}</td>
                  <td className="px-3 py-4">{item?.transaction?.id}</td>
                  <td className="px-3 py-4">{item?.status}</td>
                  <td className="px-3 py-4">
                    {item?.status.toLowerCase() === "pending" ? (
                      <Button
                        className="w-[120px]"
                        onClick={() => handleVerify(item?.transaction?.id)}
                      >
                        Verify Order
                      </Button>
                    ) : (
                      <Button className="bg-green-700 hover:bg-green-700 cursor-default w-[120px]">
                        Verified
                      </Button>
                    )}
                  </td>
                  <td className="px-3 py-4">
                    {/* <Button className="w-[120px]">Details</Button> */}
                    <OrderProductDetails orderItems={item} />
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      {dataLength === 0 && (
        <div className="w-full h-[150px] grid place-items-center text-2xl ">
          <p>Not Found any order</p>
        </div>
      )}
      <div className="flex justify-center w-full py-4">
        <Link to={"/admin/dashboard/orders"}>
          <Button className="py-2">See More</Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderHistoryGraph;
