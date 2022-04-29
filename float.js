import { Extension } from '@tiptap/core'

export const Float = Extension.create({
  name: 'float',

  addOptions() {
    return {
      types: ['heading', 'paragraph'],
      directions: ['left', 'right'],
      defaultDirection: 'left',
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          float: {
            default: this.options.defaultDirection,
            parseHTML: element => element.style.float || this.options.defaultDirection,
            renderHTML: attributes => {
              if (!attributes.float) {
                return {}
              }

              return { style: `float: ${attributes.float}` }
            },
          },
        }
      }
    ]
  },

  addCommands() {
    return {
      setFloat: (direction) => ({ commands }) => {
        if (!this.options.directions.includes(direction)) {
          return false
        }

        return this.options.types.every(type => commands.updateAttributes(type, { float: direction }))
      },

      unsetFloat: () => ({ commands }) => {
        return this.options.types.every(type => commands.resetAttributes(type, ['float']))
      },
    }
  },
})
