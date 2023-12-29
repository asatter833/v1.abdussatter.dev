import React from "react";
import data from "./data.json";
import { Link } from "react-router-dom";

console.log(data);

const Hero: React.FC = () => {
	return (
		<>
			<div className="px-2 flex flex-col items-center text-center justify-center gap-6 min-h-[85vh]">
				<div className="p-2 rounded-full border-4 border-primary-500 w-fit h-fit">
					<img
						src="/tam.jpg"
						className="max-w-[220px] w-[95vw] rounded-full"
					/>
				</div>
				<h1 className="text-2xl mt-8">
					Hi, I'm <span className="font-bold text-primary">{data.name}</span>
				</h1>
				<h2 className="text-4xl font-semibold max-w-md">{data.about}</h2>
				<div>
					{data.socials?.map((social, index) => (
						<React.Fragment key={index}>
							{index !== 0 && (
								<span className="text-slate-400 font-semibold">/</span>
							)}
							<Link
								to={social.url}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block text-primary 
                            font-semibold mx-2 hover:text-primary-500 transition-colors duration-300 tracking-widest"
							>
								{social.name}
							</Link>
						</React.Fragment>
					))}
				</div>
			</div>
		</>
	);
};

export default Hero;
