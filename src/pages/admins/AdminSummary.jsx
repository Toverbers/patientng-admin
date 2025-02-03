//import SummaryItem from "@components/dashboard/SummaryItem";

import SummaryItem from "@/components/dashboard/SummaryItem";

const AdminSummary = ({adminDetails}) => {

  const managerCount = adminDetails?.filter((r) => r.role?.name === 'manager').length;
  const adminCount = adminDetails?.filter((r) => r.role?.name === 'admin').length;
  const operatorCount = adminDetails?.filter((r) => r.role?.name === 'operator').length;
  const otherCount = adminDetails?.filter((r) => r.role?.name != 'manager' && r.role?.name != 'admin' && r.role?.name != 'operator').length;
  //const otherCount = adminDetails?.length;

  return (
    <div>
      <div className="p-4 border rounded-xl mt-4 hidden md:flex items-center bg-white">
        <SummaryItem title={`${adminCount} Admins`} value="Admin" />
        <div className="h-16 w-0.5 bg-gray-200 mx-2"></div>
        <SummaryItem title={`${managerCount} Managers`} value={"Manager"} />
        <div className="h-14 w-0.5 bg-gray-200 mx-2"></div>
        <SummaryItem title={`${operatorCount} Operators`} value="Operations" />
        <div className="h-16 w-0.5 bg-gray-200 mx-2"></div>
        <SummaryItem title={`${otherCount} Others`} value="others" />
      </div>

      <div className="p-4 border rounded-xl mt-4 md:hidden grid grid-cols-2 gap-3 bg-white">
      <SummaryItem title={`${adminCount} Admins`} value="Admin" />
        <SummaryItem title={`${managerCount} Managers`} value={"Manager"} />
        <SummaryItem title={`${operatorCount} Operators`} value="Operations" />
        <SummaryItem title={`${otherCount} Others`} value="others" />
      </div>
    </div>
  );
};

export default AdminSummary;
