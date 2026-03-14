"use client";
import { Search } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState,useEffect } from 'react';
import { useSearchStore } from './store/searchStore';

const Navbar = ({ handleShowModel }: { handleShowModel: () => void }) => {
    const router = useRouter();
    const { search, setSearch } = useSearchStore()
    const [ input, setInput ] = useState(false);
    const [ user,setUser ] = useState<any>(null);

    useEffect(() => {
        const load = async () => {                                                         //ใช้ load = async เพื่อจะสร้างasync function
            const res = await fetch("/api/auth/get-session");
            const session = await res.json();
            setUser(session?.user ?? null);
        } 
        load();

    },[]);                                                                                 // ,[] คือรันครั้งเดียวตอน component โหลด
    const {
        data: session,
        isPending,
        error,
        refetch
    } = authClient.useSession();                                                            //ใช้ useSession เพื่อดึงข้อมูล session ของผู้ใช้ที่ล็อกอินอยู่ ถ้าไม่มี session จะเป็น null และ isPending จะเป็น true ในระหว่างที่กำลังโหลดข้อมูล session
    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/auth/login");
                }
            }
        }); 
    }
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

                        <div className="icon-container" >
                            <li className='relative group' ><a href="#">
                                <img 
                                src={user?.image || "/images/avatar.jpg"}
                                style={{width:'35px', height:'35px', borderRadius:'100%',border:'2px solid white'}}/></a>
                                <ul className='absolute hidden group-hover:block bg-white text-black rounded-md mt-2 py-2 w-48'>
                                    {!session && (<li><a href="../auth/login" className='block px-4 py-2 hover:bg-gray-200'>Login</a></li>)}
                                    {session && (
                                        <>
                                        <li><a href="../Profile" className='block px-4 py-2 hover:bg-gray-200'>Profile</a></li>
                                        <li><a href="#" onClick={handleLogout} className='block px-4 py-2 hover:bg-gray-200'>Logout</a></li>
                                        </>)}
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
