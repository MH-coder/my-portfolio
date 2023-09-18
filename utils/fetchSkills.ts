import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Skill } from "../typings";

const query = groq`
    *[_type == "skill"]
`;

export const fetchSkills = async () => {
  const res = await sanityClient.fetch(query);

  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`, {
  //   cache: "no-store",
  // });
  // const data = await res.json();

  const skills: Skill[] = res;
  return skills;
};
