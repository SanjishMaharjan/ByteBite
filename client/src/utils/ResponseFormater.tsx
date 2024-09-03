export const renderResponseContent = (content: string) => {
  const lines = content.split('\n')
  let inCodeBlock = false
  let codeContent = ''

  return lines.map((line, index) => {
    // Code block handling
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        const result = (
          <pre
            key={index}
            className="bg-[#2a2a2a] p-3 rounded-md overflow-x-auto"
          >
            <code>{codeContent}</code>
          </pre>
        )
        inCodeBlock = false
        codeContent = ''
        return result
      } else {
        inCodeBlock = true
        return null
      }
    }

    if (inCodeBlock) {
      codeContent += line + '\n'
      return null
    }

    // Other formatting
    if (line.startsWith('### ')) {
      return (
        <h3 key={index} className="font-bold text-xl mb-2">
          {line.slice(4)} {/* Remove the first 4 # from the heading */}
        </h3>
      )
    } else if (line.startsWith('## ')) {
      return (
        <h2 key={index} className="font-semibold text-lg mb-1">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('# ')) {
      return (
        <h1 key={index} className="font-bold text-2xl mb-2">
          {line.slice(2)}
        </h1>
      )
    } else if (line.startsWith('> ')) {
      return (
        <blockquote
          key={index}
          className="border-l-4 border-gray-500 pl-4 italic"
        >
          {line.slice(2)}
        </blockquote>
      )
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      const listContent = line.slice(2)
      return (
        <li key={index} className="ml-4">
          {listContent.includes('**')
            ? listContent
                .split('**')
                .map((part, i) =>
                  i % 2 === 0 ? part : <strong key={i}>{part}</strong>,
                )
            : listContent}
        </li>
      )
    } else if (/^\d+\.\s/.test(line)) {
      const listContent = line.replace(/^\d+\.\s/, '')
      return (
        <li key={index} className="ml-4">
          {listContent.includes('**')
            ? listContent
                .split('**')
                .map((part, i) =>
                  i % 2 === 0 ? part : <strong key={i}>{part}</strong>,
                )
            : line}
        </li>
      )
    } else if (line.includes('**')) {
      return (
        <p key={index}>
          {line
            .split('**')
            .map((part, i) =>
              i % 2 === 0 ? part : <strong key={i}>{part}</strong>,
            )}
        </p>
      )
    } else if (line.includes('*')) {
      return (
        <p key={index}>
          {line
            .split('*')
            .map((part, i) => (i % 2 === 0 ? part : <em key={i}>{part}</em>))}
        </p>
      )
    } else if (line.trim() === '') {
      return <br key={index} />
    } else {
      return <p key={index}>{line}</p>
    }
  })
}
