import React from "react";

const AboutTeam = () => {
	return (
		<section
			className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center"
			style={{
				backgroundImage: "url('/assets/BG-texture.png'), url('/assets/BG.png')",
				backgroundBlendMode: "overlay",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Mobile Layout (< 1024px) */}
			<div className="lg:hidden w-full h-full overflow-y-auto px-6 py-8">
				{/* Sticky Note - Mobile */}
				<div className="relative mx-auto mb-8 rotate-[-3deg] shadow-lg max-w-md">
					<img
						src="/assets/note.png"
						alt="Note background"
						className="w-full"
					/>
					<div className="absolute inset-0 p-4 sm:p-6 md:p-8 font-serif text-xs sm:text-sm leading-relaxed text-[#2a2a2a] overflow-hidden">
						<p className="break-words">
							Some craft films. Some build brands. Some curate art. We bring it
							all together — a collective of storytellers driven by one belief:
							every project deserves to be more than just a message; it should
							become a masterpiece.
						</p>
						<p className="mt-2 sm:mt-3 break-words">
							From first spark to final frame, from raw ideas to timeless
							visuals — we shape stories that stay with you.
						</p>
					</div>
					<img
						src="/assets/paperclip.png"
						alt="Paperclip"
						className="absolute -top-3 right-4 w-8 rotate-[10deg]"
					/>
				</div>

				{/* Team Roles - Mobile Stack */}
				<div className="space-y-8 mb-8">
					<div className="text-center">
						<img
							src="/assets/Vector3.svg"
							alt=""
							className="w-24 mx-auto mb-2"
						/>
						<p className="italic text-[#1c3552] text-2xl">Film Makers</p>
					</div>

					<div className="text-center">
						<img
							src="/assets/Vector2.svg"
							alt=""
							className="w-20 mx-auto mb-2"
						/>
						<p className="italic text-[#1c3552] text-2xl">Art Curators</p>
					</div>

					<div className="text-center">
						<img
							src="/assets/Vector.svg"
							alt=""
							className="w-32 mx-auto mb-2"
						/>
						<p className="italic text-[#1c3552] text-2xl">Branding Experts</p>
					</div>
				</div>

				{/* Silhouettes - Mobile */}
				<div className="mb-8">
					<img
						src="/assets/silhouettes.svg"
						alt="Team silhouettes"
						className="w-full max-w-md mx-auto"
					/>
				</div>

				{/* India Gate - Mobile */}
				<div className="mb-8">
					<img
						src="/assets/India_Gate.svg"
						alt="India Gate"
						className="w-full max-w-sm mx-auto"
					/>
				</div>

				{/* Tagline + Button - Mobile */}
				<div className="text-center pb-8">
					<h2 className="text-2xl text-[#3a2b25] leading-tight mb-4">
						Take a closer look at the stories V bring to life.
					</h2>
					<button className="bg-[#e76f51] text-white px-6 py-2.5 rounded-full shadow-md hover:opacity-90 transition">
						View Portfolio
					</button>
				</div>
			</div>

			{/* Desktop Layout (≥ 1024px) - Original Horizontal Design */}
			<div className="hidden lg:block w-full h-full">
				{/* Sticky Note */}
				<div
					className="absolute shadow-lg"
					style={{
						top: "2.08vh",
						left: "8.9vw",
						transform: "rotate(-6deg)",
						width: "min(23.4vw, 450px)",
					}}
				>
					<img
						src="/assets/note.png"
						alt="Note background"
						className="w-full"
					/>
					<div
						className="absolute inset-0 font-serif leading-relaxed text-[#2a2a2a] overflow-hidden"
						style={{
							padding: "clamp(16px, 1.67vw, 32px)",
							fontSize: "clamp(11px, 0.83vw, 16px)",
						}}
					>
						<p className="break-words">
							Some craft films. Some build brands. Some curate art. We bring it
							all together — a collective of storytellers driven by one belief:
							every project deserves to be more than just a message; it should
							become a masterpiece.
						</p>
						<p className="mt-2 sm:mt-3 lg:mt-4 break-words">
							From first spark to final frame, from raw ideas to timeless
							visuals — we shape stories that stay with you.
						</p>
					</div>
					<img
						src="/assets/paperclip.png"
						alt="Paperclip"
						className="absolute rotate-[10deg]"
						style={{
							top: "-1.67vh",
							right: "1.25vw",
							width: "min(2.08vw, 40px)",
						}}
					/>
				</div>

				{/* India Gate */}
				<div
					className="absolute flex flex-col items-center"
					style={{
						bottom: "11.67vh",
						left: "6.67vw",
						width: "min(23vw, 442px)",
					}}
				>
					<img
						src="/assets/India_Gate.svg"
						alt="India Gate"
						className="w-full"
					/>
				</div>

				{/* Silhouettes */}
				<div
					className="absolute flex flex-col items-center"
					style={{
						top: "35.52vh",
						left: "49.9vw",
						width: "min(33.73vw, 647.64px)",
					}}
				>
					<img
						src="/assets/silhouettes.svg"
						alt="Team silhouettes"
						className="w-full"
					/>
				</div>

				{/* Film Makers */}
				<img
					src="/assets/Vector3.svg"
					alt=""
					className="absolute"
					style={{
						width: "min(7.89vw, 151.5px)",
						top: "23.85vh",
						left: "57.66vw",
					}}
				/>
				<p
					className="absolute italic text-[#1c3552] whitespace-nowrap"
					style={{
						top: "17.5vh",
						left: "52.5vw",
						fontSize: "clamp(20px, 2.19vw, 42px)",
					}}
				>
					Film Makers
				</p>

				{/* Art Curators */}
				<img
					src="/assets/Vector2.svg"
					alt=""
					className="absolute"
					style={{
						width: "min(5.36vw, 102.93px)",
						top: "35.73vh",
						left: "85.83vw",
					}}
				/>
				<p
					className="absolute italic text-[#1c3552] whitespace-nowrap"
					style={{
						top: "28.44vh",
						left: "87.66vw",
						fontSize: "clamp(20px, 2.19vw, 42px)",
					}}
				>
					Art Curators
				</p>

				{/* Branding Experts */}
				<img
					src="/assets/Vector.svg"
					alt=""
					className="absolute"
					style={{
						width: "min(10.31vw, 197.99px)",
						top: "52.39vh",
						left: "36.06vw",
					}}
				/>
				<p
					className="absolute italic text-[#1c3552] whitespace-nowrap"
					style={{
						top: "calc(52.39vh + min(10.31vw, 197.99px) + 8px)",
						left: "28.39vw",
						fontSize: "clamp(20px, 2.19vw, 42px)",
					}}
				>
					Branding Experts
				</p>

				{/* Tagline + Button */}
				<div
					className="absolute text-center"
					style={{
						top: "87.29vh",
						left: "46.41vw",
					}}
				>
					<h2
						className="text-[#3a2b25]"
						style={{
							fontSize: "clamp(24px, 2.08vw, 40px)",
						}}
					>
						Take a closer look at the stories V bring to life.
					</h2>
					<button
						className="mt-4 bg-[#e76f51] text-white rounded-full shadow-md hover:opacity-90 transition"
						style={{
							padding: "0.83vh 1.25vw",
							fontSize: "clamp(14px, 0.83vw, 16px)",
						}}
					>
						View Portfolio
					</button>
				</div>
			</div>
		</section>
	);
};

export default AboutTeam;
