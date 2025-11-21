"use client";
import React from 'react';
import { useModal } from '../../hooks/useModal';

interface AddQuizzesProps {
  closeModel: () => void;
  scheme_nameProp?: string;
  schema_idProp?: string;
  coursesIds: string[];
}
const AddQuizzes = ({ closeModel, scheme_nameProp, schema_idProp, coursesIds }: AddQuizzesProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Add Quizzes</h3>
      <p>Scheme Name: {scheme_nameProp}</p>
      <p>Schema ID: {schema_idProp}</p>
      <p>Course IDs: {coursesIds.join(', ')}</p>
      <div className="flex justify-end gap-2 mt-4">
        <button onClick={closeModel} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
            Close
        </button>
      </div>
    </div>
  );
};


const Page = () => {
  const { openModal, closeModal } = useModal();

  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Placeholder data from your example
    const scheme_name = "My Awesome Scheme";
    const schema_id = "xyz-123";
    const coursesIds = ["course-1", "course-2", "course-3"];
    const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
    const origin = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };

    openModal({
      view: <AddQuizzes closeModel={closeModal} scheme_nameProp={scheme_name} schema_idProp={schema_id} coursesIds={coursesIds} />, 
      customSize: "700px",
      title: scheme_name ? `Add (${scheme_name})` : "Add Quiz",
      origin,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8 flex justify-between items-center">
      <button
        onClick={(e) => handleOpenModal(e)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg transition-colors font-medium text-lg"
      >
        Open Global Modal
      </button>
      <button
        onClick={(e) => handleOpenModal(e)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg transition-colors font-medium text-lg"
      >
        Open Global Modal
      </button>
      <button
        onClick={(e) => handleOpenModal(e)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg transition-colors font-medium text-lg"
      >
        Open Global Modal
      </button>
    </div>
  );
};

export default Page;