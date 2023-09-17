import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Experience } from "../../../typings";

const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`;

export const GET = async () => {
  try {
    const experience: Experience[] = await sanityClient.fetch(query);

    return new Response(JSON.stringify(experience), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch experience", { status: 500 });
  }
};
