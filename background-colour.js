import { Extension } from '@tiptap/core'

export const BackgroundColour = Extension.create({
    name: 'backgroundColour',

    addOptions() {
        return {
            types: [],
            colours: ['blue', 'red', 'green', 'yellow', 'orange', 'pink', 'purple', 'brown', 'grey', 'black', 'white'],
            defaultColour: 'grey',
        }
    },

    addGlobalAttributes() {
        return [
            {
                types: [],
                attributes: {
                    backgroundColour: {
                        default: this.options.defaultColour,
                        renderHTML: attributes => {
                            if (attributes.backgroundColour === this.options.defaultColour) {
                                return {}
                            }

                            return { style: `background-color: ${attributes.backgroundColour}` }
                        },
                        parseHTML: element => element.style.backgroundColour || this.options.defaultColour,
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
