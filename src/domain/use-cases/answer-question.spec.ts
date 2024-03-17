import { AnswerRepository } from '../repositories/answer-repository'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswerRepository: AnswerRepository = {
  create: async () => {},
}

it('create an answer', async () => {
  const answerUseCase = new AnswerQuestionUseCase(fakeAnswerRepository)
  const answer = await answerUseCase.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  })
  expect(answer.content).toEqual('Nova resposta')
})
