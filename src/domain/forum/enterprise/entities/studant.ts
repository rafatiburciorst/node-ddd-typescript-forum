import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface StudantsProps {
  name: string
  props: StudantsProps
}

export class Studants extends Entity<StudantsProps> {
  static create(props: StudantsProps, id?: UniqueEntityID) {
    const studant = new Studants(props, id)
    return studant
  }
}
