import React from "react";

const CategoryModel = ({ handleShowModel }: { handleShowModel: () => void }) => {
    return (
        <div className="Absolute">
            <div 
                className="w-full h-full absolute top-0 backdrop-filter backdrop-brightness-75 backdrop-blur-md"
                onClick={handleShowModel}>
                <div className="w-[400px] h-[300px] bg-white rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-2xl font-bold mb-4">Category</h2>
                    <p className="text-gray-600">This is the category modal content.</p>
                </div>
            </div>
        </div>

    )
};

export default CategoryModel;