import { API_ROOT } from "@/app/utils/config";
import { Prospect } from "@prisma/client";

export const createProspect = async (prospectBody: Prospect) => {
  const prospect = await fetch(`${API_ROOT}prospects`, {
    method: "POST",
    body: JSON.stringify(prospectBody),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return prospect;
};
export const getprospects = async () => {
  const prospects = await fetch(`${API_ROOT}prospects`).then((res) =>
    res.json()
  );
  return prospects;
};
