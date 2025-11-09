import React from "react";

const AboutUs = () => {
	return (
		<section
			className="relative w-full h-screen overflow-hidden"
			style={{
				backgroundImage: "url('/assets/BG-texture.png'), url('/assets/BG.png')",
				backgroundBlendMode: "overlay",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Mobile & Tablet */}
			<div className="lg:hidden w-full h-full overflow-y-auto px-4 sm:px-6 py-8 sm:py-12">
				<div className="text-center mb-8">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-['Halant'] font-semibold mb-3 sm:mb-4 px-2">
						A montage of familiar faces and names.
					</h2>
					<p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto px-2">
						Some stories come from the biggest names. Others begin with bold,
						rising voices. We've been fortunate to walk alongside both —
						listening, creating, and building stories that matter.
					</p>
				</div>

				{/* Stats Cards (Overlapping Style) */}
				<div className="flex justify-center mb-10">
					<div className="flex">
						{[
							["85+", "Projects"],
							["50+", "Happy Clients"],
							["10+", "Experts Team"],
						].map(([num, label], i) => (
							<div
								key={label}
								className={`bg-yellow-100 p-5 md:p-6 rounded-lg shadow-lg w-[120px] sm:w-[150px] md:w-[160px] rotate-[8deg] ${
									i < 2 ? "-mr-6 sm:-mr-8 md:-mr-10" : ""
								}`}
							>
								<div className="text-3xl md:text-4xl font-bold text-[#103255] mb-1">
									{num}
								</div>
								<div className="text-[#FF6B35] font-medium text-sm md:text-base">
									{label}
								</div>
							</div>
						))}
					</div>
				</div>

				<p className="italic font-['Island_Moments'] text-lg sm:text-xl md:text-2xl text-center text-[#213547] max-w-lg mx-auto leading-relaxed mb-8">
					Every project is more than just a brief — it's a new chapter waiting
					to be written. Together, we've crafted tales that inspire, connect,
					and endure.
				</p>

				{/* Circular Text + Mountain */}
				<div className="relative flex justify-center">
					<div className="relative w-[80%] max-w-[400px] flex justify-center items-center mx-auto">
						<img
							src="/assets/Group_10.png"
							alt="Circular Text"
							className="w-full opacity-80"
						/>
						<img
							src="/assets/OBJECTS.png"
							alt="Mountain"
							className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[58%] sm:w-[60%] opacity-90"
						/>
					</div>
				</div>
			</div>

			{/* Desktop */}
			<div className="hidden lg:flex relative w-full h-full px-[5vw]">
				{/* Left Section */}
				<div className="flex flex-col justify-center flex-1 relative">
					<h2 className="font-['Halant'] font-semibold text-[clamp(28px,2.3vw,40px)] max-w-[34vw] leading-tight mb-6">
						A montage of familiar faces and names.
					</h2>
					<p className="text-gray-700 text-[clamp(16px,1.1vw,22px)] font-['Instrument_Sans'] leading-relaxed max-w-[32vw] mb-10">
						Some stories come from the biggest names. Others begin with bold,
						rising voices. We've been fortunate to walk alongside both —
						listening, creating, and building stories that matter.
					</p>

					{/* Stats Cards (Square + Slightly Overlapping, Responsive) */}
					<div className="flex flex-wrap items-start font-['Instrument_Sans'] gap-0 mt-[2vh]">
						{[
							["85+", "Projects"],
							["50+", "Happy Clients"],
							["10+", "Experts Team"],
						].map(([num, label], i) => (
							<div
								key={label}
								className={`bg-yellow-100 shadow-lg rotate-[8deg] relative flex flex-col items-center justify-center rounded-xl transition-transform duration-300 ${
									i < 2 ? "-mr-[2vw]" : ""
								}`}
								style={{
									width: "clamp(180px, 11vw, 230px)",
									aspectRatio: "1 / 1", // perfect square, scales naturally
									boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.15)",
									zIndex: 10 + i * 5,
								}}
							>
								<div
									className="text-[rgba(16,50,85,1)] font-bold"
									style={{
										fontSize: "clamp(42px, 3.8vw, 70px)",
										lineHeight: "1",
									}}
								>
									{num}
								</div>
								<div
									className="text-[#FF6B35] font-medium mt-2"
									style={{
										fontSize: "clamp(15px, 1.1vw, 22px)",
									}}
								>
									{label}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Right Section */}
				<div className="flex flex-col justify-center items-center flex-1 relative">
					<p className="italic font-['Island_Moments'] text-[#213547] text-[clamp(28px,3.5vw,64px)] leading-snug text-center max-w-[40vw] mb-[2vh]">
						Every project is more than just a brief — it's a new chapter waiting
						to be written.
					</p>
					<p className="italic font-['Island_Moments'] text-[#213547] text-[clamp(28px,3.5vw,64px)] leading-snug text-center max-w-[40vw]">
						Together, we've crafted tales that inspire, connect, and endure.
					</p>

					{/* Circular Text + Mountain */}
					<div className="relative w-[65%] max-w-[600px] mt-[4vh]">
						<img
							src="/assets/Group_10.png"
							alt="Circular Text"
							className="w-full opacity-90"
						/>
						<img
							src="/assets/OBJECTS.png"
							alt="Mountain"
							className="absolute bottom-[5%] left-[20%] w-[60%] opacity-95"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
