import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { textColorDarkMode } from "../components/ColorMode";
import { ExperienceItem } from '../components/DesignElements';

const SubjectColor = {
  ComputerScience: "bg-blue-600",
  ElectricalEngineering: "bg-pink-600",
  DataScience: "bg-purple-600",
  Business: "bg-red-600",
  Breadth: "bg-green-600"
};

const CourseItem = ({ courseTitle, courseType, courseLink }: { courseTitle: string, courseType: string, courseLink: string }) => {
  const courseItemStyle = `rounded-lg text-white font-bold p-5 text-center flex items-center justify-center`;
  return (
    <a href={courseLink} className={`${courseType} ${courseItemStyle}`} style={{ height: '100%' }}>{courseTitle}</a>
  );
};

export default function About() {
  return (
  <>
    <NavBar />
    <div className="px-10 lg:px-20 py-10 space-y-5">
        <div className="space-y-5">
            <h1 className={`text-4xl font-bold ${textColorDarkMode} space-y-5`}>Education</h1>
            <p className={textColorDarkMode}>During my university studies, I have/am taking courses in a variety of fields: Computer Science, Electrical Engineering, Data Science, Business, and more! For many of these courses, I have compiled notes/resources which have helped me/reflect my learning. Click on the course to access the resource!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10">
            <div className="flex flex-col space-y-2">
            <h3 className={`flex text-xl font-bold justify-center ${textColorDarkMode}`}>Freshman Year</h3>
            <CourseItem courseTitle="CS 61A: The Structure and Interpretations of Computer Programs" courseType={SubjectColor.ComputerScience} courseLink={"https://cs61a.org/"} />
            <CourseItem courseTitle="EECS 16A: Designing Information Systems and Devices I" courseType={SubjectColor.ElectricalEngineering} courseLink={"https://eecs16a.org"} />
            <CourseItem courseTitle="ANTHRO 3AC: Introduction to Social/Cultural Anthropology" courseType={SubjectColor.Breadth} courseLink={""} />
            <CourseItem courseTitle="CS 61B: Data Structures and Algorithms" courseType={SubjectColor.ComputerScience} courseLink={"https://inst.eecs.berkeley.edu/~cs61b/sp22/"} />
            <CourseItem courseTitle="Physics 7A: Mechanics" courseType={SubjectColor.ElectricalEngineering} courseLink={""} />
            <CourseItem courseTitle="UGBA 10: Introduction to Business" courseType={SubjectColor.Business} courseLink={"https://classes.berkeley.edu/content/ugba-10"} />
            <CourseItem courseTitle="SASIAN R5B: India in the Writer's Eye" courseType={SubjectColor.Breadth} courseLink={""} />
            </div>

            <div className="flex flex-col space-y-2">
            <h3 className={`flex text-xl font-bold justify-center ${textColorDarkMode}`}>Sophomore Year</h3>
            <CourseItem courseTitle="CS 70: Discrete Mathematics and Probability Theory" courseType={SubjectColor.ComputerScience} courseLink={"https://www.eecs70.org/"} />
            <CourseItem courseTitle="EECS 16B: Designing Information Systems and Devices II" courseType={SubjectColor.ElectricalEngineering} courseLink={"https://eecs16b.org/"} />
            <CourseItem courseTitle="DATA 8: Introduction to Data Science" courseType={SubjectColor.DataScience} courseLink={"https://www.data8.org/"} />
            <CourseItem courseTitle="Math 53: Multivariable Calculus" courseType={SubjectColor.ElectricalEngineering} courseLink={""} />
            <CourseItem courseTitle="CS 61C: Computer Architecture" courseType={SubjectColor.ComputerScience} courseLink={"https://cs61c.org/sp24/"} />
            <CourseItem courseTitle="Data 100: Principles and Techniques of Data Science" courseType={SubjectColor.DataScience} courseLink={"https://ds100.org/"} />
            </div>

            <div className="flex flex-col space-y-2">
            <h3 className={`flex text-xl font-bold justify-center ${textColorDarkMode}`}>Junior Year</h3>
            <CourseItem courseTitle="CS 180: Computer Vision" courseType={SubjectColor.ComputerScience} courseLink={"https://inst.eecs.berkeley.edu/~cs180/fa23/"} />
            <CourseItem courseTitle="CS 186: Database Systems Engineering" courseType={SubjectColor.ComputerScience} courseLink={"https://cs186berkeley.net/"} />
            <CourseItem courseTitle="EECS 127: Optimization Models in Engineering" courseType={SubjectColor.ElectricalEngineering} courseLink={"https://eecs127.github.io/"} />
            <CourseItem courseTitle="Physics 7B: Electricity and Magnetism" courseType={SubjectColor.ElectricalEngineering} courseLink={""} />
            <CourseItem courseTitle="CS 162: Operating Systems" courseType={SubjectColor.ComputerScience} courseLink={"https://cs162.org/"} />
            <CourseItem courseTitle="CS 161: Computer Security" courseType={SubjectColor.ComputerScience} courseLink={"https://sp24.cs161.org/"} />
            <CourseItem courseTitle="EE 120: Signals and Systems" courseType={SubjectColor.ElectricalEngineering} courseLink={"https://ee120-course-staff.github.io/"} />
            <CourseItem courseTitle="ASAMST 121: Chinese American History" courseType={SubjectColor.Breadth} courseLink={""} />
            </div>


            <div className="flex flex-col space-y-2">
            <h3 className={`flex text-xl font-bold justify-center ${textColorDarkMode}`}>Senior Year</h3>
            </div>

        </div>

        
        <div className='border-4 border-white rounded-lg flex justify-center items-center flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 p-5 justify-center'>
            <p className={`${textColorDarkMode} font-bold underline`}>Courses Key:</p>
            <p className='text-blue-600'>Computer Science</p>
            <p className='text-pink-600'>Electrical Engineering</p>
            <p className='text-purple-600'>Data Science</p>
            <p className='text-green-600'>Breadth</p>
            <p className='text-red-600'>Business</p>
        </div>

            
        <div className='flex flex-col space-y-10'>

            <div>
                <h2 className={`${textColorDarkMode} font-bold text-2xl`}>Teaching Experience</h2>
                <p className={textColorDarkMode}>In addition to taking these courses, I also have helped in the teaching of some of them:</p>
                <p className={textColorDarkMode}><strong>CS61A</strong>: The Structure and Interpretation of Computer Programs - Academic Intern (Lab Assistant)</p>
                <p className={textColorDarkMode}><strong>CS61B</strong>: Data Structures and Algorithms - Academic Intern (Lab Assistant)</p>
                <p className={textColorDarkMode}><strong>EECS 16A</strong>: Designing Information Systems and Devices I - Computer Science Mentor (Tutor)</p>
                <p className={textColorDarkMode}></p>
            </div>

            <div>
                <h2 className={`${textColorDarkMode} font-bold text-2xl`}>Extra Curriculars</h2> 
                <p>In addition to my teaching, research, and course work, I also actively participated in other extra-curriculars. Here are some of the leadership roles that I have held among numerous school clubs.  In addition, I have served as a general member in other societies (Berkeley IEEE, BERKE1337, etc.) and have engaged in recreational activities like intra-mural basketball as well!</p>

            </div>
        </div>

        <div className='flex flex-col space-y-10'>
                    <ExperienceItem experienceGroup={'Berkeley Netsys Lab'} experienceLogo={'https://avatars.githubusercontent.com/u/3665805?s=200&v=4'} experienceDate={'Aug. 2023 - Present'} jobTitle={'Undergraduate Researcher'} />  
                    <ExperienceItem experienceGroup={'Mobile Developers of Berkeley'} experienceLogo={'https://media.licdn.com/dms/image/D560BAQFkIzTSGscP-w/company-logo_200_200/0/1702857117367/mobile_developers_of_berkeley_logo?e=2147483647&v=beta&t=WKFr5u2OajfG55ygEnuOkmGifwp-DWu8ZDVr4tPbvrg'} experienceDate={'Aug. 2022 - Present'} jobTitle={'Product Manager and Developer'} />
                    <ExperienceItem experienceGroup={'Berkeley Engineering Student Council'} experienceLogo={'https://scontent.fsac1-2.fna.fbcdn.net/v/t39.30808-1/327145660_2905952832868293_3701186338987653282_n.png?stp=dst-png_p480x480&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1m5Gr2KZC7YAX9cM3Rs&_nc_ht=scontent.fsac1-2.fna&oh=00_AfCEq7fZ-tc62Miht4ZDqU40Xb2YvlL2XEQ8Uv7ZyVL7zg&oe=6605ACD2'} experienceDate={'Aug. 2021 - May 2023'} jobTitle={'Technical Director'} />

                    <ExperienceItem experienceGroup={'Associated Students of the University of California (ASUC)'} experienceLogo={'https://scontent.fsac1-2.fna.fbcdn.net/v/t39.30808-1/272373771_313819367457026_197931853944096553_n.png?stp=dst-png_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0PSrDiswgfUAX8Y9MgX&_nc_ht=scontent.fsac1-2.fna&oh=00_AfAXnwp-uJsY4GhZBNYm-081zccK3MQaYlEZV8U1_1GlUg&oe=66052C9A'} experienceDate={'Aug. 2021 - May 2022'} jobTitle={'Engineering Department Associate'} />

        </div>
    </div>

    <Footer />

    </>
  );
}

