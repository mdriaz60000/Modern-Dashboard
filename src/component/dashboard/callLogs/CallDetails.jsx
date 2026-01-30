'use client'

import { BsFileEarmarkText } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'

const CallDetails = () => {
  const callData = {
    phoneNumber: '+1 (555) 123-4567',
    duration: '4:32',
    dateTime: '2025-12-16 10:45 AM',
    issueType: 'Screen',
    callType: 'AI Resolved',
    outcome: 'Quote provided'
  }

  const transcript = [
    {
      speaker: 'AI Assistant',
      message: 'Thank you for calling UBreakiFix! How can I help you today?',
      color: 'text-green-400'
    },
    {
      speaker: 'Customer',
      message: 'Hi, my iPhone 13 screen is cracked. How much would it cost to repair?',
      color: 'text-[#51A2FF]'
    },
    {
      speaker: 'AI Assistant',
      message: 'I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor and comes with a 90-day warranty. Would you like to book an appointment?',
      color: 'text-[#05DF72]'
    },
    {
      speaker: 'Customer',
      message: 'Yes, please! When are you available?',
      color: 'text-[#51A2FF]'
    },
    {
      speaker: 'AI Assistant',
      message: 'Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?',
      color: 'text-[#05DF72]'
    }
  ]

  return (
    <div className=" ">
      <div className=" bg-[#111B3C]  py-6">
        <h1 className=" text-[20px] px-2 mb-6">Call Details</h1>

        <div className=" border border-blue-500/30 rounded-lg p-6">
         
          <div className="grid grid-cols-2 gap-6 mb-6">
         
            <div>
              <p className="text-gray-400 text-sm mb-1">Phone Number</p>
              <p className="font-medium">{callData.phoneNumber}</p>
            </div>

         
            <div>
              <p className="text-gray-400 text-sm mb-1">Duration</p>
              <p className=" font-medium">{callData.duration}</p>
            </div>

           
            <div>
              <p className="text-gray-400 text-sm mb-1">Date & Time</p>
              <p className=" font-medium">{callData.dateTime}</p>
            </div>

         
            <div>
              <p className="text-gray-400 text-sm mb-1">Issue Type</p>
              <p className=" font-medium">{callData.issueType}</p>
            </div>
          </div>

          
          <div className="mb-6">
            <p className="text-gray-400 text-sm mb-2">Call Type</p>
            <span className="bg-green-500/20 text-[#05DF72] text-sm px-3 py-1 rounded inline-block">
              {callData.callType}
            </span>
          </div>

         
          <div className="mb-6">
            <p className="text-gray-400 text-sm mb-1">Outcome</p>
            <p className="text-white font-medium">{callData.outcome}</p>
          </div>

          
          <button className="w-full bg-linear-to-r from-[#AD46FF33] to-[#F6339A33] py-3 rounded-lg flex items-center justify-center gap-2 transition-colors mb-6">
            <FaPlay className="w-4 h-4" />
            Play Audio Recording
          </button>

         
          <div className="border-t border-gray-700 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <BsFileEarmarkText className="text-blue-400 w-5 h-5" />
              <h2 className="font-semibold text-lg">Conversation Transcript</h2>
            </div>

            <div className="space-y-4 bg-[#1D293D80]">
              {transcript.map((entry, index) => (
                <div key={index}>
                  <p className={`${entry.color} font-semibold text-sm mb-1`}>
                    {entry.speaker}:
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed pl-4">
                    {entry.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallDetails