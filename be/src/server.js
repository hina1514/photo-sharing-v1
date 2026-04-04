import createApp from "./app.js";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

const app = createApp();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`PhotoShare backend listening on https://k8zzvn-${PORT}.csb.app`);
});
// https://k8zzvn-3000.csb.app
