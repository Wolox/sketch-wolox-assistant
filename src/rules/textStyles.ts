import { RuleDefinition } from "@sketch-hq/sketch-assistant-types"

export const textStyle: RuleDefinition = {
  rule: async (context) => {
    if (!context.file.objects.sharedStyle?.length) {
      context.utils.report('No text style is created')
    }
  },
  name: 'sketch-wolox-assistant/text-style',
  title: 'Text Style',
  description: 'Checks if at least one text style is created'
}

export const textStyleOnAllTexts: RuleDefinition = {
  rule: async (context) => {
    const textWithNoSharedStyle = context.file.objects.text.filter(text => !text.sharedStyleID)
    if (textWithNoSharedStyle.length) {
      textWithNoSharedStyle.forEach(text => {
        context.utils.report(`Text style missing in text: "${text.attributedString.string}"`)
      })
    }
  },
  name: 'sketch-wolox-assistant/text-style-all-texts',
  title: 'Text Style in all texts',
  description: 'Checks if every text has style'
}
