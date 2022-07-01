import React, { useState } from "react";
import type { ReactNode } from "react";

import "./Accordion.scss";

export interface AccordionProps {
  title: ReactNode;
  /**
   * Class name for tab content
   */
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  className,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="accordion">
      <div
        className={`accordion-title ${className ?? ""}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {title}
      </div>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
