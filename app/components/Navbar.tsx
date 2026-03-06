"use client";
import { Search } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const Navbar = ({ handleShowModel }: { handleShowModel: () => void }) => {
    return (
            <header className="header">
                <div className="toolbar">
                    <div className="title-section">
                        <h1 className="main-title"><a href="../main">LocalhoT SpoT</a></h1>
                    </div>
                    
                    <div className="toolbar-left">
                        <div className="nav-item">
                            <span className="nav-text">
                                <a href="./">question</a>
                            </span>
                            <ChevronDown size={12}/>
                            
                        </div>

                        <div className="nav-item">
                            <span className="nav-text"><a href='/history'>History</a></span>
                        </div>

                        <div className="nav-item">
                            <button onClick={handleShowModel} className="nav-text">
                                Category
                            </button>
                        </div>
                    </div>

                    
                    <div className="toolbar-right">
                        <div className="icon-container">
                            <Search size={35}/>
                        </div>

                        <div className="icon-container">
                            <li className='relative group'><a href="#"><CircleUser size={35}/></a>
                                <ul className='absolute hidden group-hover:block bg-white text-black rounded-md mt-2 py-2 w-48'>
                                    <li><a href="../Profile" className='block px-4 py-2 hover:bg-gray-200'>Profile</a></li>
                                    <li><a href="../auth/login" className='block px-4 py-2 hover:bg-gray-200'>Login</a></li>
                                    <li><a href="#" className='block px-4 py-2 hover:bg-gray-200'>Logout</a></li>
                                </ul>
                            </li>
                        </div>

                        <div className="select-field">
                            <div className="select-container px-2 py-1 rounded-md cursor-pointer">
                                <span className="select-value">
                                    <a href="./create/cover">Create a question</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    );
};

export default Navbar;
