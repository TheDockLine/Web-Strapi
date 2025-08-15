import CustomButton from "./extensions/components/LinkButton.jsx";
import MyCustomPanel from "./extensions/components/MyCustomPanel.jsx";

const config = {
	locales: [
		// 'ar',
		// 'fr',
		// 'cs',
		// 'de',
		// 'dk',
		// 'es',
		// 'he',
		// 'id',
		// 'it',
		// 'ja',
		// 'ko',
		// 'ms',
		// 'nl',
		// 'no',
		// 'pl',
		// 'pt-BR',
		// 'pt',
		// 'ru',
		// 'sk',
		// 'sv',
		// 'th',
		// 'tr',
		// 'uk',
		// 'vi',
		// 'zh-Hans',
		// 'zh',
	],
};

const bootstrap = (app) => {
	app.getPlugin("content-manager").injectComponent("editView", "right-links", {
		name: "custom-button",
		Component: CustomButton,
	});

	const apis = app.getPlugin("content-manager").apis;
	apis.addEditViewSidePanel((panels) => [MyCustomPanel, ...panels]);
};

export default {
	config,
	bootstrap,
};
