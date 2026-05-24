"use client";

import { createContext, useContext } from "react";
import type {
    ArticleEditorContextValue,
    ArticleEditorProviderProps,
} from "./articles-editor-types";

const ArticleEditorContext = createContext<ArticleEditorContextValue | null>(null);

export function ArticleEditorProvider({ value, children }: ArticleEditorProviderProps) {
    return (
        <ArticleEditorContext.Provider value={value}>
            {children}
        </ArticleEditorContext.Provider>
    );
}

export function useArticleEditor() {
    const context = useContext(ArticleEditorContext);

    if (!context) {
        throw new Error("useArticleEditor must be used inside ArticleEditorProvider");
    }

    return context;
}
