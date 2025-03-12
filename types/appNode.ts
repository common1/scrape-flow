import { Node } from "@xyflow/react";
import { AnyZodTuple } from "zod";
import { TaskType } from "@/types/task";

export interface AppNodeData {
    type: TaskType;
    inputs: Record<string, string>;
    [key: string]: any;
}

export interface AppNode extends Node {
    data: AppNodeData;
}