// my-plugin/components/MyCustomPanel.js
import React from "react";
import { unstable_useContentManagerContext as useContentManagerContext } from "@strapi/strapi/admin";

// The PanelComponent receives EditViewContext props
const MyCustomPanel = ({ activeTab, collectionType, document, documentId, meta, model }) => {
	const { form } = useContentManagerContext();
	const { values } = form;
	console.log(form);
	const { contentType } = useContentManagerContext();

	// Get all attributes from the content-type schema
	const attributes = contentType?.attributes || {};
	console.log(attributes);
	return (
		<div>
			<h4>Relational Fields</h4>
			<ul>
				{Object.entries(attributes).map(([name, attr]) => (
					<li key={name}>{name}</li>
				))}
			</ul>
		</div>
	);
	return {
		title: "Information",
		content: <div></div>,
	};
};

export default MyCustomPanel;
