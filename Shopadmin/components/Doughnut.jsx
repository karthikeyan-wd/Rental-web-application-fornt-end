import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Hired", "Pending", "Cancelled"],
    datasets: [
      {
        data: [58, 24, 18],
        backgroundColor: [
          "#326CEC", // blue-500 → Hired
          "#FF4545", // orange-500 → Pending
          "#B4B4B8", // teal-500 → Cancelled
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
        hoverOffset: 5,
      },
    ],
  };

  const config = {
    // maintainAspectRatio: false,
    // aspectRatio: 8 ,
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    cutout: "70%",
  };

  return (
    <div className="w-[300px] h-[500px]  p-6 bg-white rounded-lg shadow-[0px_0px_6px_2px_rgba(0,_0,_0,_0.1)] font-mono  font-semibold ">
      <div className="flex justify-center">
        <Doughnut data={data} options={config} />
      </div>

      {/* Custom Legend */}
      <div className="mt-4 space-y-2">
        {data.labels.map((label, id) => (
          <div key={id} className="flex items-center justify-between">
            <span className="text-gray-700">{label}</span>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">
                {data.datasets[0].data[id]}%
              </span>

              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[id],
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
