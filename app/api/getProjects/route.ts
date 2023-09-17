import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Project } from "@/typings";

const query = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`;

type Data = {
  projects: Project[];
};

export const GET = async () => {
  try {
    const projects: Project[] = await sanityClient.fetch(query);

    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch projects", { status: 500 });
  }
};
