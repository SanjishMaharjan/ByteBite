import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import logo from '../../../public/logos/BytebotLight.png'

const { TextArea } = Input

const Chatpage: React.FC = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }

  const handleSend = () => {
    console.log('Sending message:', inputValue)
    setInputValue('')
  }

  const promptExamples = [
    'Create a Renaissance-style painting of a futuristic cityscape',
    'Design a logo for an eco-friendly tech startup',
    'Write a short story about a time-traveling chef',
    'Compose a haiku about artificial intelligence',
  ]

  return (
    <div className="h-[84vh] flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto p-5 flex flex-col items-center w-full">
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
            >
              <p className="text-white">{example}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full p-5 flex justify-center">
        <div className="w-full max-w-3xl flex items-end">
          <TextArea
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            autoSize={{ minRows: 1, maxRows: 5 }}
            className="flex-grow mr-2 rounded-xl resize-none p-2.5 text-base placeholder-white bg-[#2f2f2f] text-white hover:bg-[#2f2f2f] focus:bg-[#2f2f2f] focus:border-[#2f2f2f]"
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSend}
            className="h-10 rounded-xl bg-[#2f2f2f] border-[#2f2f2f] hover:bg-[#3f3f3f] hover:border-[#3f3f3f]"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Chatpage
