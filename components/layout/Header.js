import HeaderLogo from '../HeaderLogo';

const Header = () => (
    <header className="z-50 w-full bg-white border-b border-gray-200">
        <div className="mx-auto h-20 p-4 flex flex-row">
            <HeaderLogo />
            <div className="ml-auto h-full flex flex-row">
                {/* Nav goes here */}
            </div>
        </div>
    </header>
);

export default Header;