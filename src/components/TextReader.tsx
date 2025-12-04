"use client";
import React, { useMemo } from "react";
import DOMPurify from "isomorphic-dompurify";
import ReactHtmlParser from "react-html-parser";

type TextEditorReaderProps = {
  value: string;
};

const TextEditorReader: React.FC<TextEditorReaderProps> = ({ value }) => {
  const sanitizedHtml = useMemo(
    () =>
      DOMPurify.sanitize(value || "", {
        // You can tweak this config similar to sanitize-html
        ALLOWED_TAGS: [
          "a",
          "b",
          "i",
          "u",
          "em",
          "strong",
          "p",
          "br",
          "span",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "ul",
          "ol",
          "li",
          "table",
          "thead",
          "tbody",
          "tr",
          "th",
          "td",
          "img",
          "div",
        ],
        ALLOWED_ATTR: [
          "href",
          "target",
          "rel",
          "name",
          "title",
          "class",
          "id",
          "dir",
          "lang",
          "style",
          "src",
          "alt",
          "width",
          "height",
          "loading",
          "border",
          "cellpadding",
          "cellspacing",
          "colspan",
          "rowspan",
          "align",
          "valign",
        ],
        // Optional: keep this false if you don't want unknown protocols
        // ALLOW_UNKNOWN_PROTOCOLS: false,
      }),
    [value]
  );

  return (
    <div className="prose prose-rtl max-w-none">
      <style>{`
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

      {/* No dangerouslySetInnerHTML – ReactHtmlParser converts sanitized HTML to elements */}
      <div className="text-editor-content">
        {ReactHtmlParser(sanitizedHtml)}
      </div>
    </div>
  );
};

export default TextEditorReader;
