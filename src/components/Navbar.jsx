import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <nav className="hover:bg-white">
      <div className="container mx-auto px-3">
        <div className="flex justify-between py-[21px]">
          <div className="grow-[0.5]">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <ul className="flex flex-row space-x-[22px]">
                <li>Living</li>
                <li>Bedroom Furniture</li>
                <li>Dining</li>
                <li>Kitchen</li>
                <li>Kids' Room</li>
                <li>SmartFit</li>
                <li>Institutional</li>
                <li>Door</li>
                <li>Interior</li>
                <li>Office</li>
                <li>More</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-row space-x-[17px]">
                <li>Search</li>
                <li>Cart</li>
                <li>Profile</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
