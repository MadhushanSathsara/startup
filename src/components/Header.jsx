import React, { useState } from 'react'

const Header = () => {

    const [open, setOpen] = useState(false);

    const navigation = [
        {id: "hero", label: "Home"},
        {id: "about", label: "About"},
        {id: "services", label: "Services"},
        {id: "portfolio", label: "Portfolio"},
        {id: "contact", label: "Contact"},

    ];

  return (
    <header className="fixed w-full bg-white shadow z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold">CODEMAP</h1>
            <nav className="hidden md:flex space-x-6 font-bold text-lg">
                {navigation.map((item)=>(
                    <a
                    key ={item.id}
                    href={`#${item.id}`}
                    className="text-gray-600 hover:text-blue-500"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
            <button className="md:hidden text-gray-600" onClick={()=> setOpen(!open)}>☰</button> 
        </div>

        {open && (
            <div className="md:hidden bg-white px-6 py-4 space-y-2 shadow">
                {navigation.map((item)=>(
                    <a
                    key ={item.id}
                    href={`#${item.id}`}
                    className="block text-gray-600 hover:text-blue-500"
                    onClick={()=> setOpen(false)}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        )}
    </header>
  )
}
export default Header
