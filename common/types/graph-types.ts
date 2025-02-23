import { DoubleTypes, TKeyValue } from "./basic-types";

export interface IDuplicateGraphNode {
    path: string;
}

export type TFileValue = string;
export type TFileGroup = TFileValue[];

/**
 * Represents a group of edges in the duplicate graph.
 * Each edge group contains file groups and keys.
 */
export interface IEdgeGroup {
    fileGroups: TFileGroup[];
    keys: TKeyValue[];
}

/**
 * Represents the detailed information of a duplicate graph.
 * Contains edge groups and a mapping of key values to their corresponding types.
 */
export interface IDuplicateGraph {
    edgeGroups: IEdgeGroup[];
    typeByKey: Record<TKeyValue, DoubleTypes>;
}

export interface IDuplicateGroupSummary {
    types: DoubleTypes[];
    files: TFileValue[];
}

export interface IDuplicateGroup {
    summary: IDuplicateGroupSummary;
    detailed: IDuplicateGraph;
}
