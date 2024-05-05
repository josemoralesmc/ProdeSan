import  AddUserGroupComponent  from "@/components/addUserGroup";

const CreateGroup = () => {
  return (
    <div className="h-screen flex flex-col items-center ">
      <div className="flex justify-center ml-3 mr-3">
        <div className="w-72 h-10 mb-4 mt-2 bg-white bg-opacity-75 rounded-2xl ">
          <h1 className="text-center mt-2">Unirme a un grupo</h1>
        </div>
      </div>
      <AddUserGroupComponent/>
    </div>
  );
};

export default CreateGroup;
