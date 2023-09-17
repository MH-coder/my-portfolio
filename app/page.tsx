// Components
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

// TS Typings
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchExperiences } from "@/utils/fetchExperience";

// Utils - Fetch Data
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";

// Next Imports
import Link from "next/link";

// Third Party Imports
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

type Props = {};

const getSocials = async () => {
  try {
    const data: Social[] = await fetchSocials();
    return data;
  } catch (error) {
    console.log("get socials error: ", error);
  }
};

const getPageInfo = async () => {
  try {
    const data: PageInfo = await fetchPageInfo();
    return data;
  } catch (error) {
    console.log("get page info error: ", error);
  }
};

const getExperiences = async () => {
  try {
    const data: Experience[] = await fetchExperiences();

    return data;
  } catch (error) {
    console.log("get experinces error: ", error);
  }
};

const getSkills = async () => {
  try {
    const data: Skill[] = await fetchSkills();

    return data;
  } catch (error) {
    console.log("get skills error: ", error);
  }
};

const getProjects = async () => {
  try {
    const data: Project[] = await fetchProjects();

    return data;
  } catch (error) {
    console.log("get projects error: ", error);
  }
};

export default async function Home(props: Props) {
  const socials: Social[] | any = await getSocials();
  const pageInfo: PageInfo[] | any = await getPageInfo();
  const experiences: Experience[] | any = await getExperiences();
  const skills: Skill[] | any = await getSkills();
  const projects: Project[] | any = await getProjects();

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60 scrollbar-thin">
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 opacity-30 hover:opacity-100 cursor-pointer" />
            {/* <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 opacity-30 hover:opacity-100 cursor-pointer"
              src="https://i.imgur.com/e2yvD6A.png"
              alt=""
            /> */}
          </div>
        </footer>
      </Link>
    </div>
  );
}
