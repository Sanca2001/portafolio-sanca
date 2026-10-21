import type { DetailedHTMLProps, HTMLAttributes } from "react";

// Permite usar <ion-icon name="..."> en TSX
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        name?: string;
      };
    }
  }
}
