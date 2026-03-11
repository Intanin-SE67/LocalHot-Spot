import React from "react";

const CategoryModal = ({ handleShowModel }: { handleShowModel: () => void }) => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleShowModel}/>
                <div className="relative w-[750px] h-[450px] bg-neutral-600 rounded-lg p-6 shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-4">Select Categories</h2>
                    <div className="category-container">
                        <button>สถานที่ท่องเที่ยว</button>   <button>ร้านอาหาร</button>      <button>ร้านCafe</button>
                        <button>    วัด      </button>   <button>สวนสาธารณะ</button>   <button>คลับ/ผับ</button>
                        <button>    อื่นๆ     </button>
                    </div>
                </div>

        </div>
    );
};

export default CategoryModal;
