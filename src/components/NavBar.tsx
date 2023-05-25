import logo from '../assets/logo.svg';

const NavBar = () => {
    const menus = [
        { id: 1, name: 'Pricing' },
        { id: 2, name: 'Product' },
        { id: 3, name: 'About Us' },
        { id: 4, name: 'Career' },
        { id: 5, name: 'Community' }
    ]
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex item-center justify-between">
                <div className="pt-2">
                    <img src={logo} />
                </div>
                <div className="hidden md:flex space-x-6">
                    {menus.map(menu =>
                        <a href="#"
                            key={menu.id}
                            className='hover:text-darkGrayishBlue'>{menu.name}
                        </a>)}
                </div>
                <a href="#"
                    className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                    Get Started
                </a>
            </div>
        </nav>
    )
}

export default NavBar