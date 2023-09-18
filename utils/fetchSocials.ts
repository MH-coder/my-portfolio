import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Social } from "../typings";

const query = groq`
    *[_type == "social"]
`;

export const fetchSocials = async () => {
  const res = await sanityClient.fetch(query);

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`,
  //   { cache: "no-store" }
  // );
  // const data = await res.json();

  const socials: Social[] = res;
  return socials;
};
