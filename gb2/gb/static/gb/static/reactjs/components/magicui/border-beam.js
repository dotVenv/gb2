import React from 'react';
import { cn } from '@nextui-org/react';

const BorderBeam = ({ className}) => {
  var size = 200;
  var duration = 15;
  var anchor = 90;
  var borderWidth = 2.5;
  var colorFrom = "#ffaa40";
  var colorTo = "#9c40ff";
  var delay = 0;
  return (
    (<div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${2}s`
        }
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        // mask styles
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        // pseudo styles
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )} />)
  );
};
export { BorderBeam };