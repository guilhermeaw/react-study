import React, { useState, useCallback } from 'react';

import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Container, AccordionHeader, AccordionContent } from './styles';

interface AccordionProps {
  title: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);
  
  return (
    <Container>
      <AccordionHeader onClick={handleOpen}>
        <div>
          <img height="40px" src="https://img.icons8.com/plasticine/2x/recurring-appointment-exception.png" alt=""/>
          <h2>{title}</h2>
        </div>
        {open ? <FiChevronUp /> : <FiChevronDown />}
      </AccordionHeader>
      <AccordionContent open={open}>
        {open && children}
      </AccordionContent>
    </Container>
  );
}

export default Accordion;