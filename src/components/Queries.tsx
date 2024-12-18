import { useQuery } from "react-query";
import { fetchPosts } from "../services/api";
import { posts } from "../types";
import { Skeleton } from "antd";

function Queries() {
    const { data, isLoading, isError, error } = useQuery('posts', fetchPosts);

    if (isLoading) {
        return (
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6">
                            <Skeleton active title={false} paragraph={{ rows: 3 }} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{(error as { message: string }).message}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data.map((post: posts) => (
                    <div key={post.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                        <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                        <p className="text-gray-700 mb-4">{post.content}</p>
                        <div className="text-sm text-gray-500 mb-4">
                            <p><strong>Author:</strong> {post.author}</p>
                            <p><strong>Published Date:</strong> {post.publishedDate}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Queries