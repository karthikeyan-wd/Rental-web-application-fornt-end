import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 10500, target: 10000 },
  { month: "Feb", revenue: 12300, target: 12000 },
  { month: "Mar", revenue: 15000, target: 14000 },
  { month: "Apr", revenue: 14200, target: 15000 },
  { month: "May", revenue: 16800, target: 16000 },
  { month: "Jun", revenue: 18500, target: 17000 },
];

// Total calculation
const calculateTotals = () => ({
  totalRevenue: data.reduce((sum, item) => sum + item.revenue, 0),
  totalTarget: data.reduce((sum, item) => sum + item.target, 0),
});

// INR currency formatter
const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const RevenueBarChart = () => {
  const [viewMode, setViewMode] = useState("monthly");
  const { totalRevenue, totalTarget } = calculateTotals();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload?.length) {
      const revenue = payload[0].value;
      const target = payload[1].value;
      return (
        <div className="bg-white p-4 shadow-md border border-gray-200 rounded text-sm">
          <p className="font-semibold text-gray-800">{label}</p>
          <p style={{ color: "#FF4545" }}>Revenue: {formatINR(revenue)}</p>
          <p style={{ color: "#326CEC" }}>Target: {formatINR(target)}</p>
          <p className="mt-1 font-medium text-gray-700">
            Difference: {formatINR(revenue - target)}
          </p>
        </div>
      );
    }
    return null;
  };

  const getFilteredData = () => {
    if (viewMode === "quarterly") {
      return [
        {
          month: "Q1",
          revenue: data.slice(0, 3).reduce((sum, d) => sum + d.revenue, 0),
          target: data.slice(0, 3).reduce((sum, d) => sum + d.target, 0),
        },
        {
          month: "Q2",
          revenue: data.slice(3, 6).reduce((sum, d) => sum + d.revenue, 0),
          target: data.slice(3, 6).reduce((sum, d) => sum + d.target, 0),
        },
      ];
    }
    return data;
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5" }} className="px-6 py-4 rounded-lg shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Rental Revenue
          </h2>
          <p className="text-sm text-gray-500">Financial Year 2024–25</p>
        </div>

        <div className="flex border border-gray-300 rounded overflow-hidden text-sm">
          <button
            onClick={() => setViewMode("monthly")}
            className={`px-3 py-1 transition ${
              viewMode === "monthly"
                ? "text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
            style={{ backgroundColor: viewMode === "monthly" ? "#FF4545" : "" }}
          >
            Monthly
          </button>
          <button
            onClick={() => setViewMode("quarterly")}
            className={`px-3 py-1 transition ${
              viewMode === "quarterly"
                ? "text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
            style={{ backgroundColor: viewMode === "quarterly" ? "#FF4545" : "" }}
          >
            Quarterly
          </button>
        </div>
      </div>

      {/* Revenue Summary */}
      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div style={{ backgroundColor: "#FFF6F6" }} className="border border-gray-200 rounded-md p-3 text-center shadow-sm">
          <p className="text-gray-600 mb-1">Total Revenue</p>
          <p style={{ color: "#FF4545" }} className="text-lg font-semibold">
            {formatINR(totalRevenue)}
          </p>
        </div>
        <div style={{ backgroundColor: "#F6F8FF" }} className="border border-gray-200 rounded-md p-3 text-center shadow-sm">
          <p className="text-gray-600 mb-1">Total Target</p>
          <p style={{ color: "#326CEC" }} className="text-lg font-semibold">
            {formatINR(totalTarget)}
          </p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="h-80 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={getFilteredData()}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={{ stroke: "#D1D5DB" }}
              tickLine={{ stroke: "#D1D5DB" }}
            />
            <YAxis
              tickFormatter={(v) => `${v / 1000}k`}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={{ stroke: "#D1D5DB" }}
              tickLine={{ stroke: "#D1D5DB" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar
              dataKey="revenue"
              name="Revenue"
              fill="#FF4545"
              barSize={viewMode === "quarterly" ? 50 : 28}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="target"
              name="Target"
              fill="#326CEC"
              barSize={viewMode === "quarterly" ? 50 : 28}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="text-right mt-4 text-xs text-gray-500">
        Last updated: April 3, 2025
      </div>
    </div>
  );
};

export default RevenueBarChart;