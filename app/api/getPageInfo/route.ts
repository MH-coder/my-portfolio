import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { PageInfo } from "@/typings";

const query = groq`
    *[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: PageInfo[];
};

export const GET = async () => {
  try {
    const pageInfo: PageInfo[] = await sanityClient.fetch(query);

    return new Response(JSON.stringify(pageInfo), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch page info", { status: 500 });
  }
};
