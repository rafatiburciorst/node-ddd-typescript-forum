import { InMemoryQuestionRepository } from 'test/repositories/in-memory-question-repository'

import { CreateQuestionUseCase } from './create-question'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: CreateQuestionUseCase
// system under test
describe('CreateQuestionUseCase', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionRepository)
  })
  it('should be able to create a a question', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'Nova pergunta',
      content: 'Nova resposta',
    })
    expect(question.id).toBeTruthy()
    expect(inMemoryQuestionRepository.questions[0].id).toBe(question.id)
  })
})
