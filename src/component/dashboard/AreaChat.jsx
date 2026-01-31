"use client";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AiOutlineCaretDown } from "react-icons/ai";
const AreaChartComponent = () => {
  const chartData = [
    { day: "Mon", calls: 45 },
    { day: "Tue", calls: 52 },
    { day: "Wed", calls: 61 },
    { day: "Thu", calls: 80 },
    { day: "Fri", calls: 75 },
    { day: "Sat", calls: 85 },
    { day: "Sun", calls: 65 },
  ];

  return (
    <main className="px-4 lg:px-8">
      <div className="w-full bg-[#111B3C] rounded-lg border border-blue-900/30 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className=" text-lg font-semibold">Call Trends - This Week</h2>
            <p className="text-gray-400 text-sm mt-1">Total: 472 calls</p>
          </div>
          <button className="bg-[#1a2942] px-4 py-2 rounded-md text-sm hover:bg-[#243552] transition-colors flex items-center gap-1">
            This Week <AiOutlineCaretDown />
          </button>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1E40AF" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#1e3a5f"
              opacity={0.3}
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              tick={{ fill: "#9CA3AF", fontSize: 13 }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 13 }}
              tickFormatter={(value) => value}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "1px solid #374151",
                borderRadius: "8px",
                color: "#fff",
              }}
              labelStyle={{ color: "#9CA3AF" }}
            />

            <Area
              dataKey="calls"
              type="monotone"
              stroke="#3B82F6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorCalls)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default AreaChartComponent;
