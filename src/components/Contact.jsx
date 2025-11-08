export default function Contact() {
	return (
		<section
			className="relative min-h-screen bg-cover bg-center overflow-hidden"
			style={{
				backgroundImage: "url('/assets/BG-texture.png'), url('/assets/BG.png')",
				backgroundBlendMode: "overlay",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Ornamental Vectors */}
			<img
				src="/assets/Footer-Vector.png"
				alt="decorative pattern"
				className="absolute top-0 right-0 w-[570px] pointer-events-none select-none"
			/>
			<img
				src="/assets/Footer-Vector.png"
				alt="decorative pattern"
				className="absolute bottom-0 left-0 rotate-180 w-[570px] pointer-events-none select-none"
			/>

			{/* Text Block */}
			<div className="absolute top-[467px] left-[210px] w-[600px] h-[145px] text-[24px] leading-[100%] text-black font-['Instrument_Sans'] font-normal opacity-100 z-10">
				<p>
					Whether you have an idea, a question, or simply want to explore how V
					can work together, V're just a message away. Let's catch up over
					coffee. Great stories always begin with a good conversation.
				</p>
			</div>

			{/* Contact Form Frame */}
			<div className="absolute top-[200px] left-[1010px] w-[700px] h-[679.4px] z-10 flex flex-col items-center justify-start p-10 gap-[80px]">
				{/* Title */}
				<div className="w-full flex flex-col h-[104px] items-center justify-center gap-[12px]">
					<h2 className="h-[63px] text-[40px] text-gray-800 font-[Halant] font-normal leading-none">
						Join the Story
					</h2>
					<p className="h-[29px] text-[24px] text-gray-700 font-['Instrument_Sans']">
						Ready to bring your vision to life? Let's talk.
					</p>
				</div>

				{/* Form */}
				<form className="flex flex-col gap-[20.1px] w-[700px] h-[375.4px]">
					<input
						type="text"
						name="name"
						placeholder="Your name"
						className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
					/>
					<input
						type="email"
						name="email"
						placeholder="Your email"
						className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
					/>
					<input
						type="tel"
						name="phone"
						placeholder="Phone"
						className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
					/>
					<textarea
						name="message"
						placeholder="Your message"
						className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 min-h-[100px]"
					></textarea>

					<button
						type="submit"
						className="mt-3 bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition-all"
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
}
