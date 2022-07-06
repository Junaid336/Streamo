import {matchPath} from  "react-router-dom";
import history from "./history";

export default commonPath => matchPath({ path: commonPath }, history.location.pathname);