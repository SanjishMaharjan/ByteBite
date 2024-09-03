import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { SendOutlined, LoadingOutlined } from '@ant-design/icons'
import logo from '../../../public/logos/BytebotLight.png'
import model from '../../lib/Gemini'
import { renderResponseContent } from '../../utils/ResponseFormater'
import Typewriter from '../../components/TypeWriter'

const { TextArea } = Input

const Chatpage: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [responseText, setResponseText] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [lastPrompt, setLastPrompt] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }

  const handleSend = async () => {
    if (inputValue.trim()) {
      setError(null)
      setIsLoading(true)
      console.log('Sending message:', inputValue)
      setLastPrompt(inputValue)
      await handleGemini(inputValue)
      setInputValue('')
    }
  }

  const handleGemini = async (prompt: string) => {
    try {
      const result = await model.generateContent(prompt)
      const text = await result.response.text()
      console.log(prompt)
      setResponseText(text)
      setIsTyping(true)
      console.log('Generated content:', text)
    } catch (error) {
      setError('Error generating content, please try again.')
      console.error('Error generating content:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const promptExamples = [
    'Quiz me on famous sites around the world',
    'Give an idea for an eco-friendly tech startup',
    'Write a short story about a time-traveling chef',
    'Create a 12-week study plan for learning a new language',
  ]

  return (
    <div className="h-[84vh] flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto p-5 flex flex-col items-center w-full">
        {responseText ? (
          <div className="w-full bg-[#1f1f1f] text-white p-5 rounded-3xl whitespace-pre-wrap max-h-[36rem] overflow-y-auto custom-scrollbar">
            <div className="text-lg leading-relaxed space-y-4">
              {lastPrompt && (
                <div className="mb-4">
                  <h2 className="p-3 font-extra-bold text-2xl rounded-md text-white">
                    {lastPrompt}
                  </h2>
                </div>
              )}
              <div className="flex flex-col">
                <h2 className="font-semibold text-lg mb-2">
                  Answer | Gemini 1.5 Flash Model
                </h2>
                {isTyping ? (
                  <Typewriter
                    text={responseText}
                    speed={20}
                    onComplete={() => setIsTyping(false)}
                  />
                ) : (
                  renderResponseContent(responseText)
                )}
              </div>
            </div>
          </div>
        ) : error ? (
          <div className="w-full bg-red-600 text-white p-5 rounded-xl">
            <p>{error}</p>
          </div>
        ) : (
          // If there is no response then render the logo and the ByteBite text initially
          <>
            <img src={logo} alt="logo" className="h-48 w-auto mb-3" />
            <div className="flex-grow flex justify-center">
              <span className="text-gradient text-2xl md:text-5xl font-bold tracking-wide">
                ByteBite
              </span>
            </div>
            <div className="w-full mb-3 grid grid-cols-2 gap-2">
              {promptExamples.map((example, index) => (
                <div
                  key={index}
                  className="bg-[#2f2f2f] p-3 rounded-xl cursor-pointer hover:bg-[#3f3f3f] transition-colors"
                  onClick={() => setInputValue(example)}
                >
                  <p className="text-white">{example}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Input and send button */}
      <div className="w-full p-5 flex justify-center">
        <div className="w-full max-w-3xl flex items-end">
          <TextArea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onPressEnter={(e) => {
              e.preventDefault()
              handleSend()
            }}
            placeholder="Type your message here..."
            autoSize={{ minRows: 1, maxRows: 5 }}
            className="flex-grow mr-2 rounded-xl resize-none p-2.5 text-base placeholder-white custom-scrollbar bg-[#2f2f2f] text-white hover:bg-[#2f2f2f] focus:bg-[#2f2f2f] focus:border-[#2f2f2f]"
          />
          <Button
            type="primary"
            icon={isLoading ? <LoadingOutlined /> : <SendOutlined />}
            onClick={handleSend}
            className="h-10 rounded-xl bg-[#2f2f2f] border-[#2f2f2f] hover:bg-[#3f3f3f] hover:border-[#3f3f3f]"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Chatpage
