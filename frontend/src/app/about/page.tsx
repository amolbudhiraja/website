import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { textColorDarkMode, linkFormat } from "../components/ColorMode";
import { ExperienceItem } from "../components/DesignElements";

export default function About() {
  return (
    <>

      <NavBar />
      
      <div className="px-10 lg:px-20">
        <div className="space-y-5">
          <h1 className={`${textColorDarkMode} text-2xl font-bold`}>About Me</h1>
          <p className={textColorDarkMode}>Here are some of my interests and passions:</p>
          
          <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-14">
            <h3 className={`${textColorDarkMode} text-lg font-bold`}>Hobbies</h3>
            <p>I am a huge fan of sports and working out! My teams are the <a href="https://www.nba.com/kings/" className={linkFormat}>Sacramento Kings</a> (NBA), <a href="https://www.49ers.com/" className={linkFormat}>San Francisco 49ers</a> (NFL), <a href="https://www.redbullracing.com/int-en" className={linkFormat}>Red Bull Racing</a>  (F1), and the <a href="https://www.mlb.com/giants" className={linkFormat}>San Francisco Giants</a>  (MLB).</p>
          </div>

          <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
            <h3 className={`${textColorDarkMode} text-lg font-bold`}>Experiences</h3>
            <div className="flex flex-col space-y-5">
              <p>As a student, I am always looking for ways to learn new technologies, frameworks, and languages. Through clubs, internships, and research, I have developed my skills and adopted new tools.</p>
              <div className="space-y-5">
                <ExperienceItem experienceGroup="Berkeley Netsys Lab" experienceLogo="https://avatars.githubusercontent.com/u/3665805?s=200&v=4" experienceDate="Aug. 2023 - Present" jobTitle="Undergraduate Researcher" />
                <ExperienceItem experienceGroup="Mobile Developers of Berkeley" experienceLogo="https://media.licdn.com/dms/image/D560BAQFkIzTSGscP-w/company-logo_200_200/0/1702857117367/mobile_developers_of_berkeley_logo?e=2147483647&v=beta&t=WKFr5u2OajfG55ygEnuOkmGifwp-DWu8ZDVr4tPbvrg" experienceDate="Jan. 2022 - Present" jobTitle="Product Manager and Developer" />
                <ExperienceItem experienceGroup="Apple" experienceLogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJdjjHvLSgMDUjw550FNgGNRGNof4WxZphbP7Vklidg&s" experienceDate="May 2023 - Aug. 2023" jobTitle="Software Engineer Intern" />
                <ExperienceItem experienceGroup="Alecto AI" experienceLogo="https://pbs.twimg.com/profile_images/1461575299188260864/lhR6VxI1_400x400.jpg" experienceDate="Jan. 2023 - May 2023" jobTitle="Software Engineer Intern" />
                <ExperienceItem experienceGroup="Sacramento Municipal Utitlies District" experienceLogo="https://play-lh.googleusercontent.com/A2yO1fux_NiKf7Z8CxDSguSmVitwnQLyhgP0u_sMNsAq0pxYoNbjVNr4lgIbDyUFMYTT=w240-h480-rw" experienceDate="Jun. 2022 - Sep. 2022" jobTitle="Software Engineer Intern" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  );
}

