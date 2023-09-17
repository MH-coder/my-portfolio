import { Experience } from "../typings";

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`,
    { cache: "no-store" }
  );
  const data = await res.json();

  const experience: Experience[] = data;
  return experience;
};
