import React, { useState } from "react";
import Header from "../../../../components/Header/Header";
import { FiPlus } from "react-icons/fi";
import UnitOfMeasurementForm from "./UnitOfMeasurementForm";

const UnitOfMeasurement: React.FC = () => {
  const [openModel, setOpenModel] = useState(false);

  return (
    <div>
      <Header
        modelWidth="40%"
        modelTitle="Product Company"
        buttonTitle="Add Product Company"
        buttonIcon={<FiPlus />}
        openModel={openModel}
        setOpenModel={setOpenModel}
      >
        <UnitOfMeasurementForm  />
      </Header>
    </div>
  );
};

export default UnitOfMeasurement;
