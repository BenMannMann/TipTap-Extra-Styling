import { Extension } from '@tiptap/core'

export const BackgroundColour = Extension.create({
    name: 'backgroundColour',

    addOptions() {
        return {
            types: ['heading', 'paragraph'],
            colours: ['blue', 'red', 'yellow', 'green', 'orange', 'pink', 'purple', 'brown', 'grey', 'black', 'white'],
            defaultColour: 'white',
        }
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    backgroundColour: {
                        default: this.options.defaultColour,
                        parseHTML: element => element.style.backgroundColor || this.options.defaultColour,
                        renderHTML: attributes => {
                            if (!attributes.backgroundColour) {
                              return {}
                            }

                            return { style: `background-color: ${attributes.backgroundColour}` }
                        },
                    }
                }
            }
        ]
    },

    addCommands() {
        return {
            setBackgroundColour: (colour) => ({ commands }) => {
                if (!this.options.colours.includes(colour)) {
                    return false
                }

                return this.options.types.every(type => commands.updateAttributes(type, { backgroundColour: colour }))
            },

            unsetBackgroundColour: () => ({ commands }) => {
                return this.options.types.every(type => commands.resetAttributes(type, 'backgroundColour'))
            },
        }
    },
})
