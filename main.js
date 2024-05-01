// Array of menu options with corresponding IDs
const menuOptions = [
  { text: "Highlight", id: "highlight" },
  { text: "Underline", id: "underline" },
  { text: "📝Note", id: "note" },
  { text: "Clear", id: "clear" },
  { text: "Clear all", id: "clearAll" },
];

// Context menu event listener
document.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // Prevent the default context menu

  // Create a div element for the context menu
  const contextMenu = document.createElement("div");
  contextMenu.id = "context-menu";

  // Loop through the menuOptions array to create buttons for each option
  menuOptions.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.id = option.id;
    button.classList.add("menu-button"); // Add a class to the button for css

    contextMenu.appendChild(button);
  });
  // Append the context menu to the body
  document.body.appendChild(contextMenu);

  const buttons = document.getElementsByClassName("menu-button");
  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", function () {
      // Handle the click event for each button here
      console.log("Button clicked: " + button.id);
      //highlight buttton
      if (button.id === "highlight") {
        const highlightSelectedText = () => {
          const selection = window.getSelection();
          if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const span = document.createElement("span");
            span.style.backgroundColor = "yellow";
            range.surroundContents(span);
          }
        };
        highlightSelectedText();
      }
      //underline buttton
      if (button.id === "underline") {
        const underlineSelectedText = () => {
          const selection = window.getSelection();
          if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const span = document.createElement("span");
            span.style.textDecoration = "underline";
            range.surroundContents(span);
          }
        };
        underlineSelectedText();
      }
      // Add note to selected text
      if (button.id === "note") {
        const addNoteToSelectedText = () => {
          // Implement your logic for adding a note to selected text
          console.log("Adding note to selected text");
        };
        addNoteToSelectedText();
      }
      // Clear selected highlight
      if (button.id === "clear") {
        const clearSelectedHighlight = () => {
          const selection = window.getSelection();
          if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const span = document.createElement("span");
            span.style.backgroundColor = "transparent";
            range.surroundContents(span);
          }
        };
        clearSelectedHighlight();
      }
      // Clear all highlights and notes
      if (button.id === "clearAll") {
        const clearAllHighlightsAndNotes = () => {
          // Implement your logic for clearing all highlights and notes
          console.log("Clearing all highlights and notes");
        };
        clearAllHighlightsAndNotes();
      }
    });
  });

  // Position the context menu at the mouse pointer location
  contextMenu.style = `top:${event.pageY + 10}px;left:${event.pageX + 40}px`;

  // closing Right click menu
  contextMenu.onmouseleave = () => (contextMenu.outerHTML = "");

  // document.addEventListener("click", function () {
  //   contextMenu.outerHTML = "";
  // });
});
