import React from "react";

const AboutUs = () => {
	return (
		<section
			className="relative min-h-screen text-[#1B1B1B] bg-cover bg-center overflow-hidden"
			style={{
				backgroundImage: "url('/assets/BG-texture.png'), url('/assets/BG.png')",
				backgroundBlendMode: "overlay",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Desktop Layout - Hidden on mobile */}
			<div className="hidden lg:block relative w-full h-screen">
				{/* Main Heading */}
				<h2 className="absolute w-full max-w-[662px] top-[290px] left-[160px] text-[40px] font-['Halant'] font-normal ">
					A montage of familiar faces and names.
				</h2>

				{/* Description Text */}
				<p className="absolute top-[393px] left-[203px] max-w-[551px] text-gray-700  text-center text-[24px] front-normal font-['Instrument_Sans']">
					Some stories come from the biggest names. Others begin with bold,
					rising voices. <br />
					We've been fortunate to walk alongside both — listening, creating, and
					building stories that matter.
				</p>

				{/* Stats Cards */}
				<div className="absolute top-[646px] left-[120px] flex gap-[10px] font-['Instrument_Sans']">
					{/* Card 1 */}
					<div
						className="bg-yellow-100 p-8 shadow-lg w-[235px] h-[233px] rotate-[10deg] -mr-8 relative z-10 flex flex-col  items-center"
						style={{
							boxShadow: "0px 12px 40px 0px rgba(0, 0, 0, 0.15)",
						}}
					>
						<div className="w-[141px] h-[98px] text-[80px] text-[rgba(16,50,85,1)] mb-2">
							85+
						</div>
						<div className="w-[154px] h-[29px] text-[24px] text-[#FF6B35] font-normal ps-2">
							Projects
						</div>
					</div>

					{/* Card 2 */}
					<div
						className="bg-yellow-100 p-8 shadow-lg w-[235px] h-[233px] rotate-[10deg] -mr-8 relative z-20 flex flex-col items-center "
						style={{ boxShadow: "0px 12px 40px 0px rgba(0, 0, 0, 0.15)" }}
					>
						<div className="w-[141px] h-[98px] text-[80px] text-[rgba(16,50,85,1)] mb-2">
							50+
						</div>
						<div className="w-[154px] h-[29px] text-[24px] text-[#FF6B35] font-normal">
							Happy Clients
						</div>
					</div>

					{/* Card 3 */}
					<div
						className="bg-yellow-100 p-8 shadow-lg w-[235px] h-[233px] rotate-[10deg] relative z-30 flex flex-col  items-center"
						style={{ boxShadow: "0px 12px 40px 0px rgba(0, 0, 0, 0.15)" }}
					>
						<div className="w-[141px] h-[98px] text-[80px]  text-[rgba(16,50,85,1)] mb-2">
							10+
						</div>
						<div className="w-[154px] h-[29px] text-[24px] text-[#FF6B35] font-normal">
							Experts Team
						</div>
					</div>
				</div>

				{/* Right Section - Italic Quote */}
				<div className="absolute w-full max-w-[918px] top-[151px] left-[960px]">
					<p className="italic font-['Island_Moments'] text-[80px] leading-[1.2] text-[#213547]">
						Every project is more than just a brief — it's a new chapter waiting
						to be written.
					</p>
					<p className="italic font-['Island_Moments'] text-[80px] leading-[1.2] text-[#213547] mt-4">
						Together, we've crafted tales that inspire, connect, and endure.
					</p>
				</div>

				{/* Circular Text Overlay */}
				<img
					src="/assets/Group_10.png"
					alt="Circular Text"
					className="absolute top-[557px] left-[960px] w-[960.14px] opacity-90 pointer-events-none"
				/>

				{/* Mountain Illustration */}
				<img
					src="/assets/OBJECTS.png"
					alt="Mountain Illustration"
					className="absolute z-10 w-[596.87px] opacity-95 top-[700px] left-[1142px]"
				/>
			</div>

			{/* Mobile/Tablet Layout */}
			<div className="lg:hidden flex flex-col gap-12 px-8 py-16">
				<div className="text-center">
					<h2 className="text-3xl font-['Halant'] font-semibold mb-6">
						A montage of familiar faces and names.
					</h2>
					<p className="text-gray-700 leading-relaxed max-w-md mx-auto">
						Some stories come from the biggest names. Others begin with bold,
						rising voices. We've been fortunate to walk alongside both —
						listening, creating, and building stories that matter.
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-6">
					<div className="bg-[#FFF9E6] p-6 rounded-lg shadow-lg w-[150px]">
						<div className="text-4xl font-bold text-[#1B1B1B] mb-2">85+</div>
						<div className="text-[#FF6B35] font-medium">Projects</div>
					</div>
					<div className="bg-[#FFF9E6] p-6 rounded-lg shadow-lg w-[150px]">
						<div className="text-4xl font-bold text-[#1B1B1B] mb-2">50+</div>
						<div className="text-[#FF6B35] font-medium">Happy Clients</div>
					</div>
					<div className="bg-[#FFF9E6] p-6 rounded-lg shadow-lg w-[150px]">
						<div className="text-4xl font-bold text-[#1B1B1B] mb-2">10+</div>
						<div className="text-[#FF6B35] font-medium">Experts Team</div>
					</div>
				</div>

				<div className="text-center px-4">
					<p className="italic font-['Island_Moments'] text-3xl leading-relaxed text-[#213547]">
						Every project is more than just a brief — it's a new chapter waiting
						to be written. Together, we've crafted tales that inspire, connect,
						and endure.
					</p>
				</div>

				<div className="flex justify-center gap-6 flex-wrap opacity-60">
					<span className="text-2xl font-bold text-[#FF6B35]">TED</span>
					<span
						className="text-2xl font-bold text-[#FF9F66]"
						style={{ fontFamily: "cursive" }}
					>
						Coca Cola
					</span>
					<span className="text-2xl font-bold text-[#FF9F66]">PARKON</span>
				</div>

				{/* Mobile illustrations */}
				<div className="relative w-full h-64 mt-8">
					<img
						src="/assets/OBJECTS.png"
						alt="Mountain Illustration"
						className="absolute bottom-0 right-0 w-64 opacity-80"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
