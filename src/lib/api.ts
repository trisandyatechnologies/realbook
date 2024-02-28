export const getUser = async (userId: string) => {
    const user = await fetch(`${API_ROOT}users/${userId}`).then((res) =>
      res.json()
    );
    return user;
  };
  
  export const updateUser = async (
    userId: string,
    updateBody: Partial<User>
  ): Promise<User> => {
    const user = await fetch(`${API_ROOT}users/${userId}`, {
      method: "PUT",
      body: JSON.stringify(updateBody),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    return user;
  };