const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'myguten-block/static-custom-block', {
	title: __( 'Static Custom Block' ),
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