import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery(
    "posts", 
    fetchPosts, 
    {
      cacheTime: 1000 * 60 * 5, // Cache the data for 5 minutes
      staleTime: 1000 * 60, // Consider the data fresh for 1 minute
      refetchOnWindowFocus: true, // Refetch data when window regains focus
      keepPreviousData: true, // Keep previous data while loading new data
    }
  );

  // Handle loading state
  if (isLoading) return <p>Loading posts...</p>;

  // Handle error state
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      {isFetching && <p>Refreshing data...</p>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
