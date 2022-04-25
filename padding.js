import { Extension } from '@tiptap/core'

export const Padding = Extension.create({
    name: 'padding',

    addOptions() {
        return {
            types: ['heading', 'paragraph'],
            spacings: ['0px', '1px', '2px', '3px', '4px', '5px', '6px', '8px', '10px', '12px', '14px', '16px', '18px', '20px'],
            defaultPaddingRight: '0px',
            defaultPaddingLeft: '0px',
            defaultPaddingTop: '0px',
            defaultPaddingBottom: '0px',
        }
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    paddingRight: {
                        default: this.options.defaultPaddingRight,
                        parseHTML: element => element.style.paddingRight || this.options.defaultPaddingRight,
                        renderHTML: attributes => {
                            return { style: `padding-right: ${attributes.paddingRight}` }
                        },
                    },
                    paddingLeft: {
                        default: this.options.defaultPaddingLeft,
                        parseHTML: element => element.style.paddingLeft || this.options.defaultPaddingLeft,
                        renderHTML: attributes => {
                            return { style: `padding-left: ${attributes.paddingLeft}` }
                        },
                    },
                    paddingTop: {
                        default: this.options.defaultPaddingTop,
                        parseHTML: element => element.style.paddingTop || this.options.defaultPaddingTop,
                        renderHTML: attributes => {
                            return { style: `padding-top: ${attributes.paddingTop}` }
                        },
                    },
                    paddingBottom: {
                        default: this.options.defaultPaddingBottom,
                        parseHTML: element => element.style.paddingBottom || this.options.defaultPaddingBottom,
                        renderHTML: attributes => {
                            return { style: `padding-bottom: ${attributes.paddingBottom}` }
                        },
                    },
                    padding: {
                        parseHTML: element => element.style.padding,
                        renderHTML: attributes => {
                            return { style: `padding: ${attributes.padding}` }
                        },
                    }
                }
            }
        ]
    },

    addCommands() {
        return {
            setPaddingRight: (spacing) => ({ commands }) => {
                if (!this.options.spacings.includes(spacing)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { paddingRight: spacing }))
            },

            setPaddingLeft: (spacing) => ({ commands }) => {
                if (!this.options.spacings.includes(spacing)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { paddingLeft: spacing }))
            },

            setPaddingTop: (spacing) => ({ commands }) => {
                if (!this.options.spacings.includes(spacing)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { paddingTop: spacing }))
            },

            setPaddingBottom: (spacing) => ({ commands }) => {
                if (!this.options.spacings.includes(spacing)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { paddingBottom: spacing }))
            },

            setPadding: (spacing) => ({ commands }) => {
                if (!this.options.spacings.includes(spacing)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { padding: spacing }))
            },

            unsetPadding: () => ({ commands }) => {
                return this.options.types.every(type => commands.resetAttributes(type, ['paddingRight', 'paddingLeft', 'paddingTop', 'paddingBottom', 'padding']))
            },
        }
    },
})
