import React from "react";

type HOC<P> = (Component: React.FC<P>) => React.FC<P>;

export function composeHOCs<P>(...hocs: HOC<P>[]) {
  return (BaseComponent: React.FC<P>) => {
    return hocs.reduceRight((AccumulatedComponent, hoc) => {
      return hoc(AccumulatedComponent);
    }, BaseComponent);
  };
}
