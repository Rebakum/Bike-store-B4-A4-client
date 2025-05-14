import { useAuthMeQuery } from "@/redux/features/auth/authApi";

const UserDashboardIndex = () => {
  const { data: user } = useAuthMeQuery(undefined);

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="p-6 text-center bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to Your Dashboard
        </h1>
        <div className="flex flex-col items-center justify-center mt-10 space-y-3 text-black">
          <img src={user?.data?.profileImage} />
          <h1 className="font-semibold uppercase">{user?.data?.name}</h1>
          <p className="text-blue-500 "> {user?.data?.email}</p>
          <p>{user?.data?.phone}</p>
          <p>{user?.data?.address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardIndex;
