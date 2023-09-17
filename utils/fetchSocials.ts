import { Social } from "../typings";

export const fetchSocials = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`,
    { cache: "no-store" }
  );

  const data = await res.json();

  const socials: Social[] = data;
  return socials;
};
