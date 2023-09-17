import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Social } from "../../../typings";

const query = groq`
    *[_type == "social"]
`;

type Data = {
  socials: Social[];
};

export const GET = async () => {
  try {
    const socials: Social[] = await sanityClient.fetch(query);

    return new Response(JSON.stringify(socials), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch scoials", { status: 500 });
  }
};
