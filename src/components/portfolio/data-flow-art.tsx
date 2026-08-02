const nodes = [
  { x: 60, y: 70, label: "Sources" },
  { x: 60, y: 170, label: "Streams" },
  { x: 60, y: 270, label: "APIs" },
  { x: 220, y: 170, label: "Airflow" },
  { x: 370, y: 100, label: "PySpark" },
  { x: 370, y: 240, label: "AWS" },
  { x: 500, y: 170, label: "Snowflake" },
];

const edges = [
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [4, 6],
  [5, 6],
];

export function DataFlowArt() {
  return (
    <svg
      viewBox="0 0 560 340"
      role="img"
      aria-label="Animated diagram of a data pipeline flowing from sources through orchestration and processing into a cloud data warehouse"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand)" />
          <stop offset="100%" stopColor="var(--brand-glow)" />
        </linearGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const from = nodes[a];
        const to = nodes[b];
        const d = `M ${from.x} ${from.y} C ${(from.x + to.x) / 2} ${from.y}, ${(from.x + to.x) / 2} ${to.y}, ${to.x} ${to.y}`;
        return (
          <g key={i}>
            <path d={d} fill="none" stroke="var(--border)" strokeWidth={2} />
            <path
              d={d}
              fill="none"
              stroke="url(#flow)"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeDasharray="12 88"
              className="animate-dash"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          </g>
        );
      })}

      {nodes.map((node, i) => (
        <g key={node.label}>
          <circle
            cx={node.x}
            cy={node.y}
            r={16}
            fill="var(--card)"
            stroke="url(#flow)"
            strokeWidth={2}
          />
          <circle
            cx={node.x}
            cy={node.y}
            r={4}
            fill="var(--brand-glow)"
            className="animate-pulse-node"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
          <text
            x={node.x}
            y={node.y + 34}
            textAnchor="middle"
            className="fill-[var(--muted-foreground)] font-mono text-[11px]"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
