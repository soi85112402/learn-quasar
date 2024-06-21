import { boot } from "quasar/wrappers";
import { Dark, LocalStorage } from "quasar";

export default boot(async () => {
  const darkMode = LocalStorage.getItem("darkMode");
  Dark.set(darkMode);
});
