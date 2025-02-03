"use client";

import React from "react";
import { Card, CardBody, CardFooter, Checkbox, cn } from "@nextui-org/react";

const ActionCard = React.forwardRef(
  ({color, title, icon, description, children, isCompleted, className, ...props}, ref) => {
    const colors = React.useMemo(() => {
      switch (color) {
        case "primary":
          return {
            card: "border-default-200",
            iconWrapper: "bg-primary-50 border-primary-100",
            icon: "text-primary",
          };
        case "secondary":
          return {
            card: "border-secondary-100",
            iconWrapper: "bg-secondary-50 border-secondary-100",
            icon: "text-secondary",
          };
        case "warning":
          return {
            card: "border-warning-500",
            iconWrapper: "bg-warning-50 border-warning-100",
            icon: "text-warning-600",
          };
        case "danger":
          return {
            card: "border-danger-300",
            iconWrapper: "bg-danger-50 border-danger-100",
            icon: "text-danger",
          };

        default:
          return {
            card: "border-default-200",
            iconWrapper: "bg-default-50 border-default-100",
            icon: "text-default-500",
          };
      }
    }, [color]);

    return (
      <Card
        ref={ref}
        isFooterBlurred
        isPressable
        isBlurred
        isDisabled={!isCompleted}
        className={cn("border-small", colors?.card, className)}
        shadow="sm"
        {...props}
      >
        <CardBody className="flex h-full flex-row items-start gap-3 p-2">
            <Checkbox color={isCompleted ? 'success' : 'danger'} defaultSelected={true} variant='light'  className='bg-transparent'></Checkbox>
          <div className={cn("item-center flex rounded-medium border p-2", colors?.iconWrapper)}>
                { icon }
          </div>
          <div className="flex flex-col">
            <p className="text-small text-black mt-2 text-center"><i>{description || children}</i></p>
          </div>
         
        </CardBody>
      
      </Card>
    );
  },
);

ActionCard.displayName = "ActionCard";

export default ActionCard;