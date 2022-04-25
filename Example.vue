<template>
    <div v-if="editor" class="mb-5">
        <button @click="editor.chain().focus().setBackgroundColour('blue').run()" :class="{ 'is-active': editor.isActive({ backgroundColour: 'blue' }) }" class="tiptap-button">
            Blue Background
        </button>
        <button @click="editor.chain().focus().setBackgroundColour('red').run()" :class="{ 'is-active': editor.isActive({ backgroundColour: 'red' }) }" class="tiptap-button">
            Red Background
        </button>
        <button @click="editor.chain().focus().setBackgroundColour('yellow').run()" :class="{ 'is-active': editor.isActive({ backgroundColour: 'yellow' }) }" class="tiptap-button">
            Yellow Background
        </button>
        <button @click="editor.chain().focus().setBackgroundColour('black').run()" :class="{ 'is-active': editor.isActive({ backgroundColour: 'black' }) }" class="tiptap-button">
            Black Background
        </button>
        <button @click="editor.chain().focus().unsetBackgroundColour().run()" class="tiptap-button">
            Unset Background
        </button>
        <button @click="editor.chain().focus().setBorderWidth('1px').run()" :class="{ 'is-active': editor.isActive({ borderWidth: '1px' }) }" class="tiptap-button">
            1px Width
        </button>
        <button @click="editor.chain().focus().setBorderWidth('3px').run()" :class="{ 'is-active': editor.isActive({ borderWidth: '3px' }) }" class="tiptap-button">
            3px Width
        </button>
        <button @click="editor.chain().focus().setBorderStyle('solid').run()" :class="{ 'is-active': editor.isActive({ borderStyle: 'solid' }) }" class="tiptap-button">
            Solid
        </button>
        <button @click="editor.chain().focus().setBorderStyle('dashed').run()" :class="{ 'is-active': editor.isActive({ borderStyle: 'dashed' }) }" class="tiptap-button">
            Dashed
        </button>
        <button @click="editor.chain().focus().setBorderColour('black').run()" :class="{ 'is-active': editor.isActive({ borderColour: 'black' }) }" class="tiptap-button">
            Black Border
        </button>
        <button @click="editor.chain().focus().setBorderColour('red').run()" :class="{ 'is-active': editor.isActive({ borderColour: 'red' }) }" class="tiptap-button">
            Red Border
        </button>
        <button @click="editor.chain().focus().setBorderRadius('5px').run()" :class="{ 'is-active': editor.isActive({ borderRadius: '5px' }) }" class="tiptap-button">
            5px Radius
        </button>
        <button @click="editor.chain().focus().setBorderRadius('15px').run()" :class="{ 'is-active': editor.isActive({ borderRadius: '15px' }) }" class="tiptap-button">
            15px Radius
        </button>
        <button @click="editor.chain().focus().unsetBorder().run()" class="tiptap-button">
            Unset Border
        </button>
        <button @click="editor.chain().focus().setPaddingRight('10px').run()" :class="{ 'is-active': editor.isActive({ paddingRight: '10px' }) }" class="tiptap-button">
            10px Padding Right
        </button>
        <button @click="editor.chain().focus().setPaddingLeft('10px').run()" :class="{ 'is-active': editor.isActive({ paddingLeft: '10px' }) }" class="tiptap-button">
            10px Padding Left
        </button>
        <button @click="editor.chain().focus().setPaddingTop('10px').run()" :class="{ 'is-active': editor.isActive({ paddingTop: '10px' }) }" class="tiptap-button">
            10px Padding Top
        </button>
        <button @click="editor.chain().focus().setPaddingBottom('10px').run()" :class="{ 'is-active': editor.isActive({ paddingBottom: '10px' }) }" class="tiptap-button">
            10px Padding Bottom
        </button>
        <button @click="editor.chain().focus().setPadding('10px').run()" :class="{ 'is-active': editor.isActive({ padding: '10px' }) }" class="tiptap-button">
            10px Padding
        </button>
        <button @click="editor.chain().focus().unsetPadding().run()" class="tiptap-button">
            Unset Padding
        </button>
    </div>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { BackgroundColour } from "../../../TipTapExtensions/background-colour.js"
import { Border } from "../../../TipTapExtensions/border.js"
import { Padding } from "../../../TipTapExtensions/padding.js"

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
                Border,
                Padding,
            ],
            content: `
                <h2>Heading</h2>
                <p>First Paragraph</p>
                <p>Second Paragraph</p>
                <h3>Second Heading</h3>
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
    margin: 0px 5px 10px 0px;
}
</style>
