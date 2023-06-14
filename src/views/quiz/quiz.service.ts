class QuizService {
  getQuestions () {
    return useSupabase.from('quiz').select('id, question, answers')
  }

  getRightAnswers () {
    return useSupabase.from('quiz').select('id, rightAnswer')
  }

  updateDateAfterQuizFinished (userId: string, date: Date) {
    return useSupabase.from('profiles').update({ quiz_available_since: date.toISOString() }).eq('id', userId)
  }

  addUserPromocode (userId: string, promocode: TPromocode) {
    return useSupabase.from('profiles').update({ promocode }).eq('id', userId)
  }
}

export const quizService = new QuizService()
