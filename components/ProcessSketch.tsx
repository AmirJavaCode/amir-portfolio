const diagrams = [
  <g key="prepare">
    <path
      d="M86 18c-2 6-9 13-9 19a9 9 0 0 0 18 0c0-6-7-13-9-19Z"
      fill="#a4c9d2"
    />
    <path d="M58 60q28-8 55 0" stroke="#b8c9d6" fill="none" />
  </g>,
  <g key="spin">
    <path d="M40 60h100v5H40z" fill="#c6a4e9" />
    <path
      d="M43 49c-24-12 10-21 48-21s61 13 40 20m-2-8 2 9 9-2"
      fill="none"
      stroke="#c4b0e3"
      strokeWidth="2"
    />
  </g>,
  <g key="bake">
    <path d="M40 60h100v5H40z" fill="#c6a4e9" />
    <path d="M31 76h118v6H31z" fill="#af816e" />
    {[62, 89, 116].map((x) => (
      <path
        key={x}
        d={`M${x} 51q-7-7 0-15t0-15`}
        fill="none"
        stroke="#d6ad94"
        strokeWidth="2"
      />
    ))}
  </g>,
  <g key="expose">
    <path d="M40 60h100v5H40z" fill="#c6a4e9" />
    <path d="M40 47h100v4H40z" fill="#acabbe" />
    {[41, 79, 117].map((x) => (
      <rect key={x} x={x} y="51" width="22" height="4" fill="#555268" />
    ))}
    {[63, 91, 119].map((x) => (
      <path
        key={x}
        d={`M${x} 18v22m-4-6 4 6 4-6`}
        fill="none"
        stroke="#d6befb"
        strokeWidth="1.7"
      />
    ))}
  </g>,
  <g key="develop">
    {[40, 78, 116].map((x) => (
      <rect key={x} x={x} y="56" width="24" height="9" fill="#c6a4e9" />
    ))}
    <path
      d="M40 41q10-7 20 0t20 0t20 0t20 0t20 0"
      fill="none"
      stroke="#9fc3c8"
      strokeWidth="2"
    />
  </g>,
  <g key="inspect">
    {[40, 78, 116].map((x) => (
      <rect key={x} x={x} y="56" width="24" height="9" fill="#c6a4e9" />
    ))}
    <path d="M72 12h35v15l-9 11H81l-9-11Z" fill="#596170" stroke="#bdc5cc" />
    <path
      d="m83 40-7 12h27l-8-12"
      stroke="#a7b8c7"
      strokeDasharray="2 3"
      fill="none"
    />
  </g>,
];
export function ProcessSketch({ index }: { index: number }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 180 90" className="process-sketch">
      <rect x="40" y="65" width="100" height="6" rx="1" fill="#7b8292" />
      {diagrams[index]}
    </svg>
  );
}
