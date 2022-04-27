import { useQuery } from "react-query";

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery(["ohlcv", coinId]);
  return <h1>Chart</h1>;
}

export default Chart;
