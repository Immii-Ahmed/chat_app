import React from 'react'
import AsideBar from './AsideBar'
import CurrenConversation from './CurrentConversations'
import Messages from './Messages'

const Chat = () => {
  return (
      <>
          <div className="grid grid-cols-8 gap-4 h-dvh bg-gray-100">
          <div className="h-full col-span-1">
              <AsideBar/>
          </div>
          <div className="col-span-2">
              <CurrenConversation/>
          </div>
          <div className="col-span-5">
              <Messages/>
          </div>
              
          </div>
      
      </>
  )
}

export default Chat
