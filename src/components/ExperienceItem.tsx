import React from "react";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaCalendar } from "react-icons/fa6";
import Link from "next/link";

interface IProps {
  company: string;
  position: string;
  contributions: string[];
  start: string;
  end?: string;
  companyWebsiteURL: string;
}

const ExperienceItem: React.FC<IProps> = (props): React.ReactElement => {
  const { company, position, contributions, start, end, companyWebsiteURL } =
    props;
  return (
    <div className="w-full my-8">
      <h2 className="text-xl font-semibold">{position}</h2>
      <h2 className="flex flex-row justify-start gap-1 items-center">
        <HiBuildingOffice2
          className="text-slate-600 dark:text-slate-400"
          size={22}
        />
        <Link
          className="text-blue-500 dark:text-blue-400 "
          href={companyWebsiteURL}
          target="_blank"
        >
          {`@${company}`}
        </Link>
      </h2>
      <div className="flex flex-row justify-start items-center gap-1 text-m ">
        <FaCalendar size={18} className="text-slate-600 dark:text-slate-400" />
        <span>{`${start} - ${end}`}</span>
      </div>
      <ul className="list-disc text-m text-slate-600 dark:text-slate-400 ">
        {contributions?.map((c, idx) => (
          <li className="text-justify" key={idx}>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
