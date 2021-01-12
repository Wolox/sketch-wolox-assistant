import { resolve } from 'path'
import { testAssistant } from '@sketch-hq/sketch-assistant-utils'

import Assistant from '../..'

describe('No Lorem Ipsum', () => {

  test('No Lorem Ipsum text in any layer', async () => {
    const { violations, ruleErrors } = await testAssistant(
      resolve(__dirname, './lorem.sketch'),
      Assistant,
    )
    expect(violations.find(violation => violation.ruleName === 'sketch-wolox-assistant/lorem-ipsum')).not.toBeUndefined()
    expect(violations.find(violation => violation.message === 'Lorem Ipsum template in Desktop 2')).not.toBeUndefined()
    expect(ruleErrors).toHaveLength(0)
  })

})
