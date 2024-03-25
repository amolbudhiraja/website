import { textColorDarkMode } from "./ColorMode";
import Image from "next/image";

/** Horizontal, Resume-like Experience Item. */
export const ExperienceItem = ({experienceGroup, experienceLogo, experienceDate, jobTitle}: {experienceGroup: string, experienceLogo: string, experienceDate: string, jobTitle: string}) => {
    return (
      <div className="flex flex-row space-x-5">
      <Image alt={`${experienceGroup} Logo`} className="rounded-full" src={experienceLogo} width={75} height={75} objectFit="cover"/>
      <div className="flex flex-col w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <p className={`${textColorDarkMode} font-bold`}>{experienceGroup}</p>
          <p className={`lg:px-10`}>{experienceDate}</p>
        </div>
        <p className={`${textColorDarkMode}`}>{jobTitle}</p>
      </div>
    </div>
    ); 
  }

/** Card Element Styling. */
export const cardClass = `bg-gray-600 p-10 m-2 rounded-2xl flex flex-col justify-between min-h-full`;
