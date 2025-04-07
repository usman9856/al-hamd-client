import React from "react";
import { useFetchUserNameQuery } from "../../redux/user/user.api";

const User: React.FC = () => {
  const { data, isLoading, isError } = useFetchUserNameQuery();

  if (isLoading) return <div>Loading user name...</div>;
  if (isError) return <div>Failed to load user name.</div>;

  return <div>User Name: {data?.name || "Unknown"}</div>;
};

export default User;
