import { writeFileSync } from "fs";

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; URL='/RIDEAtlas-EX/'" />
    <script>window.location.replace('/RIDEAtlas-EX/');</script>
    <title>Redirecting...</title>
  </head>
  <body>
    <p>Redirecting to the app...</p>
  </body>
</html>
`;

writeFileSync("./build/client/404.html", html);
console.log("✅ 404.html fallback created.");
