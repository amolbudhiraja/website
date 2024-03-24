import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaPython, FaGithub } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { cardClass } from '../components/DesignElements';

export default function About() {

  return (
    <>
      <NavBar />
      <div className="px-10 lg:px-20 py-10">
        <h1 className="text-2xl font-bold dark:text-white mb-5">My Projects</h1>
        <p className="dark:text-gray-300 mb-5">Throughout my career, I have created numerous projects that have helped apply my learnings from my classes, explore new technologies, and create impactful projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Project 1 */}
          <div className={cardClass}>
            <div>
              <h3 className="text-lg font-bold">Neural Style Transfer</h3>
              <p>An implementation of the paper: A Neural Algorithm of Artistic Style</p>
            </div>
            <div className="flex flex-row space-x-2 mt-4">
              <div className="p-2 bg-white rounded-lg text-blue-600"><FaPython /></div>
              <div className="p-2 bg-white rounded-lg text-red-600"><SiPytorch /></div>
            </div>
            <a href="https://github.com/amolbudhiraja/styletransfer" className="flex flex-row items-center space-x-1 mt-4">
              <div className="text-green-200"><FaGithub /></div>
              <p>Github</p>
            </a>
          </div>

          {/* Project 2 */}
          <div className={cardClass}>
            <div>
              <h3 className="text-lg font-bold">Neural Radiance Fields</h3>
              <p>An implementation of the original Neural Radiance Fields (NeRF) paper.</p>
            </div>
            <div className="flex flex-row space-x-2 mt-4">
              <div className="p-2 bg-white rounded-lg text-blue-600"><FaPython /></div>
              <div className="p-2 bg-white rounded-lg text-red-600"><SiPytorch /></div>
            </div>
              <a href="https://inst.eecs.berkeley.edu/~cs180/fa23/upload/files/proj5/abudhiraja/project5/" className="flex flex-row items-center space-x-1 mt-4">
              <div className="text-red-400"><CgWebsite /></div>
              <p>Website</p>
            </a>
          </div>

          {/* Project 3 */}
          <div className={cardClass}>
            <div>
              <h3 className="text-lg font-bold">Sudoku Solver</h3>
              <p>C++ application that uses computer vision to solve any Sudoku Board.</p>
            </div>
            <div className="flex flex-row space-x-2 mt-4">
              <div className="p-2 bg-white rounded-lg text-blue-600"><FaPython /></div>
              <div className="p-2 bg-white rounded-lg text-red-600"><SiPytorch /></div>
            </div>
            <a href="https://github.com/amolbudhiraja/sodukusolver" className="flex flex-row items-center space-x-1 mt-4">
              <div className="text-green-200"><FaGithub /></div>
              <p>Github</p>
            </a>
          </div>

          {/* Project 4 */}
          <div className={cardClass}>
            <div>
              <h3 className="text-lg font-bold">Genvest</h3>
              <p>Financial Education mobile app that provides realtime market insights.</p>
            </div>
            <div className="flex flex-row space-x-2 mt-4">
              <div className="p-2 bg-white rounded-lg text-blue-600"><FaPython /></div>
              <div className="p-2 bg-white rounded-lg text-red-600"><SiPytorch /></div>
            </div>
            <a href="https://github.com/Ericyang978/Genvest" className="flex flex-row items-center space-x-1 mt-4">
              <div className="text-green-200"><FaGithub /></div>
              <p>Github</p>
            </a>
          </div>
          <div className={cardClass}>
            <div className='space-y-2'>
              <h3 className="text-lg font-bold">PintOS</h3>
              <p>Implementation of an Operating System with file systems, multi-threading, dynamic memory allocation, etc.</p>
              <p>This was a project I created for my CS162: Operating Systems course. Hence, I can not make the project code public.</p>
            </div>
            <div className="flex flex-row space-x-2 mt-4">
              <div className="p-2 bg-white rounded-lg text-blue-600"><FaPython /></div>
              <div className="p-2 bg-white rounded-lg text-red-600"><SiPytorch /></div>
            </div>
              <a href="https://cs162.org/static/proj/pintos-docs/" className="flex flex-row items-center space-x-1 mt-4">
              <div className="text-orange-400"><CgWebsite /></div>
              <p>Project Spec</p>
            </a>
          </div>

          {/* Project 6 */}
          <div className={cardClass}>
            <div className='space-y-2'>
              <h3 className="text-lg font-bold">RookieDB</h3>
              <p>Java-based Database Management System with multi-granular locking, concurrency, and query optimization.</p>
              <p>This was a project I created for my CS186: Database Systems course. Hence, I can not make the project code public.</p>
            </div>
            <div className="flex flex-row space-x-2 mt-4">
              <div className="p-2 bg-white rounded-lg text-blue-600"><FaPython /></div>
              <div className="p-2 bg-white rounded-lg text-red-600"><SiPytorch /></div>
            </div>
              <a href="https://cs186.gitbook.io/project" className="flex flex-row items-center space-x-1 mt-4">
              <div className="text-orange-400"><CgWebsite /></div>
              <p>Project Spec</p>
            </a>
          </div>

          {/* Project 7 */}
          <div className={cardClass}>
            <div className='space-y-2'>
              <h3 className="text-lg font-bold">RISC-V CPU</h3>
              <p>Logisim-based RISC-V CPU with ALU, DRAM, L1/L2 Cache, TLB, pipelining functionality, etc.</p>
              <p>This was a project I created for my CS186: Database Systems course. Hence, I can not make the project code public.</p>
            </div>
            <div className="flex flex-row space-x-2 mt-4">
              <div className="p-2 bg-white rounded-lg text-blue-600"><FaPython /></div>
              <div className="p-2 bg-white rounded-lg text-red-600"><SiPytorch /></div>
            </div>
              <a href="https://inst.eecs.berkeley.edu/~cs61c/fa23/projects/proj3/" className="flex flex-row items-center space-x-1 mt-4">
              <div className="text-orange-400"><CgWebsite /></div>
              <p>Project Spec</p>
            </a>
          </div>

          {/* Project 8 */}
          <div className={cardClass}>
            <div className='space-y-2'>
              <h3 className="text-lg font-bold">Gitlet</h3>
              <p>Java-based git versioning control system with branching, merging, remote handling, etc.</p>
              <p>This was a project I created for my CS186: Database Systems course. Hence, I can not make the project code public.</p>
            </div>
            <div className="flex flex-row space-x-2 mt-4">
              <div className="p-2 bg-white rounded-lg text-blue-600"><FaPython /></div>
              <div className="p-2 bg-white rounded-lg text-red-600"><SiPytorch /></div>
            </div>
              <a href="https://inst.eecs.berkeley.edu/~cs61b/sp22/materials/proj/proj3/index.html" className="flex flex-row items-center space-x-1 mt-4">
              <div className="text-orange-400"><CgWebsite /></div>
              <p>Project Spec</p>
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
