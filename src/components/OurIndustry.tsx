import Image from "next/image";
import Container from "./core/Container";

export default function OurIndustry() {
	const leftServices = ["Study Visa", "Investor Visa", "Immigration Service", "Air Tickets"];
	const rightServices = ["Tourist Visa", "Work Permit", "Academic Service"];

	return (
		<Container>
			<section aria-label="our industry" className="py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
					{/* left image */}
					<div>
						<Image
							src="/images/logo.png"
							alt="person holding globe and passport"
							width={840}
							height={720}
							className="w-full h-[560px] object-cover rounded-sm"
							priority
						/>
					</div>

					{/* right content */}
					<div className="relative">
						<h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
							Our Industry-Explicit
							<br />
							Competence
						</h2>

						<p className="mt-6 text-slate-500 max-w-lg">
							we are dedicated to guiding you through every step of the immigration process with expertise and care. Whether you are looking to obtain a visa, permanent residency, or citizenship, our team of experienced professionals provides personalized services tailored to your unique situation.
						</p>

						{/* overlapping amber box */}
						<div className="mt-8 md:mt-12">
							<div className="relative md:absolute md:-left-44 md:top-28 z-20">
								{/* red folded corner (rotated square) */}
								<div className="absolute -left-6 -top-6 w-8 h-8 bg-red-700 rotate-45 transform" aria-hidden />

								<div className="bg-amber-600 text-white p-6 md:p-8 rounded-tr-lg rounded-br-[80px] rounded-bl-lg rounded-tl-lg shadow-md w-[320px] md:w-[640px]">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<ul className="space-y-4">
											{leftServices.map((s) => (
												<li key={s} className="flex items-center gap-3">
													<span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-50 text-amber-700">
														<svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
															<circle cx="10" cy="10" r="8" />
															<path d="M6.5 10.5l2 2 5-5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
													<span className="text-white font-medium">{s}</span>
												</li>
											))}
										</ul>

										<ul className="space-y-4">
											{rightServices.map((s) => (
												<li key={s} className="flex items-center gap-3">
													<span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-50 text-amber-700">
														<svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
															<circle cx="10" cy="10" r="8" />
															<path d="M6.5 10.5l2 2 5-5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
													<span className="text-white font-medium">{s}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Container>
	);
}

