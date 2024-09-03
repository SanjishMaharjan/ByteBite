import { Button, Card } from 'antd'
import React, { useEffect, useState } from 'react'
export interface ChatHistory {
  id: string
  title?: string
  timestamp: number
  messages: Array<{
    /* Define message structure */
  }>
}

const dummyChatHistory: ChatHistory[] = [
  {
    id: '1',
    title: 'Discussion on AI',
    timestamp: Date.now() - 86400000, // 1 day ago
    messages: [
      {
        sender: 'User',
        content: 'What is AI?',
        timestamp: Date.now() - 86350000,
      },
      {
        sender: 'Bot',
        content: 'AI stands for Artificial Intelligence.',
        timestamp: Date.now() - 86300000,
      },
    ],
  },
  {
    id: '2',
    title: 'Chat about Web Development',
    timestamp: Date.now() - 43200000, // 12 hours ago
    messages: [
      {
        sender: 'User',
        content: 'What is React?',
        timestamp: Date.now() - 43150000,
      },
      {
        sender: 'Bot',
        content: 'React is a JavaScript library for building user interfaces.',
        timestamp: Date.now() - 43100000,
      },
    ],
  },
  {
    id: '3',
    title: 'General Inquiry',
    timestamp: Date.now() - 21600000, // 6 hours ago
    messages: [
      {
        sender: 'User',
        content: 'Tell me a joke.',
        timestamp: Date.now() - 21550000,
      },
      {
        sender: 'Bot',
        content:
          'Why did the chicken join a band? Because it had the drumsticks!',
        timestamp: Date.now() - 21500000,
      },
    ],
  },
]
const HistoryPage: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([])

  useEffect(() => {
    // Fetch chat history from your API
    const fetchChatHistory = async () => {
      try {
        const response = await fetch('/api/chat-history') // Replace with your actual API endpoint
        const data = await response.json()
        setChatHistory(data)
      } catch (error) {
        console.error('Error fetching chat history:', error)
      }
    }

    fetchChatHistory()
  }, [])

  return (
    <div className="history-page">
      <h1 className="text-3xl font-bold">History</h1>
      {dummyChatHistory.map((chat) => (
        <div key={chat.id} className="p-4 rounded-md ">
          <div className="flex flex-col justify-between ">
            <Card className="bg-[#1f1f1f] text-white cursor-pointer flex flex-col justify-between hover:bg-[#2f2f2f]">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">
                  {chat.title || `Chat ${chat.id}`}
                </h2>
                <p>Date: {new Date(chat.timestamp).toLocaleString()}</p>
                <p>Messages: {chat.messages.length}</p>
              </div>
              {/* Add a link or button to view full chat details if needed */}
              <div className="flex flex-row justify-end gap-2">
                <Button>View</Button>
                <Button type="primary" danger>
                  Delete
                </Button>
              </div>
            </Card>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HistoryPage
