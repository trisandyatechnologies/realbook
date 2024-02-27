import { API_ROOT } from "@/app/utils/config";
import { Prospect } from "@prisma/client";

export const createProspect = async (prospectBody: Prospect) => {
  try {
    const response = await fetch(`${API_ROOT}prospects`, {
      method: "POST",
      body: JSON.stringify(prospectBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error creating prospect:", error);
  }
};

export const getProspects = async () => {
  try{
  const prospects = await fetch(`${API_ROOT}prospects`).then((res) => res.json());
  return prospects;
}catch (error) {
  console.error('Error fetching data:', error);
  throw error;
}
};
 