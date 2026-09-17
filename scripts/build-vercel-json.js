import { readdir, readFile, writeFile } from "node:fs/promises";
import { format } from "prettier";

async function createRewrites() {
  const talks = await readdir("talks");

  const rewrites = talks.map(async (talk) => {
    const redirectsContent = await readFile(
      `talks/${talk}/dist/_redirects`,
      "utf-8",
    );

    const lines = redirectsContent
      .split(/\n/g)
      .map((s) => s.trim())
      .filter(Boolean);

    return lines.map((line) => {
      const [source, destination] = line.split(/\s+/g);
      return {
        source: source.replace(/\*/g, "(.*)"),
        destination,
        permanent: false,
      };
    });
  });

  return (await Promise.all(rewrites)).flat();
}

const vercelConfig = {
  $schema: "https://openapi.vercel.sh/vercel.json",
  installCommand: "pnpm install --frozen-lockfile",
  buildCommand: "pnpm build && pnpm bundle",
  outputDirectory: "dist",
  rewrites: await createRewrites(),
};

const json = await format(JSON.stringify(vercelConfig), {
  filepath: "vercel.json",
});

await writeFile("vercel.json", json, "utf-8");
