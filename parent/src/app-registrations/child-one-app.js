import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";

const loadChildOneApp = async () => {
    await runScript('http://localhost:3001/static/js/main.js');
    return window.childOneApp;
};

export const registerChildOneApp = () => {
    singleSpa.registerApplication(
		'child-one-app',
		loadChildOneApp,
		matchingPathname(['/child-one', '/']) // This will be visible on these two routes
	);
};