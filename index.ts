const server = Bun.spawn(["bun", "run", "dev"], {
  cwd: "packages/server",
  stdout: "inherit",
  stderr: "inherit",
});

const client = Bun.spawn(["bun", "run", "dev"], {
  cwd: "packages/client/react-app",
  stdout: "inherit",
  stderr: "inherit",
});

await Promise.all([server.exited, client.exited]);