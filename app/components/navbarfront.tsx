"use client"
import { useState } from 'react';
import { Search } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { useSearchStore } from './store/searchStore';

const Navbar = ({ handleShowModel }: { handleShowModel: () => void }) => {
    const { search, setSearch } = useSearchStore()
    const [ input, setInput ] = useState(false);
    return (
        <div className="main-container">
            <header className="header">
                <div className="toolbar">
                    <div className="title-section">
                        <h1 className="main-title"><a href="../main">LocalhoT Test</a></h1>
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
                    </div>

                    
                    <div className="toolbar-right">
                        {input && (
                            <input
                            type='text'
                            placeholder='Search...'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{width:'200px', height:'30px',border:'2px'}}
                            />
                        )}
                        <div className="icon-container"
                        onClick={() => setInput(!input)}>
                            <Search size={35}/>
                        </div>

                        <div className="icon-container">
                            <li className='relative group'><a href="#"><CircleUser size={35}/></a>
                                <ul className='absolute hidden group-hover:block bg-white text-black rounded-md mt-2 py-2 w-48'>
                                    <li><a href="../Profile" className='block px-4 py-2 hover:bg-gray-200'>Profile</a></li>
                                </ul>
                            </li>
                        </div>

                        <div className="select-field">
                            <div className="select-container px-2 py-1 rounded-md cursor-pointer">
                                <span className="select-value">
                                    <a href="../auth/login">Login</a>
                                </span>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </header>

            <main className="content">
                
            </main>
        </div>
    );
};

export default Navbar;
