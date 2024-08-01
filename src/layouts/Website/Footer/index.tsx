import React from "react";
import { Icon } from "@iconify/react";
import data from "../../../pages/Home/components/Hero/data.json";
import { Link } from "react-router-dom";

const WebsiteFooter: React.FC = () => {
  return (
    <footer className="bg-[#020000] border-t-primary-900 border-opacity-65 border-t mt-7 py-6">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl px-4 mx-auto gap-1">
        <div className="flex items-center gap-2 justify-center tracking-wides">
          {data.socials?.map((social, index) => (
            <React.Fragment key={index}>
              <Link
                to={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-1 text-primary hover:text-primary-500 transition-colors duration-300 tracking-widest"
              >
                <Icon icon={social.icon} className="text-2xl" />
              </Link>
            </React.Fragment>
          ))}
        </div>
        <p className="text-xs font-medium tracking-widest text-gray-400">
          Copyright &copy; Abdus Satter <span>{new Date().getFullYear()}</span>{" "}
          All rights Reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
