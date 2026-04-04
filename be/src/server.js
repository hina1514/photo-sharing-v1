import createApp from "./app.js";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

const app = createApp();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`PhotoShare backend listening on http://localhost:${PORT}`);
});
