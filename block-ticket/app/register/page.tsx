import dynamic from "next/dynamic";

const AddUser: React.FC = () => {
  const DynamicAddUserForm = dynamic(() => import("./AddUserForm"), {
    ssr: false,
  });

  return (
    <div className="max-w-5xl mx-auto p-4 font-mono">
      <DynamicAddUserForm />
    </div>
  );
};

export default AddUser;
