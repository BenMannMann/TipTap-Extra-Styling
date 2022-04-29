import { Extension } from '@tiptap/core'

export const Width = Extension.create({
  name: 'width',

  addOptions() {
    return {
      types: ['heading', 'paragraph'],
      sizes: ['50px', '100px', '200px', '300px'],
      defaultWidth: '100px',
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          width: {
            default: this.options.defaultWidth,
            parseHTML: element => element.style.width || this.options.defaultWidth,
            renderHTML: attributes => {
              if (!attributes.width) {
                return {}
              }

              return { style: `width: ${attributes.width}` }
            },
          },
        }
      }
    ]
  },

  addCommands() {
    return {
      setWidth: (size) => ({ commands }) => {
        if (!this.options.sizes.includes(size)) {
          return false
        }

        return this.options.types.every(type => commands.updateAttributes(type, { width: size }))
      },

      unsetWidth: () => ({ commands }) => {
        return this.options.types.every(type => commands.resetAttributes(type, ['width']))
      },
    }
  },
})
