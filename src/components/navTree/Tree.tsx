import { Tree as TreeVirtual } from "react-arborist";
import type { ITreeChildren, ITreeData } from "./types";
import { StyledTreeContainer } from "./styles";
import useResizeObserver from "use-resize-observer";

export const Tree = ({ data, childrenNode }: { data: ITreeData; childrenNode: ITreeChildren }) => {
  const { ref, width, height } = useResizeObserver();

  return (
    <StyledTreeContainer ref={ref}>
      <TreeVirtual
        initialData={data}
        openByDefault={false}
        width={width}
        height={height}
        overscanCount={1}
        idAccessor={(node) => node.data.id}
      >
        {childrenNode}
      </TreeVirtual>
    </StyledTreeContainer>
  );
};
