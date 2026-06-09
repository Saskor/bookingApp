import type { NodeRendererProps } from "react-arborist";
import { ITimeSlot } from "types";

export type ITreeDataItem = {
  data: { label: string; id: string };
  info?: ITimeSlot;
  children: ITreeDataItem[];
};
export type ITreeData = ITreeDataItem[];

export type ITreeChildren = ({ node, style }: NodeRendererProps<ITreeDataItem>) => JSX.Element;
