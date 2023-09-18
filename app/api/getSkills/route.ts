import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Skill } from "@/typings";

const query = groq`
    *[_type == "skill"]
`;

export const GET = async () => {
  try {
    const skills: Skill[] = await sanityClient.fetch(query);

    return new Response(JSON.stringify(skills), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch skills", { status: 500 });
  }
};
