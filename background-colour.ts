import { Extension } from '@tiptap/core'

export interface BackgroundColourOptions {
    types: string[],
    colours: string[],
    defaultColour: string,
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        backgroundColour: {
            /**
             * Set the colour attribute
             */
            setColour: (colour: string) => ReturnType,
            /**
             * Unset the colour attribute
             */
            unsetColour: () => ReturnType,
        }
    }
}

export const BackgroundColour = Extension.create<BackgroundColourOptions>({
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
                types: this.options.types,
                colours: {
                    backgroundColour: {
                        default: this.options.defaultColour,
                        parseHTML: element => element.style.backgroundColour || this.options.defaultColour,
                        renderHTML: attributes => {
                            if (attributes.backgroundColour === this.options.defaultColour) {
                                return {}
                            }

                            return { style: `background-color: ${attributes.backgroundColour}` }
                        },
                    },
                },
            },
        ]
    },

    addCommands() {
        return {
            setBackgroundColour: (colour: string) => ({ commands }) => {
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
