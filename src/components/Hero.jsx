// import React from "react";

// const Hero = () => {
// 	return (
// 		<section
// 			className="relative w-full min-h-screen flex items-center justify-between px-20 text-gray-800 overflow-hidden"
// 			style={{
// 				backgroundImage: "url('/assets/BG-texture.png'), url('/assets/BG.png')",
// 				backgroundBlendMode: "overlay",
// 				backgroundSize: "cover",
// 				backgroundPosition: "center",
// 			}}
// 		>
// 			{/* Left Section - Logo + Mandala */}
// 			<div className="flex flex-col items-center justify-center w-1/2 relative">
// 				<img
// 					src="/assets/Hero_Mandala.png"
// 					alt="Mandala Background"
// 					className="absolute w-[565px] opacity-75 select-none"
// 				/>
// 				<img
// 					src="/assets/logo.png"
// 					alt="V Films Logo"
// 					className="relative w-[388px]"
// 				/>
// 			</div>

// 			{/* Right Section - Tagline + Description */}
// 			<div className="absolute top-[234px] left-[897px] flex flex-col w-[825px] items-center">
// 				<h2
// 					className="italic font-['Island_Moments'] text-[100px]  mb-12 h-[230px] text-center"
// 					style={{
// 						color: "rgba(15, 50, 85, 1)",
// 						fontWeight: 400,
// 					}}
// 				>
// 					Varnan is where stories find <br /> their voice and form
// 				</h2>

// 				<p className="text-[#C65B28] text-[34px] font-normal font-['Halant'] mb-11">
// 					Films . Brands . Art
// 				</p>

// 				<p className="text-gray-700 text-[18px] w-[487px] h-[147px] font-['Instrument_Sans'] font-normal text-center">
// 					Since 2009, V've been telling stories – stories of people, their
// 					journeys, and the places that shape them. Some begin in polished
// 					boardrooms, others in humble village squares. But every story starts
// 					the same way – by listening with intention. V believes it takes trust,
// 					patience, and an eye for the unseen to capture what truly matters. V
// 					doesn't just tell stories – V honors them.
// 				</p>
// 			</div>
// 		</section>
// 	);
// };

// export default Hero;

import React from "react";

const Hero = () => {
	return (
		<section
			className="
        relative w-full min-h-screen
        px-6 md:px-12 lg:px-16 xl:px-20
        text-gray-800 overflow-hidden
        grid grid-cols-12 items-center
        "
			style={{
				backgroundImage: "url('/assets/BG-texture.png'), url('/assets/BG.png')",
				backgroundBlendMode: "overlay",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Left: Mandala + Logo */}
			{/* On very large screens we pin widths; on laptops/tablets it becomes fluid */}
			<div className="col-span-12 md:col-span-6 relative flex items-center justify-center py-12 md:py-0">
				<img
					src="/assets/Hero_Mandala.png"
					alt="Mandala Background"
					// scales smoothly with breakpoints
					className="absolute -translate-y-6 opacity-75 select-none
            w-[260px] sm:w-[340px] md:w-[460px] lg:w-[520px] xl:w-[565px]"
					style={{ pointerEvents: "none" }}
				/>

				<img
					src="/assets/logo.png"
					alt="V Films Logo"
					className="relative
            w-[180px] sm:w-[240px] md:w-[320px] lg:w-[360px] xl:w-[388px]"
				/>
			</div>

			{/* Right: Tagline + Description */}
			{/* Grid placement preserves 1920px desktop layout at 2xl while being fluid below */}
			<div
				className={`
          col-span-12 md:col-span-6
          flex flex-col items-center text-center
          py-8 md:py-0
          px-4
          md:px-6 lg:px-8
          2xl:col-start-8 2xl:col-span-5 2xl:justify-start 2xl:items-start 2xl:text-left
        `}
			>
				<h2
					className="font-['Island_Moments'] italic mb-6 md:mb-8 leading-tight"
					style={{
						color: "rgba(15, 50, 85, 1)",
						fontWeight: 400,
						// clamp: min 38px, fluid by vw, max 100px (preserves desktop size)
						fontSize: "clamp(38px, 4.6vw, 100px)",
					}}
				>
					{/* keep a hard break on medium+ to preserve original linebreaks; on tiny screens it flows */}
					<span className="inline-block">
						Varnan is where stories find
						<span className="hidden sm:inline-block">
							<br />
						</span>
						<span className="sm:ml-0">their voice and form</span>
					</span>
				</h2>

				<p
					className="font-['Halant'] mb-6"
					style={{
						color: "#C65B28",
						fontSize: "clamp(18px, 2.2vw, 34px)",
						marginBottom: "1.25rem",
					}}
				>
					Films . Brands . Art
				</p>

				<p
					className="font-['Instrument_Sans'] text-gray-700"
					style={{
						fontSize: "clamp(14px, 1.4vw, 18px)",
						maxWidth: "487px",
						lineHeight: 1.5,
					}}
				>
					Since 2009, V've been telling stories – stories of people, their
					journeys, and the places that shape them. Some begin in polished
					boardrooms, others in humble village squares. But every story starts
					the same way — by listening with intention. V believes it takes trust,
					patience, and an eye for the unseen to capture what truly matters. V
					doesn't just tell stories — V honors them.
				</p>
			</div>
		</section>
	);
};

export default Hero;
