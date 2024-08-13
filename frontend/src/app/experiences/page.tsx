import { textColorDarkMode } from "../components/ColorMode";
import { ExperienceItem } from "../components/DesignElements";

export default function Experience() {
  return (
    <>
      <div id="experience" className="px-10 lg:px-20">
        <div className="space-y-5">
          <div className="flex flex-col">
            <h1 className={`${textColorDarkMode} text-4xl font-bold my-5`}>Experiences</h1>
            <div className="flex flex-col space-y-5">

                <ExperienceItem experienceGroup="Berkeley Netsys Lab" experienceLogo="https://avatars.githubusercontent.com/u/3665805?s=200&v=4" experienceDate="Aug. 2023 - Present" jobTitle="Undergraduate Researcher" description="My research is primarily focused on developing SpaceGPT, a large language model designed to simplify user interaction with IoT devices using natural language. SpaceGPT aims to extend the functionality of the existing digiSpace framework and provide a medium for no-code device programming for all users." />
                <ExperienceItem experienceGroup="Mobile Developers of Berkeley" experienceLogo="https://media.licdn.com/dms/image/D560BAQFkIzTSGscP-w/company-logo_200_200/0/1702857117367/mobile_developers_of_berkeley_logo?e=2147483647&v=beta&t=WKFr5u2OajfG55ygEnuOkmGifwp-DWu8ZDVr4tPbvrg" experienceDate="Jan. 2022 - Present" jobTitle="Product Manager and Developer" description="As a product manager and developer, I help lead the development of client projects from ideation to deployment. I have assisted on 4 client programs accross my 4 semesters in the club and have developed 6+ apps as a part of the club's intensive React Native training program and Techfair competition." />
                <ExperienceItem experienceGroup="Apple" experienceLogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJdjjHvLSgMDUjw550FNgGNRGNof4WxZphbP7Vklidg&s" experienceDate="May 2023 - Aug. 2023" jobTitle="Software Engineer Intern" description="I worked on creating computer vision algorithms and models for the Apple Vision Pro."/>
                <ExperienceItem experienceGroup="Alecto AI" experienceLogo="https://pbs.twimg.com/profile_images/1461575299188260864/lhR6VxI1_400x400.jpg" experienceDate="Jan. 2023 - May 2023" jobTitle="Software Engineer Intern" description="Designed and engineered the startup's real-time messaging and notification infastructure. Enhanced admin platform and optimzied facial recognition system." />
                <ExperienceItem experienceGroup="Sacramento Municipal Utitlies District" experienceLogo="https://play-lh.googleusercontent.com/A2yO1fux_NiKf7Z8CxDSguSmVitwnQLyhgP0u_sMNsAq0pxYoNbjVNr4lgIbDyUFMYTT=w240-h480-rw" experienceDate="Jun. 2022 - Sep. 2022" jobTitle="Software Engineer Intern" description="Created a meter data management system to manage the allocation of smart meters in homes and businesses using Flask. Connected the backends and frontends of various enterprise trading applications using Java Springboot and SQL Server."/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

