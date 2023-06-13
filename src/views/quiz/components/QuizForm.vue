<template>
  <el-skeleton v-if="isLoading" />
  <template v-else>
    <template v-if="isQuizCompleted">
      <p
        v-if="correctAnswersCount !== questions.length"
        class="font-poppins text-[18px] mb-[15px]"
      >
        You almost did it!
      </p>
      <Confetti v-if="correctAnswersCount === questions.length" class="top-[350px]" />
      <p class="font-poppins mb-[15px]">
        Correct {{ correctAnswersCount }} / {{ questions.length }}
      </p>
    </template>
    <el-form
      ref="formRef"
      :model="formModel"
      label-position="top"
      :disabled="isQuizCompleted"
      @submit.prevent="submitForm"
    >
      <el-form-item v-for="item in questions" :key="item.id" :label="item.question">
        <el-card
          class="w-full border-2"
          :class="{ [`${handleResultColor(result[item.id])}`]: isQuizCompleted }"
        >
          <el-radio-group v-model="formModel[item.id]" class="flex flex-col">
            <el-radio v-for="(answer, index) in item.answers" :key="index" :label="answer" />
          </el-radio-group>
        </el-card>
      </el-form-item>
      <el-button type="primary" native-type="submit">Finish quiz</el-button>
    </el-form>
  </template>
</template>

<script setup lang="ts">
import { generatePromoCode, notificationHandler } from '@/helpers'

const authStore = useAuthStore()

const result = ref<Record<string, boolean>>({})
const correctAnswersCount = ref(0)
const isQuizCompleted = ref(false)
const questions = ref<Pick<TQuiz, 'id' | 'question' | 'answers'>[]>([])
const rightAnswers = ref<Pick<TQuiz, 'id' | 'rightAnswer'>[]>([])
const isLoading = ref(true)
const nextMonthDate = ref<Date>(new Date())

const formRef = useElFormRef()

const formModel = useElFormModel<Record<string, string>>({})

onMounted(() => {
  getQuestions()
})

onUnmounted(() => {
  if (authStore.user) {
    authStore.user.quiz_available_since = nextMonthDate.value.toISOString()
  }
})

const getQuestions = async () => {
  try {
    const { data } = await quizService.getQuestions()

    if (!data) {
      return
    }

    questions.value = data
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

const getRightAnswers = async () => {
  try {
    const { data } = await quizService.getRightAnswers()

    if (!data) {
      return
    }

    rightAnswers.value = data
  } catch (error) {
    console.error(error)
  }
}

const validateQuiz = async () => {
  questions.value.forEach((question) => {
    const userAnswer = formModel[question.id]
    const rightAnswer = rightAnswers.value.find(rightAnswer => rightAnswer.id === question.id)?.rightAnswer

    const isCorrect = userAnswer === rightAnswer

    if (isCorrect) {
      correctAnswersCount.value += 1
    }

    result.value[question.id] = isCorrect
  })

  isQuizCompleted.value = true
}

const handleResultColor = (isAnswerCorrect: boolean) =>
  isAnswerCorrect ? 'border-green-200' : 'border-red-200'

const handleSubmitWorkflow = async () => {
  await getRightAnswers()

  if (!rightAnswers.value.length || !authStore.user) {
    return
  }

  validateQuiz()

  if (correctAnswersCount.value === questions.value.length) {
    const promocode = generatePromoCode()

    await quizService.addUserPromocode(authStore.user.id, promocode)
    authStore.user.promocode = promocode
    notificationHandler(`Your promocode: ${promocode.code}`, { type: 'success', duration: 0 })
  }

  generateNextMonthDate()

  await quizService.updateDateAfterQuizFinished(authStore.user.id, nextMonthDate.value)
}

const generateNextMonthDate = () => {
  const currentDate = new Date()
  const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate())

  nextMonthDate.value = nextMonth
}

const submitForm = () => {
  formRef.value.validate(async valid => {
    if (valid) {
      handleSubmitWorkflow()
    }
  })
}
</script>
