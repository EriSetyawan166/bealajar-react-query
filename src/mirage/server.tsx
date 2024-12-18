// src/mirage/server.ts
import { createServer, Model } from "miragejs";

export function makeServer() {
    return createServer({
        models: {
            post: Model,
        },

        seeds(server) {
            server.create("post", {
                id: "1",
                title: "Understanding React's Virtual DOM",
                content: "React's virtual DOM is a concept that helps developers build faster web applications by optimizing DOM manipulation. In this article, we explore how it works and why it's efficient.",
                author: "John Doe",
                publishedDate: "2023-12-01",
                tags: ["React", "JavaScript", "Web Development"],
            });

            server.create("post", {
                id: "2",
                title: "The Rise of AI in Software Development",
                content: "Artificial intelligence is revolutionizing the software development industry. Learn about the latest trends and how AI tools are assisting developers in building smarter applications.",
                author: "Jane Smith",
                publishedDate: "2023-11-15",
                tags: ["AI", "Software Development", "Innovation"],
            });

            server.create("post", {
                id: "3",
                title: "Top 10 Web Development Frameworks in 2023",
                content: "Choosing the right web development framework can make or break your project. Here's a detailed comparison of the top 10 frameworks that developers are using in 2023.",
                author: "Alex Johnson",
                publishedDate: "2023-10-30",
                tags: ["Web Development", "Frameworks", "Tech Trends"],
            });

            server.create("post", {
                id: "4",
                title: "Mastering CSS Grid for Responsive Design",
                content: "CSS Grid is a powerful tool for creating responsive web layouts. In this guide, we delve into the basics, advanced features, and real-world examples to help you master it.",
                author: "Emily Brown",
                publishedDate: "2023-09-20",
                tags: ["CSS", "Responsive Design", "Web Design"],
            });
        },


        routes() {
            this.namespace = "api";

            // Get all posts
            this.get("/posts", (schema) => {
                return schema.db.posts;
            });

            // Get a single post by ID
            this.get("/posts/:id", (schema, request) => {
                const id = request.params.id;
                return schema.db.posts.find(id);
            });

            // Create a new post
            this.post("/posts", (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                return schema.db.posts.insert(attrs);
            });

            // Update a post
            this.put("/posts/:id", (schema, request) => {
                const id = request.params.id;
                const attrs = JSON.parse(request.requestBody);
                return schema.db.posts.update(id, attrs);
            });

            // Delete a post
            this.delete("/posts/:id", (schema, request) => {
                const id = request.params.id;
                schema.db.posts.remove(id);
                return { message: "Post deleted" };
            });
        },
    });
}
