<script>
import draggable from 'vuedraggable'
import { useVuelidate } from '@vuelidate/core'
import { requiredIf } from '@vuelidate/validators'
import $ from 'jquery'
import { useTodoList } from '@/stores/todoList'
import { todoMixin } from './todo.mixins.js'

export default {
  name: 'two-list-headerslots',
  display: 'Two list header slot',
  order: 14,
  mixins: [todoMixin],
  components: {
    draggable
  },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      todoLists: [],
      taskNames: [
        {
          id: 1,
          name: 'Todo'
        },
        {
          id: 2,
          name: 'InProgress'
        },
        {
          id: 3,
          name: 'Review'
        }
      ],
      userName: null,
      taskName: null,
      dueDate: null,
      taskType: 'InProgress',
      description: null,
      profileUrl: null,
      headerName: null,
      taskTypeHeader: null,
      addTaskValidationControl: false,
      addSectionValidationControl: false,
      viewType: 'card',
      handleTodos: null
    }
  },
  validations() {
    return {
      userName: {
        required: requiredIf(function () {
          if (!this.userName && !this.taskTypeHeader) {
            return true
          }
          return false
        })
      },
      taskName: {
        required: requiredIf(function () {
          if (!this.taskName && !this.taskTypeHeader) {
            return true
          }
          return false
        })
      },
      taskTypeHeader: {
        required: requiredIf(function () {
          if (!this.taskTypeHeader && !(this.userName && this.taskName)) {
            return true
          }
          return false
        })
      }
    }
  },
  created() {
    this.handleTodos = useTodoList()
    this.refreshTodsLists()
    this.dueDate = new Date()
      .toLocaleDateString()
      .split('/')
      .reverse()
      .map((data) => {
        return data.length === 1 ? 0 + data : data
      })
      .join('-')
  },
  methods: {
    refreshTodsLists() {
      this.todoLists = this.handleTodos.todoLists
    },
    switchcardListView() {
      this.viewType = this.viewType === 'list' ? 'card' : 'list'
    },
    addRows(header) {
      this.headerName = header
      this.taskType = this.headerName
      this.addTaskValidationControl = true
    },
    addSection() {
      this.addSectionValidationControl = true
    },
    async submitForm() {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return false
      return true
    },
    async createNewTask() {
      this.addTaskValidationControl = false
      if (await this.submitForm()) {
        const index = this.todoLists.findIndex((data) => {
          return this.headerName === data.header
        })
        this.handleTodos.createNewTask(index, {
          profile: this.profileUrl,
          name: this.userName,
          taskName: this.taskName,
          deadLine: this.dueDate,
          type: this.taskType,
          description: this.description,
          id: this.todoLists[index].length
        })
        $('.close_btn_modal').trigger('click')
        this.refreshTodsLists()
        this.refreshTaskForm()
      }
    },
    refreshTaskForm() {
      this.description = null
      this.profileUrl = null
      this.userName = null
      this.taskName = null
    },
    selectedTaskType(taskType) {
      this.taskType = taskType
    },
    async createNewTaskHeader() {
      this.addSectionValidationControl = false
      if (await this.submitForm()) {
        this.taskNames.push({
          id: this.taskNames.length,
          name: this.taskTypeHeader
        })
        this.handleTodos.createNewTaskHeader(this.taskTypeHeader)
        $('.close_btn_sidebar').trigger('click')
        this.refreshTodsLists()
        this.taskTypeHeader = null
      }
    },
    removeTask(item, index) {
      this.handleTodos.removeTask(item, index)
      this.refreshTodsLists()
    }
  }
}
</script>
<script setup></script>
<style src="./todo.scss"></style>
<template src="./todo.html"></template>
