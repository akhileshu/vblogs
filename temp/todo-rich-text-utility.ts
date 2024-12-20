Here are additional utility hotkeys that can enhance the authoring experience for a blog's rich text editor. These features focus on improving productivity, better formatting, and time-saving tools for authors:

---

### **1. Duplicate Current Line or Selection**
**Hotkey:** `Ctrl+D`  
**Purpose:** Quickly duplicate the current line or selected text.

```javascript
if (isHotkey("ctrl+d", event)) {
  event.preventDefault();
  const text = Editor.string(editor, editor.selection);
  Transforms.insertText(editor, `\n${text}`);
}
```

---

### **2. Insert Horizontal Rule**
**Hotkey:** `Ctrl+Shift+H`  
**Purpose:** Insert a horizontal line (`<hr />`) to separate sections.

```javascript
if (isHotkey("ctrl+shift+h", event)) {
  event.preventDefault();
  Transforms.insertNodes(editor, {
    type: "horizontal-rule",
    children: [{ text: "" }],
  });
}
```

---

### **3. Toggle Header Levels**
**Hotkey:** `Ctrl+1`, `Ctrl+2`, `Ctrl+3`  
**Purpose:** Quickly toggle between different header levels (H1, H2, H3).

```javascript
if (isHotkey("ctrl+1", event)) {
  event.preventDefault();
  toggleBlock(editor, "heading-one");
} else if (isHotkey("ctrl+2", event)) {
  event.preventDefault();
  toggleBlock(editor, "heading-two");
} else if (isHotkey("ctrl+3", event)) {
  event.preventDefault();
  toggleBlock(editor, "heading-three");
}
```

---

### **4. Wrap Selection in a Link**
**Hotkey:** `Ctrl+K`  
**Purpose:** Convert selected text into a hyperlink.

```javascript
if (isHotkey("ctrl+k", event)) {
  event.preventDefault();
  const url = prompt("Enter the URL:");
  if (url) {
    Transforms.wrapNodes(
      editor,
      { type: "link", url, children: [] },
      { split: true }
    );
  }
}
```

---

### **5. Insert Image**
**Hotkey:** `Ctrl+Shift+I`  
**Purpose:** Insert an image by providing its URL.

```javascript
if (isHotkey("ctrl+shift+i", event)) {
  event.preventDefault();
  const url = prompt("Enter the image URL:");
  if (url) {
    Transforms.insertNodes(editor, {
      type: "image",
      url,
      children: [{ text: "" }],
    });
  }
}
```

---

### **6. Convert Text to Uppercase/Lowercase**
**Hotkey:** `Ctrl+U`  
**Purpose:** Toggle the selected text between uppercase and lowercase.

```javascript
if (isHotkey("ctrl+u", event)) {
  event.preventDefault();
  const [match] = Editor.nodes(editor, {
    match: (n) => Text.isText(n),
  });
  if (match) {
    const [node] = match;
    const newText = node.text === node.text.toUpperCase()
      ? node.text.toLowerCase()
      : node.text.toUpperCase();
    Transforms.insertText(editor, newText, { at: editor.selection });
  }
}
```

---

### **7. Toggle Bullet/Numbered Lists**
**Hotkeys:** `Ctrl+Shift+B` (Bullet), `Ctrl+Shift+N` (Numbered)  
**Purpose:** Easily switch between bullet and numbered lists.

```javascript
if (isHotkey("ctrl+shift+b", event)) {
  event.preventDefault();
  toggleBlock(editor, "bulleted-list");
} else if (isHotkey("ctrl+shift+n", event)) {
  event.preventDefault();
  toggleBlock(editor, "numbered-list");
}
```

---

### **8. Highlight Text**
**Hotkey:** `Ctrl+Shift+H`  
**Purpose:** Add a highlight to the selected text.

```javascript
if (isHotkey("ctrl+shift+h", event)) {
  event.preventDefault();
  toggleMark(editor, "highlight");
}
```

---

### **9. Undo/Redo**
**Hotkeys:** `Ctrl+Z` (Undo), `Ctrl+Shift+Z` (Redo)  
**Purpose:** Standard undo/redo functionality.

```javascript
if (isHotkey("ctrl+z", event)) {
  event.preventDefault();
  editor.undo();
} else if (isHotkey("ctrl+shift+z", event)) {
  event.preventDefault();
  editor.redo();
}
```

---

### **10. Insert Table**
**Hotkey:** `Ctrl+T`  
**Purpose:** Insert a 3x3 table for structured content.

```javascript
if (isHotkey("ctrl+t", event)) {
  event.preventDefault();
  const rows = Array(3).fill(
    Array(3).fill({ type: "table-cell", children: [{ text: "" }] })
  );
  Transforms.insertNodes(editor, {
    type: "table",
    children: rows.map((row) => ({
      type: "table-row",
      children: row,
    })),
  });
}
```

---

These utilities cover a range of functionality from formatting to content insertion, helping authors save time and improve their writing process.