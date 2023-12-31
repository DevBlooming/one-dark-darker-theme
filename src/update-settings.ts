import { ConfigurationTarget, workspace } from "vscode"
import { ThemeConfiguration, TokenGroup } from "./models"
import { boldItalicTokens, boldTokens, italicTokens } from "./token-groups"

export async function updateSettings({
  bold,
  italic,
  vivid,
}: ThemeConfiguration) {
  const config = workspace.getConfiguration("editor")
  const oldConfig = config.get<Record<string, unknown>>(
    "tokenColorCustomizations"
  )

  const textMateRules = ((oldConfig.textMateRules || []) as TokenGroup[])
    .filter((rule) => !rule.name.startsWith("One Dark Darker"))
    .concat(bold ? boldTokens : [])
    .concat(italic ? italicTokens : [])
    .concat(bold && italic ? boldItalicTokens : [])

  const value = { ...oldConfig, textMateRules }

  // Delete the textMateRules if it's empty
  if (!textMateRules.length) {
    delete value.textMateRules
  }

  await config.update(
    "tokenColorCustomizations",
    Object.keys(value).length ? value : undefined,
    ConfigurationTarget.Global
  )

  // Until the vivid setting is removed, sync the color theme with the setting
  await workspace
    .getConfiguration("workbench")
    .update(
      "colorTheme",
      vivid ? "One Dark Darker Vivid" : "One Dark Darker",
      ConfigurationTarget.Global
    )
}
