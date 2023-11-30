import dynamic from "next/dynamic";

const AddUser: React.FC = () => {
  const DynamicAddEventOrganiserForm = dynamic(() => import("./Login"), {
    ssr: false,
  });

  return (
    <div className="max-w-5xl mx-auto p-4 font-mono">
      <DynamicAddEventOrganiserForm />
    </div>
  );
};

export default AddUser;
