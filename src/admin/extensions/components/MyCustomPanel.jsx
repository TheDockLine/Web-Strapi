// my-plugin/components/MyCustomPanel.js
import React, { useState, useEffect } from "react";
import { unstable_useContentManagerContext as useContentManagerContext } from "@strapi/strapi/admin";

// The PanelComponent receives EditViewContext props
const MyCustomPanel = async ({ collectionType, document, documentId, meta, model }) => {
	const { form } = useContentManagerContext();
	const [item, setItem] = useState(null);
	useEffect(() => {
		fetch(`http://localhost:1337/api/websites/${documentId}?populate=*`, {})
			.then((res) => res.json())
			.then((data) => setItem(data)); // .data because Strapi wraps the response
	}, [documentId]);

	console.log(item);
	console.log(document);
	console.log(form);

	return {
		title: "Item Details",
		content: item && (
			<div>
				{Object.entries(item).map(([key, value]) => (
					<div key={key}>
						<strong>{key}:</strong> {JSON.stringify(value)}
					</div>
				))}
			</div>
		),
	};
};

export default MyCustomPanel;
