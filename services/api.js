import { BASE_URL } from "@/api/BaseConfig";

export const fetchData = async (endpoint) => {
  try {
    const res = await fetch(BASE_URL + endpoint);
    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
    return await res.json();
  } catch (err) {
    return [];
  }
};
