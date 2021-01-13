import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'

import { textStyle, textStyleOnAllTexts } from './rules/textStyles'
import noLoremIpsum from './rules/loremIpsum'

const woloxAssistant: AssistantPackage = async () => {
  return {
    name: 'sketch-wolox-assistant',
    rules: [textStyle, noLoremIpsum, textStyleOnAllTexts],
    config: {
      rules: {
        'sketch-wolox-assistant/text-style': { active: true },
        'sketch-wolox-assistant/text-style-all-texts': { active: true },
        'sketch-wolox-assistant/lorem-ipsum': { active: true, severity: 2 }
      },
    },
  }
}

export default woloxAssistant
