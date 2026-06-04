// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { existsSync, readFileSync } from "node:fs";
import { join, normalize } from "node:path";

function serveExistingOptimizedDeps() {
  return {
    name: "serve-existing-optimized-deps",
    apply: "serve" as const,
    configureServer(server: { middlewares: { use: (handler: (req: any, res: any, next: () => void) => void) => void }; config: { root: string } }) {
      server.middlewares.use((req, res, next) => {
        if (!req.url || (req.method !== "GET" && req.method !== "HEAD")) return next();

        const url = new URL(req.url, "http://localhost");
        if (!url.pathname.startsWith("/node_modules/.vite/deps/") || !url.pathname.endsWith(".js")) {
          return next();
        }

        const relativePath = normalize(url.pathname.slice(1));
        if (relativePath.startsWith("..")) return next();

        const filePath = join(server.config.root, relativePath);
        if (!existsSync(filePath)) return next();

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/javascript");
        res.setHeader("Cache-Control", "no-cache");
        if (req.method === "HEAD") return res.end();
        return res.end(readFileSync(filePath));
      });
    },
  };
}

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [serveExistingOptimizedDeps()],
    optimizeDeps: {
      include: ["@supabase/supabase-js"],
    },
  },
});
