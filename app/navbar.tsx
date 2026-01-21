import { Search } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
    return (
        <div className="main-container">
            <header className="header">
                <div className="toolbar">
                    <div className="title-section">
                        <h1 className="main-title">LocalhosT SpoT</h1>
                    </div>
                    
                    <div className="toolbar-left">
                        <div className="nav-item">
                            <span className="nav-text">
                                question 
                            </span>
                            <ChevronDown size={12}/>
                            
                        </div>

                        <div className="nav-item">
                            <span className="nav-text"><a href='/history'>History</a></span>
                        </div>

                        <div className="nav-item">
                            <span className="nav-text">Category</span>
                        </div>
                    </div>

                    
                    <div className="toolbar-right">
                        <div className="icon-container">
                            <Search size={35}/>
                        </div>

                        <div className="icon-container">
                            <CircleUser size={35}/>
                        </div>

                        <div className="select-field">
                            <div className="select-container">
                                <span className="select-value">Create a question</span>
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
