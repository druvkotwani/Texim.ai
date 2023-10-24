import Logo from "./Logo"
const Navbar = () => {
    return (
        <nav className="flex p-0 px-[24px] justify-center items-start self-stretch ">
            <div className="flex w-[1200px] p-4 justify-center items-center">
                <div className="flex justify-between items-center flex-1">
                    <Logo />
                    <ul className="flex items-center gap-8">
                        <li className="text-brand-off-white text-base font-normal"><a href="/">Pricing</a></li>
                        <li className="text-brand-off-white text-base font-normal"><a href="/">Pricing</a></li>
                        <li className="text-brand-off-white text-base font-normal"><a href="/">Pricing</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar