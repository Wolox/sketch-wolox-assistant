import { RuleDefinition } from "@sketch-hq/sketch-assistant-types"

const noLoremIpsum: RuleDefinition = {
  rule: async (context) => {
    context.file.objects.artboard.map(ab => {
      ab.layers.forEach(layer => {
        if (
          layer._class === 'text' &&
          layer.attributedString.string.toLocaleLowerCase().includes('lorem ipsum')
        ) {
          context.utils.report(`Lorem Ipsum template in ${ab.name}`)
        }
      })
    })
  },
  name: 'sketch-wolox-assistant/lorem-ipsum',
  title: 'No Lorem Ipsum',
  description: 'Checks if there is a lorem template text'
}

export default noLoremIpsum
