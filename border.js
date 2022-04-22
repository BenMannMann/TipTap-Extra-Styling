import { Extension } from '@tiptap/core'

export const Border = Extension.create({
    name: 'border',

    addOptions() {
        return {
            types: ['heading', 'paragraph'],
            widths: ['1px', '2px', '3px', '4px', '5px', '6px'],
            styles: ['solid', 'dashed', 'dotted'],
            colours: ['blue', 'red', 'yellow', 'green', 'orange', 'pink', 'purple', 'brown', 'grey', 'black', 'white'],
            radiuses: ['0px', '5px', '10px', '15px', '20px', '25px'],
            defaultBorderWidth: '0px',
            defaultBorderStyle: 'solid',
            defaultBorderColour: 'white',
            defaultBorderRadius: '0px',
        }
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    borderWidth: {
                        default: this.options.defaultBorderWidth,
                        parseHTML: element => element.style.borderWidth || this.options.defaultBorderWidth,
                        renderHTML: attributes => {
                            return { style: `border-width: ${attributes.borderWidth}` }
                        },
                    },
                    borderStyle : {
                        default: this.options.defaultBorderStyle,
                        parseHTML: element => element.style.borderStyle || this.options.defaultBorderStyle,
                        renderHTML: attributes => {
                            return { style: `border-style: ${attributes.borderStyle}` }
                        },
                    },
                    borderColour: {
                        default: this.options.defaultBorderColour,
                        parseHTML: element => element.style.borderColour || this.options.defaultBorderColour,
                        renderHTML: attributes => {
                            return { style: `border-color: ${attributes.borderColour}` }
                        },
                    },
                    borderRadius: {
                        default: this.options.defaultBorderRadius,
                        parseHTML: element => element.style.borderRadius || this.options.defaultBorderRadius,
                        renderHTML: attributes => {
                            return { style: `border-radius: ${attributes.borderRadius}` }
                        },
                    },
                }
            }
        ]
    },

    addCommands() {
        return {
            setBorderWidth: (width) => ({ commands }) => {
                if (!this.options.widths.includes(width)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { borderWidth: width }))
            },

            setBorderStyle: (style) => ({ commands }) => {
                if (!this.options.styles.includes(style)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { borderStyle: style }))
            },

            setBorderColour: (colour) => ({ commands }) => {
                if (!this.options.colours.includes(colour)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { borderColour: colour }))
            },

            setBorderRadius: (radius) => ({ commands }) => {
                if (!this.options.radiuses.includes(radius)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { borderRadius: radius }))
            },

            unsetBorderWidth: () => ({ commands }) => {
                return this.options.types.every(type => commands.resetAttributes(type, 'borderWidth'))
            },

            unsetBorderStyle: () => ({ commands }) => {
                return this.options.types.every(type => commands.resetAttributes(type, 'borderStyle'))
            },

            unsetBorderColour: () => ({ commands }) => {
                return this.options.types.every(type => commands.resetAttributes(type, 'borderColour'))
            },

            unsetBorderRadius: () => ({ commands }) => {
                return this.options.types.every(type => commands.resetAttributes(type, 'borderRadius'))
            },

            unsetBorder: () => ({ commands }) => {
                return this.options.types.every(type => commands.resetAttributes(type, ['borderWidth', 'borderStyle', 'BorderColour', 'borderRadius']))
            },
        }
    },
})
