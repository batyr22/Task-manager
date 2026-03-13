import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', () => {

    // ВСЕ МАССИВЫ //

    const allCategories = ref([                                    // категории
        { id: 1, name: 'Работа', design: 'cat-work' },
        { id: 2, name: 'Личное', design: 'cat-personal' },
        { id: 3, name: 'Здоровье', design: 'cat-health' },
        { id: 4, name: 'Учёба', design: 'cat-study' },
    ])

    const todos = ref([{                        // массив который хранит все задачи
        id: 1,
        text: 'Сдать проект по Vue',
        categories: [...allCategories.value], // храним массив выбранных категорий для задачи
        done: false
    }])
    
    const newTodoText = ref('')   // инпут где заполняем задачу

    const selectedForNewTodo = ref([])    // выбранные категории с аllCategories хранятся в этом массиве
    
    // ВСЕ ФУНКЦИИ //

    function addTodo() {                            // здесь мы добавляем новую задачу
        if (newTodoText.value.trim() === '') return
        
        todos.value.push({
            id: Date.now(),
            text: newTodoText.value,
            categories: [...selectedForNewTodo.value], 
            done: false
        })
        
        newTodoText.value = ''
        selectedForNewTodo.value = []
    }

    function toggleCategoryForNewTodo(category) {                                  // тут мы выбираем категорию и отправляем в массив selectedForNewTodo
        const index = selectedForNewTodo.value.findIndex(c => c.id === category.id) 
        if (index > -1) {
            selectedForNewTodo.value.splice(index, 1)
        } else {
            selectedForNewTodo.value.push(category) 
        }
    }

    function toggleDone(id) {
        const todo = todos.value.find(t => t.id === id) // здесь мы завершаем задачу
        if (todo) todo.done = !todo.done
    }

    function deleteTodo(id) {
        todos.value = todos.value.filter(t => t.id !== id)      // удаляем задачу
    }

    function editTodo(id, newText) {
        const todo = todos.value.find(t => t.id === id)
        if (todo) todo.text = newText
    }

    // СЧЕТЧИК ЗАДАЧ УНИКАЛЬНЫМ МЕТОДОМ computed //

    const totalTodos = computed(() => todos.value.length) // общее кол-во задач

    const completedTodos = computed(() => todos.value.filter(t => t.done)) // завершенные задачи
    const activeTodos = computed(() => todos.value.filter(t => !t.done)) // незавершенные задачи

    const notcompletedTodos = computed(() => todos.value.filter(t => !t.done).length) // кол-во незавершенных задач
    const doneTodos = computed(() => todos.value.filter(t => t.done).length) // кол-во завершенных задачи

    const progressPercentage = computed(() => { // процент завершенных задач
    if (totalTodos.value === 0) return 0;
    
    return Math.round((doneTodos.value / totalTodos.value) * 100);
    });

    const currentFilterId = ref(1) // по умолчанию выбрано "Все"

    const filters = ref([
        { id: 1, text: 'Все' },
        { id: 2, text: 'Активные' },
        { id: 3, text: 'Выполненные' }
    ])

    const filteredTodos = computed(() => {
        if (currentFilterId.value === 2)        // если currentFilterId равно 2 то оно выведет только активные
            return todos.value.filter(t => !t.done)
        if (currentFilterId.value === 3)        // если currentFilterId равно 3 то оно выведет только выполненные
            return todos.value.filter(t => t.done)
        return todos.value
    })

    // --------------------------------------------------- //


    
    return {                 // здесь мы возвращаем все значение что-бы использовать их в компонентах
        todos, 
        newTodoText, 
        allCategories, 
        selectedForNewTodo,
        addTodo, 
        toggleCategoryForNewTodo, 
        toggleDone, 
        deleteTodo, 
        editTodo,
        totalTodos, 
        completedTodos,
        activeTodos,
        notcompletedTodos,
        doneTodos,
        progressPercentage,
        currentFilterId,
        filters,
        filteredTodos
    }
})
