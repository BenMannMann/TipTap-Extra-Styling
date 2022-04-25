import { Extension } from '@tiptap/core'

export const Margin = Extension.create({
    name: 'margin',

    addOptions() {
        return {
            types: ['heading', 'paragraph'],
            spacings: ['0px', '1px', '2px', '3px', '4px', '5px', '6px', '8px', '10px', '12px', '14px', '16px', '18px', '20px'],
            defaultMarginRight: '0px',
            defaultMarginLeft: '0px',
            defaultMarginTop: '0px',
            defaultMarginBottom: '0px',
        }
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    marginRight: {
                        default: this.options.defaultMarginRight,
                        parseHTML: element => element.style.marginRight || this.options.defaultMarginRight,
                        renderHTML: attributes => {
                            return { style: `margin-right: ${attributes.marginRight}` }
                        },
                    },
                    marginLeft: {
                        default: this.options.defaultMarginLeft,
                        parseHTML: element => element.style.marginLeft || this.options.defaultMarginLeft,
                        renderHTML: attributes => {
                            return { style: `margin-left: ${attributes.marginLeft}` }
                        },
                    },
                    marginTop: {
                        default: this.options.defaultMarginTop,
                        parseHTML: element => element.style.marginTop || this.options.defaultMarginTop,
                        renderHTML: attributes => {
                            return { style: `margin-top: ${attributes.marginTop}` }
                        },
                    },
                    marginBottom: {
                        default: this.options.defaultMarginBottom,
                        parseHTML: element => element.style.marginBottom || this.options.defaultMarginBottom,
                        renderHTML: attributes => {
                            return { style: `margin-bottom: ${attributes.marginBottom}` }
                        },
                    },
                    margin: {
                        parseHTML: element => element.style.margin,
                        renderHTML: attributes => {
                            return { style: `margin: ${attributes.margin}` }
                        },
                    }
                }
            }
        ]
    },

    addCommands() {
        return {
            setMarginRight: (spacing) => ({ commands }) => {
                if (!this.options.spacings.includes(spacing)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { marginRight: spacing }))
            },

            setMarginLeft: (spacing) => ({ commands }) => {
                if (!this.options.spacings.includes(spacing)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { marginLeft: spacing }))
            },

            setMarginTop: (spacing) => ({ commands }) => {
                if (!this.options.spacings.includes(spacing)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { marginTop: spacing }))
            },

            setMarginBottom: (spacing) => ({ commands }) => {
                if (!this.options.spacings.includes(spacing)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { marginBottom: spacing }))
            },

            setMargin: (spacing) => ({ commands }) => {
                if (!this.options.spacings.includes(spacing)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { margin: spacing }))
            },

            unsetMargin: () => ({ commands }) => {
                return this.options.types.every(type => commands.resetAttributes(type, ['marginRight', 'marginLeft', 'marginTop', 'marginBottom', 'margin']))
            },
        }
    },
})
