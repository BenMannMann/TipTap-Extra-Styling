<template>
    <div v-if="editor">
        <button @click="editor.chain().focus().setBackgroundColour('blue').run()" :class="{ 'is-active': editor.isActive({ backgroundColour: 'blue' }) }" class="tiptap-button">
            blue
        </button>
        <button @click="editor.chain().focus().setBackgroundColour('red').run()" :class="{ 'is-active': editor.isActive({ backgroundColour: 'red' }) }" class="tiptap-button">
            red
        </button>
        <button @click="editor.chain().focus().setBackgroundColour('green').run()" :class="{ 'is-active': editor.isActive({ backgroundColour: 'green' }) }" class="tiptap-button">
            green
        </button>
        <button @click="editor.chain().focus().unsetBackgroundColour().run()" class="tiptap-button">
            unsetBackgroundColour
        </button>
    </div>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { BackgroundColour } from "../../../TipTapExtensions/background-colour.js"

export default {
    components: {
        EditorContent,
    },
    data() {
        return {
            editor: null,
        }
    },
    mounted() {
        this.editor = new Editor({
            extensions: [
                StarterKit,
                BackgroundColour,
            ],
            content: `
                <h2>Heading</h2>
                <p>first paragraph</p>
                <p>second paragraph</p>
            `,
        })
    },
    beforeUnmount() {
        this.editor.destroy()
    },
}
</script>

<style>
.ProseMirror {
    border: 1px solid lightgrey;
    border-radius: 10px;
    height: 400px;
    max-height: 400px;
    padding: 15px;
}
.tiptap-button {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin-right: 5px;
}
</style>
