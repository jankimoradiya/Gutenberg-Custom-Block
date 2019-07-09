const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
registerBlockType( 'myguten-block/custom-block', {
	title: __( 'My Custom Block' ),
	icon: 'megaphone',
	category: 'common',
	edit() {
		return (
			<p>Static block example built with JSX.</p>
		);
	},
	save() {
		return (
			<p>Static block example built with JSX.</p>
		);
	},
} );