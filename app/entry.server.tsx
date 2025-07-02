import { renderToString } from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router-dom/server";
import routes from "../app/routes";

export default async function handleRequest(req: Request) {
  const handler = createStaticHandler(routes);
  const context = await handler.query(req);

  const router = createStaticRouter(handler.dataRoutes, context);

  return new Response(
    "<!DOCTYPE html>" +
      renderToString(
        <StaticRouterProvider
          router={router}
          context={context}
        />
      ),
    {
      headers: { "Content-Type": "text/html" },
    }
  );
}
