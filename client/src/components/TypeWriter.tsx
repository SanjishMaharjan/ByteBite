import React, { useState, useEffect } from 'react'
import { renderResponseContent } from '../utils/ResponseFormater'

type TypewriterProps = {
  text: string
  speed?: number
  onComplete?: () => void
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 10,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0
    const content = text

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + content[index])
      index++

      if (index === content.length) {
        clearInterval(interval)
        if (onComplete) {
          onComplete()
        }
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, onComplete])

  return <div>{renderResponseContent(displayedText)}</div>
}

export default Typewriter
