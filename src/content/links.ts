export default [
	{
		attrs: {
			href: "https://app.thestorygraph.com/profile/andeedevore",
		},
		text: "StoryGraph",
	},
	{
		attrs: {
			href: "https://www.instagram.com/wellreadwomanorg/",
		},
		text: "Instagram",
	},
	{
		attrs: {
			href: "https://www.goodreads.com/user/show/43825336-andee-devore",
		},
		text: "goodreads",
	}
]
	.map((link) => ({ ...link, isExternal: link.attrs.href.startsWith("http") }))
	.sort((a, b) => a.text.localeCompare(b.text));
