import { useCreateBlockNote } from "@blocknote/react";
// Or, you can use ariakit, shadcn, etc.
import { BlockNoteView } from "@blocknote/mantine";
import { ko } from "@blocknote/core/locales";
// Default styles for the mantine editor
import "@blocknote/mantine/style.css";
// Include the included Inter font
import "@blocknote/core/fonts/inter.css";
import type { Block } from "@blocknote/core";

interface Props {
  setContent: (content: Block[]) => void;
}

export const AppEditor = ({ setContent }: Props) => {
  const editor = useCreateBlockNote({
    dictionary: ko,
  });
  // Render the editor
  // editor.document를 사용하면, block note에 작성하는 내용이 setContent에 저장됨
  return <BlockNoteView editor={editor} onChange={() => setContent(editor.document)} />;
};
