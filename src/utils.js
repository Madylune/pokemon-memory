import shuffle from 'lodash/fp/shuffle'
import take from 'lodash/fp/take'
import flow from 'lodash/fp/flow'
import clone from 'lodash/fp/clone'
import concat from 'lodash/fp/concat'
import map from 'lodash/fp/map'

export const shuffleCards = cards => {
  const originals = flow(
    shuffle,
    take(12),
  )(cards)
  const clones = clone(originals)
  const mergedCards = flow(
    clones => map(clone => ({
      ...clone,
      id: `${clone.id}-clone`
    }), clones),
    concat(originals),
    shuffle
  )(clones)
  return mergedCards
}
