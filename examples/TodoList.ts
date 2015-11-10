import {Component,Input, NgFor, NgClass,Output, EventEmitter} from 'angular2/angular2';
import {Todo} from "./Todo";
import {List} from 'immutable';



@Component({
    selector: 'todo-list',
    directives: [NgFor, NgClass],
    template: `

        <section id="main" [hidden]="todos.size === 0">
            <input id="toggle-all" type="checkbox" (click)="markAllCompleted()">
            <label for="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
                <li *ng-for="#todo of todos;" [ng-class]="{completed: todo.completed}">
                    <div class="view">
                        <input class="toggle" type="checkbox" (change)="complete(todo)">
                        <label (click)="beginEdit(todo)">{{todo.description}}</label>
                        <button class="destroy" (click)="delete(todo)"></button>
                    </div>
                    <form (ng-submit)="saveEditedTodo(todo)">
                        <input class="edit" (blur)="saveEdited(todo)">
                    </form>
                </li>
            </ul>
        </section>
    `
})
export class TodoList {

    @Input() todos: List<Todo>;
    @Output()  allCompleted = new EventEmitter();
    @Output()  deleteTodo = new EventEmitter();

    markAllCompleted() {
        this.allCompleted.next(null);
    }

    complete(todo: Todo) {
        console.log('complete todo');
    }

    beginEdit(todo:Todo) {
        console.log('begin edit todo');
    }

    saveEdited(todo:Todo) {
        console.log("save edited Todo");
    }

    delete(todo:Todo) {
        console.log("delete todo");
    }



}