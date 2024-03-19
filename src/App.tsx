import React, { useState } from "react";
import Table from "./Components/organisms/Table";
import Form from "./Components/organisms/Form";
import Dialog from "./Components/organisms/Dialog";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Agregar el estado de los jugadores

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="min-h-screen mx-auto px-4 py-2">
        <div className="grid grid-cols-12 flex-grow">
          <div className="col-span-12">
            <h1 className="text-6xl text-center font-black">Metrics</h1>
          </div>
          <div className="col-span-4 hidden lg:block overflow-hidden">
            <Form />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <Table handleOpenDialog={handleOpenDialog} />
          </div>
          <Dialog isOpen={isOpen} onClose={handleCloseDialog}>
            <Form />
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default App;
