import TurionSite from "./TurionSite";
import { sites } from "./site-config";

export default function TurionHome() {
  return <TurionSite site={sites.advisory} />;
}
