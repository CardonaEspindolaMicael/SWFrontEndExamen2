import React, { useState } from 'react';
import ConfirmModal from '../MODAL/QuestionDelete';
import { ApiRequests } from '../../../api/ApiRequests';

export const DeleteButton = ({
  endpoint = "",
  identificador,
  OnClickFn,
  fetchCommon,
}) => {
  const [showModal, setShowModal] = useState(false);

  const fetchUsers = async () => {
    const puntoFinal = `${endpoint}/${identificador}`;
    try {
      await ApiRequests.deleteCommon(puntoFinal);
      fetchCommon();
    } catch (error) {
      console.error(error);
    }
    setShowModal(false);
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <button
        onClick={OnClickFn ? OnClickFn : handleShow}
        type="button"
        title="Eliminar"
        className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <ConfirmModal
        showModal={showModal}
        handleConfirm={fetchUsers}
        handleClose={handleClose}
      />
    </>
  );
};

export default DeleteButton;
