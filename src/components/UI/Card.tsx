/** 
 * Card component
 * Used to wrap other components
 * Becuase of react 18 I need to define the props type, to be able to read children props.
*/

import React from "react";
import classes from "./Card.module.css";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Card: React.FC<Props> = (props) => {
  const styles = classes.card + " " + props.className;
  return <div className={styles}>{props.children}</div>;
};

export default Card;
