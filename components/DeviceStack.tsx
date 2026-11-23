export default function DeviceStack() {
  return (
    <figure className="device-stack">
      <h3>Device cross-section</h3>
      <svg
        viewBox="0 0 520 184"
        role="img"
        aria-label="PbS quantum dots on graphene between two electrical contacts, above silicon dioxide on a silicon substrate."
      >
        <g fontFamily="system-ui, sans-serif" fontSize="15" fill="#dddde2">
          <rect x="20" y="124" width="287" height="33" fill="#626575" />
          <rect x="20" y="105" width="287" height="19" fill="#9c98af" />
          <rect x="20" y="100" width="287" height="5" fill="#87ccbd" />
          <path d="M20 83h54v17H20zm233 0h54v17h-54z" fill="#b8a78e" />
          {[88, 112, 139, 168, 191, 215, 239].map((x, i) => (
            <circle
              key={x}
              cx={x}
              cy={93 - (i % 2)}
              r={7 + (i % 2)}
              fill="#91cab5"
              stroke="#c3e5d7"
            />
          ))}
          <g fill="none" stroke="#aaa8b2" strokeWidth="1">
            <path d="m168 84 22-34h128M289 88l28-17h14M299 102h30M307 115h22M307 141h22" />
          </g>
          <text x="337" y="53">
            PbS quantum dots
          </text>
          <text x="337" y="76">
            Contact
          </text>
          <text x="337" y="105">
            Graphene
          </text>
          <text x="337" y="122">
            SiO₂
          </text>
          <text x="337" y="146">
            Silicon substrate
          </text>
        </g>
      </svg>
      <figcaption>
        Schematic cross-section. Layer thicknesses and dot spacing are
        illustrative.
      </figcaption>
    </figure>
  );
}
