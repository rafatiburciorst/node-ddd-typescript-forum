import { InMemoryAnswerRepository } from 'test/repositories/in-memory-answer-repository'

import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnswerRepository: InMemoryAnswerRepository
let sut: AnswerQuestionUseCase
// system under test
describe('CreateAnswerUseCase', () => {
  beforeEach(() => {
    inMemoryAnswerRepository = new InMemoryAnswerRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswerRepository)
  })
  it('should be able to create a answer', async () => {
    const { answer } = await sut.execute({
      instructorId: '1',
      questionId: '1',
      content: 'Nova resposta',
    })
    expect(answer.id).toBeTruthy()
    expect(inMemoryAnswerRepository.answers[0].id).toBe(answer.id)
  })
})
