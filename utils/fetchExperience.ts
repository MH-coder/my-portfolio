import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Experience } from "../typings";

const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`;

export const fetchExperiences = async () => {
  const res = await sanityClient.fetch(query);

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`,
  //   { cache: "no-store" }
  // );
  // const data = await res.json();

  const experience: Experience[] = res;
  return experience;
};
