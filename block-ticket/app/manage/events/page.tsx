import dynamic from "next/dynamic";

const AddUser: React.FC = () => {
  const ManageEvents = dynamic(() => import("./ManageEvents"), {
    ssr: false,
  });

  return (
    <div className="max-w-5xl mx-auto p-4 font-mono">
      <ManageEvents />
    </div>
  );
};

export default AddUser;
