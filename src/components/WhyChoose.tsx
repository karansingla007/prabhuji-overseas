import Container from "./core/Container";

export default function WhyChoose() {
	const items = [
		"Career progression",
		"Transparent career journey and provides the support.",
		"Make long term decisions",
		"Provide a service we are proud of",
		"Be a responsible member of the community",
		"Always seek to improve",
	];

	return (
		<Container>
			<section aria-label="why choose" className="py-20">
				<div className="pl-4 md:pl-24 lg:pl-32">
					<p className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Why choose us?</p>

					<h3 className="mt-4 text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
						We Create Opportunity to Reach Potential.
					</h3>

					<div className="mt-8 max-w-2xl">
						<ul className="space-y-4">
							{items.map((it) => (
												<li key={it} className="flex items-start gap-4">
													<span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-amber-600">
														<svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
															<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.071 7.07a1 1 0 01-1.414 0L3.293 9.848a1 1 0 111.414-1.414L8 11.727l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
														</svg>
													</span>

													<span className="text-slate-700">{it}</span>
												</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</Container>
	);
}
