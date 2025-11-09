import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { Navbar, Hero, Contact, AboutTeam, AboutUs } from "./components";

export default function App() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [showLogo, setShowLogo] = useState(false);

	useEffect(() => {
		const scrollContainer = document.getElementById("scrollContainer");
		if (!scrollContainer) return;

		const handleScroll = () => {
			const scrollLeft = scrollContainer.scrollLeft;
			const scrollWidth =
				scrollContainer.scrollWidth - scrollContainer.clientWidth;

			setScrollProgress((scrollLeft / scrollWidth) * 100);

			// Toggle logo visibility once we've scrolled past 30% of first viewport
			setShowLogo(scrollLeft > window.innerWidth * 0.3);
		};

		handleScroll(); // run once on mount
		scrollContainer.addEventListener("scroll", handleScroll);
		return () => scrollContainer.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<Navbar showLogo={showLogo} />

			{/* Decorative slider (from previous version) */}
			<div
				className="fixed left-1/2 bottom-6 z-40 -translate-x-1/2 flex items-center justify-center"
				aria-hidden="true"
				style={{ width: "100%", pointerEvents: "none" }}
			>
				<div
					className="relative rounded-full overflow-hidden"
					style={{
						width: 300,
						height: 14,
						background: "rgba(248, 194, 181, 0.36)",
						boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
						pointerEvents: "none",
					}}
				>
					<div
						className="absolute left-0 top-0 h-full rounded-full transition-all duration-150 ease-linear"
						style={{
							width: `${Math.max(8, (scrollProgress / 100) * 300)}px`,
							background:
								"linear-gradient(90deg, rgba(244,148,110,0.95), rgba(243,178,151,0.95))",
							boxShadow: "0 2px 6px rgba(243,148,110,0.15)",
						}}
					/>
				</div>
			</div>

			<div
				id="scrollContainer"
				className="relative w-screen h-screen overflow-x-scroll overflow-y-hidden snap-x snap-mandatory flex scroll-smooth"
			>
				<Element
					name="hero"
					className="w-screen h-screen flex-shrink-0 snap-start"
				>
					<Hero />
				</Element>
				<Element
					name="aboutTeam"
					className="w-screen h-screen flex-shrink-0 snap-start"
				>
					<AboutTeam />
				</Element>
				<Element
					name="aboutUs"
					className="w-screen h-screen flex-shrink-0 snap-start"
				>
					<AboutUs />
				</Element>

				<Element
					name="contact"
					className="w-screen h-screen flex-shrink-0 snap-start"
				>
					<Contact />
				</Element>
			</div>
		</>
	);
}
