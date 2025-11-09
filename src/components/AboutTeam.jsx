import React from "react";

const AboutTeam = () => {
	return (
		<section
			className="relative w-full h-screen  overflow-hidden flex flex-col items-center justify-center"
			style={{
				backgroundImage: "url('/assets/BG-texture.png'), url('/assets/BG.png')",
				backgroundBlendMode: "overlay",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Sticky Note */}
			<div className="absolute top-[20px] left-[170.96px] rotate-[-6deg] shadow-lg">
				<img
					src="/assets/note.png"
					alt="Note background"
					className="w-[450px]"
				/>
				<div className="absolute inset-0 p-8 font-serif text-[16px] leading-relaxed text-[#2a2a2a]">
					<p>
						Some craft films. Some build brands. Some curate art. We bring it
						all together — a collective of storytellers driven by one belief:
						every project deserves to be more than just a message; it should
						become a masterpiece.
					</p>
					<p className="mt-4">
						From first spark to final frame, from raw ideas to timeless visuals
						— we shape stories that stay with you.
					</p>
				</div>
				<img
					src="/assets/paperclip.png"
					alt="Paperclip"
					className="absolute -top-4 right-6 w-10 rotate-[10deg]"
				/>
			</div>

			{/* India Gate */}
			<div className="absolute bottom-28 left-32 flex flex-col items-center">
				<img
					src="/assets/India_Gate.svg"
					alt="India Gate"
					className="w-[442px]"
				/>
			</div>

			{/* Silhouettes */}
			<div className="absolute right-[15%] flex flex-col items-center top-[341px] left-[958px]">
				<img
					src="/assets/silhouettes.svg"
					alt="Team silhouettes"
					className="w-[
647.64px], h-[397px]"
				/>
			</div>
			<img
				src="/assets/Vector3.svg"
				alt=""
				className="absolute w-[151.5px] h-[95.75px] top-[229px] left-[1107px]"
			/>
			<p className="absolute top-[168px] left-[1008px] italic text-[#1c3552] text-[42px]">
				Film Makers
			</p>
			<img
				src="/assets/Vector2.svg"
				alt=""
				className=" absolute w-[102.93px] h-[146px] top-[343px] left-[1648px]"
			/>
			<p className="absolute top-[273px] left-[1683px] italic text-[#1c3552] text-[42px] ">
				Art Curators
			</p>
			<img
				src="/assets/Vector.svg"
				alt=""
				className="absolute w-[197.99px] h-[226.44px] top-[502.97px] left-[692.45px]"
			/>
			<p className="absolute top-[749px] left-[545px] text-[42px] italic text-[#1c3552]">
				Branding Experts
			</p>

			{/* Tagline + Button */}
			<div className="absolute bottom-16 text-center top-[838px] left-[891px]">
				<h2 className="text-[40px] text-[#3a2b25]">
					Take a closer look at the stories V bring to life.
				</h2>
				<button className="mt-4 bg-[#e76f51] text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition">
					View Portfolio
				</button>
			</div>
		</section>
	);
};

export default AboutTeam;
