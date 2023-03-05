import { NextApiRequest, NextApiResponse } from "next";

import { api } from "@/services/api";

interface UserRepository {
  id: number;
  name: string;
  html_url: string;
}

interface User {
  id: number;
  name: string;
  avatar_url: string;
  repositories: UserRepository[];
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { username } = request.query;

  const userResponse = await api.get(`/users/${username}`);
  const reposResponse = await api.get(`/users/${username}/repos`);

  const user: User = {
    id: userResponse.data.id,
    name: userResponse.data.name,
    avatar_url: userResponse.data.avatar_url,
    repositories: reposResponse.data.map((repo: UserRepository) => ({
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url
    }))
  };

  return response.status(200).json({
    user,
  });
}