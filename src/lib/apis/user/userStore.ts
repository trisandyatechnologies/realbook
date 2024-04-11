import { User } from "@prisma/client";
import { create } from "zustand";
import { message } from "../../notify";
import { BaseStore } from "../common/types";
import { userApi } from "./userApi";

interface UserStore extends BaseStore<User> {
  user?: User;
  getUser: (id: string) => void;
  updateUser: (updateBody: Partial<User>) => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  getUser: async (id) => {
    const user = await userApi.find(id);
    set({ user });
  },
  updateUser: async (update: Partial<User>) => {
    const userId = get()?.user?.id;
    if (!userId) return;
    const updatedUser = await userApi.update(userId, update);
    if (updatedUser) {
      set({ user: updatedUser });
    } else {
      message.error("Failed to update user.");
    }
  },
  reset: () => {
    set({ user: undefined });
  },
}));
