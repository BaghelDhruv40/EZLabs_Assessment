import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav
			className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 h-[80px] sm:h-[90px] lg:h-[103px] backdrop-blur-sm z-50 "
			style={{
				backgroundColor: "rgba(253, 245, 240, 0.25)",
			}}
		>
			{/* Left Section - Logo */}
			<div className="flex items-center w-[90px] sm:w-[110px] md:w-[124px]">
				<img
					src="/assets/logo.png"
					alt="SharShelf Logo"
					className="w-full h-auto object-contain"
				/>
			</div>

			{/* Center Section - Links */}
			{menuOpen && (
				<div
					className={`absolute right-[20px] sm:right-[50px] md:right-[70px] lg:right-[90px] mt-[100px] sm:mt-[110px] lg:mt-0 flex items-center justify-end  lg:bg-transparent transition-all duration-500 z-[40] rounded-xl lg:rounded-none p-4 lg:p-0 backdrop-blur-md lg:backdrop-blur-0 shadow-md lg:shadow-none ${
						menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
					}`}
				>
					<ul className="flex flex-col lg:flex-row items-end lg:items-center gap-4 lg:gap-8 text-black text-base sm:text-lg font-medium">
						<li className="hover:text-blue-300 cursor-pointer relative group">
							<Link
								to="hero"
								containerId="scrollContainer"
								smooth={true}
								duration={700}
								horizontal={true}
								onClick={() => setMenuOpen(false)}
							>
								Services
							</Link>
							<span className="absolute bottom-[-4px] right-0 w-0 group-hover:w-full border-b border-dotted border-blue-400 transition-all duration-300"></span>
						</li>

						<li className="hover:text-blue-300 cursor-pointer relative group">
							<Link
								to="aboutTeam"
								containerId="scrollContainer"
								smooth={true}
								duration={700}
								horizontal={true}
								onClick={() => setMenuOpen(false)}
							>
								Their Stories
							</Link>
							<span className="absolute bottom-[-4px] right-0 w-0 group-hover:w-full border-b border-dotted border-blue-400 transition-all duration-300"></span>
						</li>

						<li className="hover:text-blue-300 cursor-pointer relative group">
							<Link
								to="aboutUs"
								containerId="scrollContainer"
								smooth={true}
								duration={700}
								horizontal={true}
								onClick={() => setMenuOpen(false)}
							>
								Our Story
							</Link>
						</li>

						<li className="hover:text-blue-300 cursor-pointer">
							<Link
								to="contact"
								containerId="scrollContainer"
								smooth={true}
								duration={700}
								horizontal={true}
								onClick={() => setMenuOpen(false)}
							>
								Varnan
							</Link>
						</li>

						<li>
							<Link
								to="contact"
								containerId="scrollContainer"
								smooth={true}
								duration={700}
								horizontal={true}
								onClick={() => setMenuOpen(false)}
							>
								<button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-5 py-2 rounded-full flex items-center gap-2 transition">
									Let’s Talk
									<img
										src="/assets/mail.svg"
										alt="Mail Icon"
										className="w-4 h-4"
									/>
								</button>
							</Link>
						</li>
					</ul>
				</div>
			)}

			{/* Right Section - Menu Icon */}
			<div className="flex items-center z-[60]">
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className="text-white hover:text-gray-300 transition w-[42px] sm:w-[46px] md:w-[50px] h-[42px] sm:h-[46px] md:h-[50px] flex items-center justify-center"
					aria-label={menuOpen ? "Close menu" : "Open menu"}
				>
					<img
						src={menuOpen ? "/assets/Open.svg" : "/assets/Menu.svg"}
						alt={menuOpen ? "Close Menu" : "Open Menu"}
						className="w-[26px] sm:w-[30px] md:w-[32px] h-[26px] sm:h-[30px] md:h-[32px] transition-all duration-300"
					/>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
