import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";

const loadChildTwoApp = async () => {
    await runScript('http://localhost:3002/static/js/main.js');
    return window.childTwoApp;
};

export const registerChildTwoApp = () => {
    singleSpa.registerApplication(
		'child-two-app',
		loadChildTwoApp,
		matchingPathname(['/child-two', '/']) // This will be visible on these two routes
	);
};