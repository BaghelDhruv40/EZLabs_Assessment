import { useState } from "react";
import { API_BASE_URL } from "../utils/constants";
import axios from "axios";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [success, setSuccess] = useState("");

	const validateEmail = (email) => {
		const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
		return emailRegex.test(email);
	};

	const validateForm = () => {
		const newErrors = {};
		if (!formData.email) newErrors.email = "Email is required";
		else if (!validateEmail(formData.email))
			newErrors.email = "Please enter a valid email address";

		if (!formData.message) newErrors.message = "Please write your message";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;
		try {
			const response = await axios.post(
				`${API_BASE_URL}/contact-us/`,
				formData
			);
			if (response.status === 200 || response.status === 201) {
				setSuccess("Form Submitted");
			}
		} catch (err) {
			console.error("Error:", err);
			setErrors((prev) => ({ ...prev, failed: "Failed to Submit Form.." }));
		}
		setFormData({ name: "", email: "", phone: "", message: "" });
	};

	return (
		<section
			className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
			style={{
				backgroundImage: "url('/assets/BG-texture.png'), url('/assets/BG.png')",
				backgroundBlendMode: "overlay",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Decorative vectors */}
			<img
				src="/assets/Footer-Vector.png"
				alt="decorative pattern"
				className="absolute top-0 right-0 w-[28vw] max-w-[570px] pointer-events-none select-none"
			/>
			<img
				src="/assets/Footer-Vector.png"
				alt="decorative pattern"
				className="absolute bottom-0 left-0 rotate-180 w-[28vw] max-w-[570px] pointer-events-none select-none"
			/>

			{/* Layout wrapper */}
			<div
				className="
          relative flex flex-col lg:flex-row items-center justify-center
          w-full max-w-[1500px] mx-auto px-6 lg:px-[5vw] gap-10 lg:gap-[8vw]
        "
			>
				{/* Text Block */}
				<div
					className="
            text-black font-['Instrument_Sans']
            text-[clamp(16px,1.3vw,22px)] leading-snug
            max-w-[600px] lg:text-left text-center
          "
				>
					<p>
						Whether you have an idea, a question, or simply want to explore how
						V can work together, V're just a message away. Let's catch up over
						coffee. Great stories always begin with a good conversation.
					</p>
				</div>

				{/* Contact Form */}
				<div
					className="
            flex flex-col items-center justify-start
            w-full sm:w-[90%] md:w-[70%] lg:w-[40%]
            z-10 gap-6
          "
				>
					{/* Title */}
					<div className="text-center lg:text-center">
						<h2 className="text-[clamp(28px,2.5vw,40px)] text-gray-800 font-[Halant] leading-none">
							Join the Story
						</h2>
						<p className="text-[clamp(16px,1.25vw,22px)] text-gray-700 font-['Instrument_Sans']">
							Ready to bring your vision to life? Let's talk.
						</p>
					</div>

					{/* Form */}
					<form
						onSubmit={handleSubmit}
						className="flex flex-col w-full gap-4 text-[16px]"
					>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Your name"
							className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
						/>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Your email*"
							className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
						/>
						{errors.email && (
							<p className="text-sm text-red-600">{errors.email}</p>
						)}
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							placeholder="Phone"
							className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
						/>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Your message*"
							className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 min-h-[100px]"
						></textarea>
						{errors.message && (
							<p className="text-sm text-red-600">{errors.message}</p>
						)}

						<div className="flex flex-col items-center lg:items-center">
							<button
								type="submit"
								className="w-[clamp(90px,5vw,130px)] mt-2 bg-orange-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-orange-600 transition-all"
							>
								Submit
							</button>
							{success ? (
								<p className="mt-2 text-sm text-green-600">{success}</p>
							) : (
								errors.failed && (
									<p className="mt-2 text-sm text-red-600">{errors.failed}</p>
								)
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
