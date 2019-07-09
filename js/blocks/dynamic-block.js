const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {RichText, InspectorControls, PanelColorSettings} = wp.editor;

registerBlockType( 'myguten-block/dynamic-custom-block', {
	title: __( 'Dynamic Custom Block' ),
	icon: 'megaphone',
    category: 'common',
    attributes:{
        fname:{
            type: 'string',
            default: ''
        },
        textColor:{
            type: 'string',
            default: ''
        }
    },
	edit(props) {
        const { attributes:{fname, textColor}, setAttributes, } = props;
    
		return [
            (
                <InspectorControls>
                    <PanelColorSettings
                            title={ __('Text Color') }
                            initialOpen={ true }
                            colorSettings={ [
                                {
                                    label: __(''),
                                    value: textColor,
                                    onChange: (value) => setAttributes({
                                        textColor: value
                                    }),
                                },
                            ] }
                        />
                </InspectorControls>
            ),
            (
                <RichText
                    tagName="p"
                    className="fname"
                    value={fname}
                    placeholder={ __("Enter First Name")}
                    onChange={ value => setAttributes({ fname:value }) }
                    style={{color:textColor}}
                />
            )
        ]
	},
	save(props) {
        const {attributes:{fname, textColor}}=props;
        return (
			<RichText.Content
                tagName="p"
                className="fname"
                value={fname}
                style={{color:textColor}}
            />
		);
	},
} );