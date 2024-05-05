import CreateGroupComponent from "@/components/CreateGroup";

const CreateGroup = () => {
  return (
    <div>
      <div className="flex justify-center ml-3 mr-3">
        <div className="w-72 h-10 mb-4 mt-2 bg-white bg-opacity-75 rounded-2xl ">
          <h1 className="text-center mt-2">Crear Grupo</h1>
        </div>
      </div>
      <CreateGroupComponent/>
    </div>
  );
};

export default CreateGroup;
