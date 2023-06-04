import "./App.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  Line,
  LineChart,
} from "recharts";

function App() {
  const data = [
    { name: "Facebook", value: 200000 },
    { name: "Instagram", value: 150000 },
    { name: "Twitter", value: 300000 },
    { name: "Telegram", value: 50000 },
  ];

  let dataSin = [];

  for (let i = -10; i < 10; i++) {
    const x = Math.sin(i) / i;
    dataSin.push({ name: `${i}`, point: x });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Social Media User</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}>
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
        <LineChart
          width={500}
          height={300}
          data={dataSin}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="point"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default App;
