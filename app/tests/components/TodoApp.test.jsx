var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo state on handleAddToDo', () =>{
    var todoText = "new todo test";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddToDo(todoText);
    var created = todoApp.state.todos[0].createdAt;

    expect(todoApp.state.todos[0].text).toBe(todoText);
    //expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var id = 224;
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[
      {
        id: 224,
        text: 'toggle',
        completed: false,
        createdAt: 0,
        completedAt: undefined
      }
        ]});

        var todo = todoApp.state.todos[0];
        expect(todo.completed).toBe(false);
        todoApp.handleToggle(id);
        expect(todo.completed).toBe(true);
        //expect completedAt to be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });
    //test that when toggle from true to false, completedAt gets removed
    it('should change completedAt to undefined when completed is false', () =>{
      var id = 224;
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos:[
        {
          id: 224,
          text: 'toggle',
          completed: true,
          createdAt: 0,
          completedAt: 123
        }
          ]});
          var todo = todoApp.state.todos[0];
          todoApp.handleToggle(id);
          expect(todo.completedAt).toNotExist();
    })
});
