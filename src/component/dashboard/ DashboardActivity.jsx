'use client'

const DashboardActivity = () => {
  const recentActivities = [
    {
      id: 1,
      text: "AI booked appointment for iPhone 15 screen repair",
      time: "2 min ago",
      color: "bg-green-500"
    },
    {
      id: 2,
      text: "Warm transfer to technician - Software issue",
      time: "5 min ago",
      color: "bg-orange-500"
    },
    {
      id: 3,
      text: "Quote provided for iPad battery replacement",
      time: "8 min ago",
      color: "bg-green-500"
    },
    {
      id: 4,
      text: "Call dropped after 12 seconds",
      time: "11 min ago",
      color: "bg-red-500"
    }
  ]

  const topRepairRequests = [
    { name: "Screen Repair", requests: 156, percentage: 100 },
    { name: "Battery Replacement", requests: 89, percentage: 57 },
    { name: "Back Glass Repair", requests: 67, percentage: 43 },
    { name: "Software Issues", requests: 45, percentage: 29 }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
     
      <div className="bg-[#111B3C] rounded-lg border border-blue-900/30 p-6">
        <h2 className="text-white text-lg font-semibold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={`${activity.color} w-2 h-2 rounded-full mt-2 flex-shrink-0`}></div>
              <div className="flex-1">
                <p className="text-gray-200 text-sm leading-relaxed">{activity.text}</p>
                <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Repair Requests Section */}
      <div className="bg-[#111B3C] rounded-lg border border-blue-900/30 p-6">
        <h2 className="text-white text-lg font-semibold mb-6">Top Repair Requests</h2>
        <div className="space-y-5">
          {topRepairRequests.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-200 text-sm">{item.name}</span>
                <span className="text-gray-400 text-sm">{item.requests} requests</span>
              </div>
              <div className="w-full bg-[#1a2942] rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-cyan-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardActivity