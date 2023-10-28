import { TokenGroup } from "../models"

export const italicTokens: TokenGroup[] = [
  {
    name: "One Dark Darker italic",
    scope: [
      "comment",
      "entity.other.attribute-name",
      "keyword",
      "markup.underline.link",
      "storage.modifier",
      "storage.type",
      "string.url",
      "variable.language.super",
      "variable.language.this",
    ],
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "One Dark Darker italic reset",
    scope: [
      "keyword.operator",
      "keyword.other.type",
      "storage.modifier.import",
      "storage.modifier.package",
      "storage.type.built-in",
      "storage.type.function.arrow",
      "storage.type.generic",
      "storage.type.java",
      "storage.type.primitive",
    ],
    settings: {
      fontStyle: "",
    },
  },
]
