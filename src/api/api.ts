import { IPostData } from "../type";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getPostData() {
  const response = await fetch(apiUrl);
  const data: IPostData[] = await response.json();

  return data;
}
