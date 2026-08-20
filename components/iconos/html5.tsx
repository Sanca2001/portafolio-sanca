import type { SVGProps } from "react";

const Html5 = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 452 520" preserveAspectRatio="xMidYMid">
    <path fill="#E34F26" d="M41 460 0 0h451l-41 460-185 52z" />
    <path fill="#EF652A" d="M226 472 375 431l35-394H226z" />
    <path
      fill="#ECEDEE"
      d="M226 208h-75l-5-58h80V94H84l15 171h127v-57zm0 147-64-17-4-45h-56l7 89 117 32v-59z"
    />
    <path
      fill="#FFF"
      d="M226 265h69l-7 73-62 17v59l115-32 16-174H226v57zm0-171v56h136l5-56H226z"
    />
  </svg>
);

export { Html5 };