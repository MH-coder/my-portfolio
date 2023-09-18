import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Project } from "../typings";

const query = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`;

export const fetchProjects = async () => {
  const res = await sanityClient.fetch(query);

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`,
  //   { cache: "no-store" }
  // );
  // const data = await res.json();

  const projects: Project[] = res;
  return projects;
};
