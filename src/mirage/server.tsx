// src/mirage/server.ts
import { createServer, Model } from "miragejs";

export function makeServer() {
    return createServer({
        models: {
            post: Model,
        },

        seeds(server) {
            server.create("post", { id: "1", title: "First Post", content: "This is the first post." });
            server.create("post", { id: "2", title: "Second Post", content: "This is the second post." });
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
