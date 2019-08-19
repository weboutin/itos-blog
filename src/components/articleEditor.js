
import React from 'react';
import { Editor } from 'slate-react'
import { Value } from 'slate'

function CodeNode(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}


// Create our initial value...
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.',
          },
        ],
      },
    ],
  },
})

// export default class ArticleEditor extends React.Component {
//   state = {
//     value: initialValue,
//   }
//   onChange = ({ value }) => {
//     this.setState({ value })
//   }

//   onKeyDown = (event, editor, next) => {
//     if (event.key != '`' || !event.ctrlKey) return next()

//     event.preventDefault()

//     // Determine whether any of the currently selected blocks are code blocks.
//     const isCode = editor.value.blocks.some(block => block.type == 'code')

//     // Toggle the block type depending on `isCode`.
//     editor.setBlocks(isCode ? 'paragraph' : 'code')
//   }
//   render() {
//     return <div>
//       <div className="headerEmpty"></div>
//       <Editor
//         value={this.state.value}
//         onChange={this.onChange}
//         onKeyDown={this.onKeyDown}
//         renderBlock={this.renderBlock}
//         />
//     </div>;
//   }
//   renderBlock = (props, editor, next) => {
//     switch (props.node.type) {
//       case 'code':
//         return <CodeNode {...props} />
//       default:
//         return next()
//     }
//   }
// }
function BoldMark(props) {
  return <strong>{props.children}</strong>
}

export default class ArticleEditor extends React.Component {
  state = {
    value: initialValue,
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }

  onKeyDown = (event, editor, next) => {
    if (!event.ctrlKey) return next()

    switch (event.key) {
      case 'b': {
        event.preventDefault()
        editor.toggleMark('bold')
        break
      }
      case '`': {
        const isCode = editor.value.blocks.some(block => block.type == 'code')
        event.preventDefault()
        editor.setBlocks(isCode ? 'paragraph' : 'code')
        break
      }
      default: {
        return next()
      }
    }
  }

  render() {
    return (
      <Editor
        value={this.state.value}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        renderBlock={this.renderBlock}
        // Add the `renderMark` prop...
        renderMark={this.renderMark}
      />
    )
  }

  renderBlock = (props, editor, next) => {
    switch (props.node.type) {
      case 'code':
        return <CodeNode {...props} />
      default:
        return next()
    }
  }

  // Add a `renderMark` method to render marks.
  renderMark = (props, editor, next) => {
    switch (props.mark.type) {
      case 'bold':
        return <BoldMark {...props} />
      default:
        return next()
    }
  }
}
