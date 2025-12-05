import React from "react";
import sanitizeHtml from "sanitize-html";

const TextEditorReader = ({ value }: { value: string }) => {
  const sanitizedHTML = sanitizeHtml(value, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "span",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "style",
      "p",
      "a",
      "img",
      "table",
      "td",
      "th",
      "tr",
      "tbody",
      "thead",
      "tfoot",
      "div",
      "ul",
      "ol",
      "li",
      "iframe",
      "video",
      "audio",
      "source",
      "br",
      "hr",
      "strong",
      "b",
      "i",
      "em",
      "u",
      "s",
      "sub",
      "sup",
      "blockquote",
      "pre",
      "code",
      "svg",
      "g",
      "path",
      "defs",
      "symbol",
      "use",
      "rect",
      "circle",
      "line",
      "polyline",
      "polygon",
      "details",
      "summary",
      "font",
      "center",
      "section",
      "article",
      "aside",
      "nav",
      "main",
      "header",
      "footer",
    ]),
    allowedAttributes: {
      "*": [
        "style",
        "class",
        "dir",
        "lang",
        "title",
        "id",
        "role",
        "aria-*",
        "data-*",
        "xmlns",
        "viewBox",
        "fill",
        "stroke",
        "stroke-width",
      ],
      a: ["href", "name", "target", "rel", "download"],
      img: ["src", "alt", "width", "height", "loading", "srcset", "sizes"],
      iframe: [
        "src",
        "width",
        "height",
        "frameborder",
        "allow",
        "allowfullscreen",
        "scrolling",
        "sandbox",
        "referrerpolicy",
      ],
      video: [
        "src",
        "poster",
        "controls",
        "playsinline",
        "preload",
        "width",
        "height",
        "autoplay",
        "loop",
        "muted",
      ],
      audio: ["src", "controls", "preload", "autoplay", "loop", "muted"],
      table: [
        "border",
        "cellpadding",
        "cellspacing",
        "width",
        "summary",
        "align",
      ],
      td: ["colspan", "rowspan", "align", "valign", "width", "height"],
      th: ["colspan", "rowspan", "align", "valign", "width", "height"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel", "data", "blob"],
    allowedSchemesByTag: {
      img: ["http", "https", "data", "blob"],
      a: ["http", "https", "mailto", "tel"],
      iframe: ["http", "https"],
    },
    allowedStyles: {
      "*": {
        color: [/.*/],
        background: [/.*/],
        "background-color": [/.*/],
        "background-image": [/.*/],
        "background-position": [/.*/],
        "background-size": [/.*/],
        "background-repeat": [/.*/],
        font: [/.*/],
        "font-size": [/.*/],
        "font-family": [/.*/],
        "font-weight": [/.*/],
        "font-style": [/.*/],
        "line-height": [/.*/],
        "letter-spacing": [/.*/],
        "text-align": [/.*/],
        "text-decoration": [/.*/],
        "text-transform": [/.*/],
        "text-indent": [/.*/],
        "text-overflow": [/.*/],
        "text-shadow": [/.*/],
        "vertical-align": [/.*/],
        "white-space": [/.*/],
        "word-break": [/.*/],
        "word-wrap": [/.*/],
        width: [/.*/],
        height: [/.*/],
        "min-width": [/.*/],
        "max-width": [/.*/],
        "min-height": [/.*/],
        "max-height": [/.*/],
        margin: [/.*/],
        "margin-top": [/.*/],
        "margin-right": [/.*/],
        "margin-bottom": [/.*/],
        "margin-left": [/.*/],
        padding: [/.*/],
        "padding-top": [/.*/],
        "padding-right": [/.*/],
        "padding-bottom": [/.*/],
        "padding-left": [/.*/],
        border: [/.*/],
        "border-top": [/.*/],
        "border-right": [/.*/],
        "border-bottom": [/.*/],
        "border-left": [/.*/],
        "border-radius": [/.*/],
        "border-color": [/.*/],
        "border-width": [/.*/],
        "border-style": [/.*/],
        display: [/.*/],
        position: [/.*/],
        top: [/.*/],
        left: [/.*/],
        right: [/.*/],
        bottom: [/.*/],
        float: [/.*/],
        clear: [/.*/],
        overflow: [/.*/],
        "overflow-x": [/.*/],
        "overflow-y": [/.*/],
        "z-index": [/.*/],
        "box-shadow": [/.*/],
        opacity: [/.*/],
        visibility: [/.*/],
        flex: [/.*/],
        "flex-direction": [/.*/],
        "flex-wrap": [/.*/],
        "justify-content": [/.*/],
        "align-items": [/.*/],
        "align-content": [/.*/],
        gap: [/.*/],
        grid: [/.*/],
        "grid-template-columns": [/.*/],
        "grid-template-rows": [/.*/],
        "grid-column": [/.*/],
        "grid-row": [/.*/],
        transform: [/.*/],
        transition: [/.*/],
        animation: [/.*/],
      },
    },
  });

  return (
    <div className="prose prose-rtl max-w-none">
      <style>{`
        /* Scoped to .text-editor-content class */
        .text-editor-content .MsoNormal,
        .text-editor-content .MsoListParagraphCxSpFirst,
        .text-editor-content .MsoListParagraphCxSpMiddle,
        .text-editor-content .MsoListParagraphCxSpLast {
          margin: 0;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .text-editor-content [dir="rtl"] {
          direction: rtl;
          text-align: right;
        }

        .text-editor-content h1,
        .text-editor-content h2,
        .text-editor-content h3,
        .text-editor-content h4,
        .text-editor-content h5,
        .text-editor-content h6 {
          font-weight: bold;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        /* Heading colors */
        .text-editor-content h2,
        .text-editor-content h3,
        .text-editor-content h4,
        .text-editor-content h5,
        .text-editor-content h6 {
          color: #0b5394;
        }

        .text-editor-content h2 {
          font-size: 1.5rem;
        }

        .text-editor-content p {
          margin-bottom: 1rem;
          line-height: 1.8;
        }

        /* Links - only affects links INSIDE .text-editor-content */
        .text-editor-content a {
          color: #930e93;
          text-decoration: underline;
        }

        .text-editor-content a:hover {
          color: #1d4ed8;
        }

        .text-editor-content strong {
          font-weight: 600;
        }

        .text-editor-content ul,
        .text-editor-content ol {
          margin-bottom: 1rem;
          padding-right: 1.5rem;
          padding-left: 0;
        }

        .text-editor-content li {
          margin-bottom: 0.5rem;
        }

        .text-editor-content span[style*="mso-"] {
          mso-style-parent: "";
        }

        .text-editor-content {
          font-size: 16px;
        }

        .text-editor-content o\\:p {
          display: none;
        }
      `}</style>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        className="text-editor-content"
      />
    </div>
  );
};

export default TextEditorReader;
