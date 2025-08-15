import React from "react";
import { Button } from "@strapi/design-system";
import { unstable_useContentManagerContext as useContentManagerContext } from "@strapi/strapi/admin";

const CustomButton = (props) => {
	if (props.slug !== "api::website.website") {
		return null;
	}
	const { form } = useContentManagerContext();
	const { values } = form;

	const handleView = () => {
		const url = `https://${values.url}`;
		window.open(url, "_blank", "noopener,noreferrer");
	};

	const handleTest = () => {
		const url = `https://${values.url}/wp-admin/admin.php?page=wp-mail-smtp-tools`;
		window.open(url, "_blank", "noopener,noreferrer");
	};

	return (
		<div style={{ display: "flex", gap: "8px", width: "100%" }}>
			<Button onClick={handleView} disabled={!values.url} style={{ flex: 1 }}>
				View Site
			</Button>
			<Button onClick={handleTest} disabled={!values.url} style={{ flex: 1 }}>
				SMTP Test
			</Button>
		</div>
	);
};

export default CustomButton;
