import { join } from "path"

import { standardColors, vividColors } from "./theme/colors"
import { editorTokens } from "./theme/editor"
import { getSemanticTokenColors } from "./theme/semantic-colors"
import {
  alwaysBoldTokens,
  alwaysItalicTokens,
  getStandardTokens,
} from "./theme/theme"
import { writeFile } from "./utils"

export function generateTheme({ vivid }: { vivid: boolean }) {
  const colors = vivid ? vividColors : standardColors

  const tokenColors = [
    getStandardTokens(colors),
    alwaysItalicTokens,
    alwaysBoldTokens,
  ].reduce((aggregate, curr) => aggregate.concat(...curr), [])

  return {
    colors: editorTokens,
    name: vivid ? "One Dark Darker Vivid" : "One Dark Darker",
    semanticHighlighting: true,
    semanticTokenColors: getSemanticTokenColors(colors),
    tokenColors,
    type: "dark",
  }
}

writeFile(
  join(__dirname, "..", "themes", "one-dark-darker.json"),
  generateTheme({ vivid: false })
)

writeFile(
  join(__dirname, "..", "themes", "one-dark-darker-vivid.json"),
  generateTheme({ vivid: true })
)
