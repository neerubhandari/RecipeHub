"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

export default function ServingsSelector({
  setNumServings,
  numServings,
  className,
}: any) {
  const handleValueChange = (numServingsString: string) => {
    setNumServings(parseInt(numServingsString));
  };

  return (
    <Select
      value={numServings.toString()}
      onValueChange={handleValueChange}
      defaultValue={numServings.toString()}
    >
      <SelectTrigger className={cn("", className)}>
        <SelectValue placeholder="1" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1 Serving</SelectItem>
        <SelectItem value="2">2 Servings</SelectItem>
        <SelectItem value="3">3 Servings</SelectItem>
        <SelectItem value="4">4 Servings</SelectItem>
        <SelectItem value="5">5 Servings</SelectItem>
        <SelectItem value="6">6 Servings</SelectItem>
        <SelectItem value="7">7 Servings</SelectItem>
        <SelectItem value="8">8 Servings</SelectItem>
        <SelectItem value="9">9 Servings</SelectItem>
        <SelectItem value="10">10 Servings</SelectItem>
      </SelectContent>
    </Select>
  );
}
