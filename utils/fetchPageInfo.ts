import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`,
    { cache: "no-store" }
  );
  const data = await res.json();

  const pageInfo: PageInfo = data;
  return pageInfo;
};
