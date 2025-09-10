import DashBoard from "./DashBoard";
import WithAuth from "./WithAuth";

const ProtectedDashBoard = WithAuth(DashBoard);

const App = () => {
  return (
    <div>
      <ProtectedDashBoard />
    </div>
  );
};
