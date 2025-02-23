import { LocalizedErrors } from "../errors";
import { TIndex } from "../indexer/types";
import { DoubleTypes, TTicketId } from "./basic-types";
import { IDuplicateGroup } from "./graph-types";

/**
 * Represents information about a directory, including the number of files and the total size in megabytes.
 */
export interface IDirectoryInfo {
    filesCount: number;
    sizeMb: number;
}

/**
 * Represents the result of starting a search, including the search ticket ID.
 */
export interface IStartResult {
    searchTicketId: TTicketId;
}

/**
 * Represents the parameters for a directory, including the target path.
 */
export interface IDirectoryParams {
    targetPath: string;
}

/**
 * Represents the parameters for a search, including whether to search by MD5 and TGI.
 */
export interface ISearchParams {
    searchMd5: boolean;
    searchTgi: boolean;
}

/**
 * Represents a description of a file, including its path.
 */
export interface IFileDescription {
    path: string;
}

/**
 * Represents additional information about a file, including its modified date.
 */
export interface IFileAdditionalInfo {
    modifiedDate: Date;
}

/**
 * Represents a file duplicate, including its path and duplicate checks.
 */
export interface IFileDuplicate extends IFileDescription {
    duplicateChecks: {
        [K in keyof typeof DoubleTypes]: boolean;
    };
}

/**
 * Represents an entry in the search results, including the original file and its duplicates.
 */
export interface ISearchEntry {
    original: IFileDescription;
    duplicates: IFileDuplicate[];
}

/**
 * Enum representing the reasons for skipping a file during the search process.
 */
export enum SkipReasons {
    UnsupportedSimsVersion,
    NotPackage,
    UnableToParse,
}

/**
 * Represents a skipped file, including its path and the reason for skipping.
 */
export interface ISkippedFile extends IFileDescription {
    reason: SkipReasons;
}

/**
 * Represents the result of indexing, including the ticket ID, index, skipped files, and file information.
 */
export interface IIndexResult {
    ticketId: TTicketId;
    index: TIndex;
    skips: ISkippedFile[];
    fileInfos: Record<string, IFileAdditionalInfo>;
}

/**
 * Represents the result of a search, including the ticket ID, index, skipped files, file information, and duplicates.
 */
export interface ISearchResult extends IIndexResult {
    duplicates: IDuplicateGroup[];
}

/**
 * Represents the progress of a search, including the ticket ID and relative progress.
 */
export interface ISearchProgress {
    ticketId: TTicketId;
    progressRelative: number;
}

/**
 * Represents an error that occurred during the search process, including the error and ticket ID.
 */
export interface ISearchError {
    error: LocalizedErrors | Error;
    ticketId: TTicketId;
}

/**
 * Represents the parameters for moving files, including the file paths, search directory, and target directory.
 */
export interface IMoveParams {
    filePaths: string[];
    searchDir: string;
    targetDir: string;
}

/**
 * Represents the parameters for opening a file in Sims Studio, including the file path and Sims Studio path.
 */
export interface IOpenInStudioParams {
    filePath: string;
    simsStudioPath: string;
}

/**
 * Enum representing the types of index changes.
 */
export enum IndexChanges {
    Remove = "Remove",
}

/**
 * Represents an update to the index, where the key is the path and the value is the index change.
 */
export interface IIndexUpdate {
    [path: string]: IIndexChange;
}

/**
 * Represents a change to the index, including the type of change.
 */
export interface IIndexChange {
    change: IndexChanges;
}
