import { resolve } from 'path'
import { testAssistant } from '@sketch-hq/sketch-assistant-utils'

import Assistant from '../..'

describe('Shared Styles in texts', () => {

  test('At least 1 text style is created', async () => {
    const { violations, ruleErrors } = await testAssistant(
      resolve(__dirname, './textStyles.sketch'),
      Assistant,
    )
    expect(violations.find(violation => violation.ruleName === 'sketch-wolox-assistant/text-style')).toBeUndefined()
    expect(ruleErrors).toHaveLength(0)
  })

  test('There is no shared style applied to all texts', async () => {
    const { violations, ruleErrors } = await testAssistant(
      resolve(__dirname, './textStyles.sketch'),
      Assistant,
    )
    expect(violations.find(violation => violation.ruleName === 'sketch-wolox-assistant/text-style-all-texts')).not.toBeUndefined()
    expect(ruleErrors).toHaveLength(0)
  })
})
